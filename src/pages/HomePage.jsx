import Header from '../components/layout/Header';
import AboutSection from '../components/portfolio/AboutSection';
import ContactSection from '../components/portfolio/ContactSection';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import Hero from '../components/ui/Hero';
import { homeLinks } from '../data/site';

export default function HomePage() {
  return <>
    <Header logo="logo2.png" title="Logo portfolio" links={homeLinks} />
    <main id="contenido">
      <Hero id="inicio" image="background1.jpg" title="Portafolio de Camila Alfaro" home />
      <AboutSection />
      <ProjectGrid />
      <ContactSection />
    </main>
  </>;
}
