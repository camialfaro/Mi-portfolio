import { imagePath } from '../../utils/paths';

export default function Hero({ image, title, id, home = false }) {
  return (
    <section id={id} aria-label={title}
      className={`relative overflow-hidden ${home ? 'min-h-[110vh]' : 'min-h-screen'}`}>
      <div aria-hidden="true" className="hero-art absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${imagePath(image)}")` }} />
      <h1 className="sr-only">{title}</h1>
    </section>
  );
}
