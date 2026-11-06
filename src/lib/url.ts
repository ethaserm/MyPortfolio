// Prefix internal links with the site's base path (needed on GitHub Pages project sites).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '/') => `${base}${path.startsWith('/') ? path : `/${path}`}`;

// Dates are shown as YYYY-MM-DD everywhere.
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
