import useReveal from '../../hooks/useReveal';
import { imagePath, sitePath } from '../../utils/paths';

export default function ProjectCard({ project, index }) {
  const ref = useReveal();
  return (
    <article ref={ref} className="project-card reveal text-center"
      style={{ '--project-accent': project.accent, '--reveal-delay': `${index * 90}ms`, '--float-delay': `${index * -1.2}s` }}>
      <a href={sitePath(project.path)} aria-label={`Ver ${project.title}`} className="project-link inline-block">
        <img src={imagePath(project.star)} alt={project.title} loading="lazy"
          className="project-star w-[110px] sm:w-[130px] md:w-[150px] lg:w-[170px]" />
      </a>
      <h3 className="project-label mt-4 text-sm sm:text-base lg:text-lg">{project.title}</h3>
    </article>
  );
}
