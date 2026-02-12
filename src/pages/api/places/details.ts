import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const placeId = url.searchParams.get('placeId');
  const sessionToken = url.searchParams.get('sessionToken');

  if (!placeId) {
    return new Response(JSON.stringify({ error: 'Place ID is required' }), {
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
      place_id: placeId,
      fields: 'geometry,utc_offset,formatted_address,name',
      key: apiKey,
    });

    if (sessionToken) {
      params.append('sessiontoken', sessionToken);
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`
    );

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Places details error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch place details' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
