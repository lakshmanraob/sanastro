import type { APIRoute } from 'astro';

// This endpoint is no longer used.
// Place search now uses Photon (photon.komoot.io) which returns
// coordinates directly in search results via /api/places/autocomplete.

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      error: 'This endpoint is deprecated. Use /api/places/autocomplete instead.',
    }),
    {
      status: 410,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
