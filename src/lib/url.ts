// Prefix internal links with the site's base path (needed on GitHub Pages project sites).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// Pages always end in a slash (/projects/my-app/) so relative links inside Markdown resolve
// correctly. Files such as /favicon.svg keep their extension and get no slash.
export const url = (path = '/') => {
  const p = path.startsWith('/') ? path : `/${path}`;
  const isFile = (p.split('/').pop() ?? '').includes('.');
  return `${base}${p.endsWith('/') || isFile ? p : `${p}/`}`;
};

// Dates are shown as YYYY-MM-DD everywhere.
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
