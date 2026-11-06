// Pull the 11-character video id out of the common YouTube URL shapes.
// Returns null for anything else, in which case the page just shows no embed.
export function youtubeId(href: string): string | null {
  try {
    const u = new URL(href);
    const host = u.hostname.replace(/^www\./, '');
    let id: string | null = null;

    if (host === 'youtu.be') {
      id = u.pathname.slice(1);
    } else if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (u.pathname === '/watch') id = u.searchParams.get('v');
      else id = u.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]{11})/)?.[1] ?? null;
    }

    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}
