// Vite supplies the deployment base, including GitHub Pages subdirectories.
export const sitePath = (path = '') => `${import.meta.env.BASE_URL}${path}`;
export const imagePath = (name) => sitePath(`img/${encodeURIComponent(name)}`);
