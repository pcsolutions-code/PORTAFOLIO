// Ruta a un archivo de /public/assets respetando la base de Vite (GitHub Pages).
export const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;
