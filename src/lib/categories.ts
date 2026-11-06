// The four areas the portfolio is organised around.
// The key is what you write in a project's front matter: `category: game`.
export const categories = {
  app: { label: 'Apps & tools', blurb: 'Software and things that do jobs' },
  game: { label: 'Games', blurb: 'Things to play' },
  video: { label: 'YouTube & video', blurb: 'Channels, videos and edits' },
  learning: { label: 'School & learning', blurb: 'Courses, awards and milestones' },
} as const;

export type Category = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as Category[];
