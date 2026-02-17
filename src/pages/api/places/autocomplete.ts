import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const input = url.searchParams.get('input');

  if (!input) {
    return new Response(JSON.stringify({ error: 'Input is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const response = await fetch(
      `https://photon.komoot.io/api/?q=${encodeURIComponent(input)}&limit=7`
    );

    const data = await response.json();

    const results = (data.features || []).map((feature: any) => ({
      name: feature.properties?.name || '',
      city: feature.properties?.city || '',
      county: feature.properties?.county || '',
      state: feature.properties?.state || '',
      country: feature.properties?.country || '',
      type: feature.properties?.osm_value || feature.properties?.type || '',
      latitude: feature.geometry?.coordinates?.[1] ?? 0,
      longitude: feature.geometry?.coordinates?.[0] ?? 0,
    }));

    return new Response(JSON.stringify({ results }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Photon geocoding error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch place suggestions' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
