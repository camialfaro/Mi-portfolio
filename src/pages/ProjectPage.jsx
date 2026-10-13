import Header from '../components/layout/Header';
import Carousel from '../components/ui/Carousel';
import Hero from '../components/ui/Hero';
import ImageSection from '../components/ui/ImageSection';
import { sitePath } from '../utils/paths';

export default function ProjectPage({ project }) {
  const links = [
    { href: sitePath('index.html#proyectos'), label: 'Proyectos' },
    ...project.sections.map(({ id, label }) => ({ href: `#${id}`, label })),
  ];
  return <>
    <Header logo={project.logo} title={project.name} links={links} homeHref={sitePath('index.html')} />
    <main id="contenido">
      <Hero image={project.cover} title={project.name} />
      {project.sections.map((section) => section.type === 'carousel'
        ? <Carousel key={section.id} {...section} />
        : <ImageSection key={section.id} {...section} />)}
    </main>
  </>;
}
