import { test, expect } from '@playwright/test';
import { projects } from '../src/data/projects.js';

test('home keeps project navigation and contact links', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Mis Proyectos' })).toBeVisible();
  await page.locator('#proyectos').scrollIntoViewIfNeeded();
  await page.screenshot({ path: `/tmp/portfolio-home-${test.info().project.name}.png` });
  await expect(page.locator('a[href="mailto:anacamilaalfaro1@gmail.com"]')).toBeVisible();
  await page.getByRole('link', { name: 'Ver Proyecto 1', exact: true }).click();
  await expect(page).toHaveURL(/pages\/proyecto1.html$/);
  await page.getByRole('link', { name: 'Proyectos', exact: true }).click();
  await expect(page).toHaveURL(/index.html#proyectos$/);
});

for (const project of projects) {
  test(`${project.slug}: direct entry, valid anchors and independent galleries`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(`/${project.path}`);
    expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
    for (const section of project.sections) {
      await page.getByRole('link', { name: section.label, exact: true }).click();
      const target = page.locator(`[id="${section.id}"]`);
      await expect(target).toBeVisible();
      if (section.type === 'carousel') {
        await expect(target.locator('[aria-hidden="false"]')).toHaveAttribute('aria-label', `1 de ${section.images.length}`);
      }
    }
    const carousels = page.locator('[aria-roledescription="carrusel"]');
    const first = carousels.first();
    await first.getByRole('button', { name: 'Siguiente' }).click();
    await expect(first.locator('[aria-hidden="false"]')).toHaveAttribute('aria-label', `2 de ${project.sections.find((s) => s.type === 'carousel').images.length}`);
    await first.focus();
    await page.keyboard.press('ArrowLeft');
    await expect(first.locator('[aria-hidden="false"]')).toHaveAttribute('aria-label', /^1 de /);
    await first.getByRole('button', { name: 'Anterior' }).click();
    await expect(first.locator('[aria-hidden="false"]')).toHaveAttribute('aria-label', `${project.sections.find((s) => s.type === 'carousel').images.length} de ${project.sections.find((s) => s.type === 'carousel').images.length}`);
    if (await carousels.count() > 1) await expect(carousels.nth(1).locator('[aria-hidden="false"]')).toHaveAttribute('aria-label', /^1 de /);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(errors).toEqual([]);
    await expect.poll(() => first.locator('[aria-hidden="false"] img').evaluate((image) => image.complete && image.naturalWidth > 0), { timeout: 15000 }).toBe(true);
    await page.screenshot({ path: `/tmp/portfolio-${project.slug}-${test.info().project.name}.png` });
  });
}

// Use a controlled clock so autoplay and pause are checked without long waits.
test('autoplay respects pause and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.clock.install();
  await page.goto('/pages/proyecto1.html');
  await page.mouse.move(0, 0);
  const gallery = page.locator('[aria-roledescription="carrusel"]').first();
  await page.clock.fastForward(7000);
  await expect(gallery.locator('[aria-hidden="false"]')).toHaveAttribute('aria-label', '2 de 5');
  await gallery.getByRole('button', { name: 'Pausar' }).click();
  await page.getByRole('link', { name: 'Proyectos', exact: true }).focus();
  await page.mouse.move(0, 0);
  const pausedSlide = await gallery.locator('[aria-hidden="false"]').getAttribute('aria-label');
  await page.clock.fastForward(21000);
  await expect(gallery.locator('[aria-hidden="false"]')).toHaveAttribute('aria-label', pausedSlide);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(gallery.getByRole('button', { name: 'Reproducir' })).toHaveCount(0);
});

test('animated project cards reveal on arrival and remain navigable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await page.getByRole('link', { name: 'Proyectos', exact: true }).click();
  const cards = page.locator('.project-card');
  await expect(cards.first()).toHaveAttribute('data-reveal', 'visible');
  await expect.poll(() => cards.first().evaluate((card) => getComputedStyle(card).opacity)).toBe('1');
  await expect(cards.first().locator('img')).toHaveCSS('animation-name', 'star-float');
  const link = page.getByRole('link', { name: 'Ver Proyecto 1', exact: true });
  await page.keyboard.press('Tab');
  await link.focus();
  await expect.poll(() => link.locator('img').evaluate((image) => getComputedStyle(image).filter)).not.toBe('none');
  await page.screenshot({ path: `/tmp/portfolio-motion-${test.info().project.name}.png` });
  await link.press('Enter');
  await expect(page).toHaveURL(/pages\/proyecto1.html$/);
  await page.getByRole('link', { name: 'Storytelling', exact: true }).click();
  await expect(page.locator('#Storytelling img')).toHaveAttribute('data-reveal', 'visible');
});

test('reduced motion keeps content visible and disables decorative motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.getByRole('link', { name: 'Proyectos', exact: true }).click();
  const card = page.locator('.project-card').first();
  await expect(card).toHaveCSS('opacity', '1');
  await expect(card.locator('img')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('.hero-art')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('.site-header')).toHaveCSS('animation-name', 'none');
  await expect(page.locator('#sobre-mi img')).toHaveCSS('opacity', '1');
});
