import { imagePath } from '../../utils/paths';

export default function Hero({ image, title, id, home = false }) {
  return (
    <section id={id} aria-label={title}
      className={`bg-cover bg-center bg-no-repeat ${home ? 'min-h-[110vh]' : 'min-h-screen'}`}
      style={{ backgroundImage: `url("${imagePath(image)}")` }}>
      <h1 className="sr-only">{title}</h1>
    </section>
  );
}
