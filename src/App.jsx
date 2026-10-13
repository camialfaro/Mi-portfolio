import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import { projects } from './data/projects';

export default function App() {
  // Each original HTML URL is a Vite entry point sharing the same React app.
  const page = window.location.pathname.split('/').pop();
  const project = projects.find(({ path }) => path.endsWith(`/${page}`));
  return <>
    <a href="#contenido" className="sr-only fixed top-2 left-2 z-[100] rounded bg-black p-3 focus:not-sr-only">Saltar al contenido</a>
    {project ? <ProjectPage project={project} /> : <HomePage />}
  </>;
}
