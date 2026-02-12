import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const input = url.searchParams.get('input');
  const sessionToken = url.searchParams.get('sessionToken');

  if (!input) {
    return new Response(JSON.stringify({ error: 'Input is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Google Places API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const params = new URLSearchParams({
      input,
      types: '(cities)',
      key: apiKey,
    });

    if (sessionToken) {
      params.append('sessiontoken', sessionToken);
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?${params}`
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Places autocomplete error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch place suggestions' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
