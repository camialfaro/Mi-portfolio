import { useEffect, useState } from 'react';
import useReveal from '../../hooks/useReveal';
import { imagePath } from '../../utils/paths';

const controlClass = 'gallery-control absolute top-1/2 z-10 -translate-y-1/2 rounded-md bg-black/60 px-3 py-2 text-xl hover:bg-black/80';

export default function Carousel({ id, label, images, background, fit = 'contain', padded = false, tall = false }) {
  const ref = useReveal();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const total = images.length;
  const move = (direction) => setIndex((current) => (current + direction + total) % total);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = (event) => setReducedMotion(event.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || reducedMotion || total < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % total), 7000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, reducedMotion, total, index]);

  return (
    <section ref={ref} id={id} role="region" aria-roledescription="carrusel" aria-label={label}
      tabIndex={0}
      className={`reveal relative overflow-hidden bg-cover bg-center ${tall ? 'h-screen md:h-[140vh]' : 'h-[70vh] md:h-screen'} ${padded ? 'p-4 md:p-10' : ''}`}
      style={background ? { backgroundImage: `url("${imagePath(background)}")` } : undefined}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          move(event.key === 'ArrowRight' ? 1 : -1);
        }
      }}>
      <h2 className="sr-only">{label}</h2>
      <div className="flex h-full transition-transform duration-1000 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((image, slideIndex) => (
          <div key={image} role="group" aria-roledescription="diapositiva"
            aria-label={`${slideIndex + 1} de ${total}`} aria-hidden={slideIndex !== index}
            className="h-full w-full shrink-0">
            <img src={imagePath(image)} alt={`${label}: ${image.replace(/\.[^.]+$/, '')}`}
              loading="lazy" className={`gallery-image block h-full w-full ${fit === 'cover' ? 'object-cover' : 'object-contain'}`} />
          </div>
        ))}
      </div>
      {total > 1 && <>
        <button type="button" aria-label="Anterior" className={`${controlClass} left-4`} onClick={() => move(-1)}>‹</button>
        <button type="button" aria-label="Siguiente" className={`${controlClass} right-4`} onClick={() => move(1)}>›</button>
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3">
          <span aria-live={hovered || focused || !playing ? 'polite' : 'off'} className="rounded bg-black/60 px-3 py-2 text-sm">{index + 1} / {total}</span>
          {!reducedMotion && <button type="button" className="rounded bg-black/60 px-3 py-2 text-sm hover:bg-black/80"
            onClick={() => setPlaying((value) => !value)}>{playing ? 'Pausar' : 'Reproducir'}</button>}
        </div>
      </>}
    </section>
  );
}
