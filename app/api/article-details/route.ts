import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });
  }

  try {
    const encodedTitle = encodeURIComponent(query);
    const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodedTitle}`;

    const res = await fetch(wikiUrl, {
      headers: {
        'Accept': 'application/json',
      },
      // Wikipedia API can be called server-side without a key for simple summary
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'No details found' }, { status: 404 });
    }

    const data = await res.json();

    return NextResponse.json({
      title: data.title,
      extract: data.extract,
      url: data.content_urls?.desktop?.page ?? data.content_urls?.mobile?.page ?? null,
      source: 'wikipedia',
    });
  } catch (error) {
    console.error('Error fetching article details:', error);
    return NextResponse.json({ error: 'Failed to fetch details' }, { status: 500 });
  }
}
