import { imagePath } from '../../utils/paths';

const variants = {
  default: 'mx-auto w-full',
  intro: 'mx-auto my-8 w-[90%] md:my-24 md:w-[55%] lg:w-[45%]',
  'wide-intro': 'mx-auto my-3 w-[90%] md:w-[70%]',
};

export default function ImageSection({ id, label, image, background, variant = 'default' }) {
  return (
    <section id={id} aria-label={label}
      className={`bg-cover bg-top bg-no-repeat p-4 md:p-10 ${variant === 'default' ? 'min-h-screen' : 'min-h-[50vh] md:min-h-[70vh]'}`}
      style={background ? { backgroundImage: `url("${imagePath(background)}")` } : undefined}>
      <h2 className="sr-only">{label}</h2>
      <img src={imagePath(image)} alt={label} loading="lazy" className={`${variants[variant]} h-auto`} />
    </section>
  );
}
