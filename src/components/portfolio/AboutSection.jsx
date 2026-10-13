import useReveal from '../../hooks/useReveal';
import { imagePath } from '../../utils/paths';

export default function AboutSection() {
  const ref = useReveal();
  return (
    <section id="sobre-mi" className="min-h-screen bg-cover bg-center px-2 pt-[120px] pb-3 text-center md:pt-[100px]"
      style={{ backgroundImage: `url("${imagePath('background2.jpg')}")` }}>
      <h2 className="sr-only">Sobre mí</h2>
      <img ref={ref} src={imagePath('descripcion.png')} alt="Sobre mí: presentación de Camila Alfaro" loading="lazy"
        className="reveal mx-auto my-8 h-auto w-[95%] sm:my-12 sm:w-[85%] md:my-20 md:w-[80%] lg:my-[100px] lg:w-[70%]" />
    </section>
  );
}
