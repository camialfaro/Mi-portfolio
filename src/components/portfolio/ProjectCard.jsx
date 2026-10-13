import { imagePath, sitePath } from '../../utils/paths';

export default function ProjectCard({ project }) {
  return (
    <article className="text-center">
      <a href={sitePath(project.path)} aria-label={`Ver ${project.title}`} className="inline-block">
        <img src={imagePath(project.star)} alt={project.title} loading="lazy"
          className="w-[110px] transition duration-300 hover:scale-120 hover:drop-shadow-[0_0_15px_rgba(251,212,253,0.54)] motion-reduce:transform-none sm:w-[130px] md:w-[150px] lg:w-[170px]" />
      </a>
      <h3 className="mt-4 text-sm sm:text-base lg:text-lg">{project.title}</h3>
    </article>
  );
}
