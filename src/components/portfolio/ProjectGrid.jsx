import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  return (
    <section id="proyectos" className="bg-black px-4 py-20 text-center lg:py-[100px]">
      <h2 className="mb-5 text-2xl font-bold text-portfolio-blue">Mis Proyectos</h2>
      <div className="mx-auto mt-12 grid max-w-[800px] grid-cols-2 items-center justify-items-center gap-x-10 gap-y-12 md:gap-x-20 md:gap-y-16">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
