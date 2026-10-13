import { imagePath } from '../../utils/paths';

export default function Header({ logo, title, links, homeHref = '#inicio' }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/56 py-2">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-4 md:flex-row md:gap-6 md:px-5">
        <a href={homeHref} aria-label="Volver al inicio" className="shrink-0">
          <img src={imagePath(logo)} alt={title} className="h-[60px] w-auto max-w-[220px] object-contain md:h-20 lg:h-[90px]" />
        </a>
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold sm:text-sm md:gap-x-8 lg:gap-x-12 lg:text-base">
          {links.map(({ href, label }) => (
            <li key={href}><a href={href} className="transition-opacity hover:opacity-75">{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
