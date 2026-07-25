import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {error: 'This feature has been temporarily disabled.'},
    {status: 503}
  )

  // CLONERS: To re-enable this API route, uncomment the block below and delete the block above.

  /*const searchParams = request.nextUrl.searchParams;
  const size = searchParams.get('size');
  const ddr = searchParams.get('ddr');
  const clock = searchParams.get('clock');
  const cooling = searchParams.get('cooling');
  const rgb = searchParams.get('rgb');
  const antivirus = searchParams.get('antivirus');

  if (!size) {
    return NextResponse.json({ error: 'Size is required' }, { status: 400 })
  }
  if (!ddr) {
    return NextResponse.json({ error: 'Ddr is required' }, { status: 400 })
  }
  if (!clock) {
    return NextResponse.json({ error: 'Clock is required' }, { status: 400 })
  }

  const sizeNum = Number(size);
  if (isNaN(sizeNum)) {
    return NextResponse.json({ error: 'Size must be a number' }, { status: 400 });
  }

  if (cooling && !['Water', 'Fan', 'Magically'].includes(cooling)) {
    return NextResponse.json({ error: 'Invalid option for cooling'}, { status: 400 })
  }

  if (rgb && !['true', 'false'].includes(rgb)) {
    return NextResponse.json({ error: 'Rgb must be a boolean'}, { status: 400 })
  }

  if (antivirus && !['true', 'false'].includes(antivirus)) {
    return NextResponse.json({ error: 'Antivirus must be a boolean'}, { status: 400 })
  }

  const msg: string = "Free RAM? In this economy? LOL!\n";
  const chunkSize = 1024 * 1024; // 1 MB per chunk
  const totalBytes = sizeNum * 1024 * 1024 * 1024;
  const chunk = msg.repeat(Math.ceil(chunkSize / msg.length)).slice(0, chunkSize);
  const encoder = new TextEncoder();
  let bytesSent = 0;

  const stream = new ReadableStream({
    pull(controller) {
      if (bytesSent >= totalBytes) {
        controller.close();
        return;
      }
      const remaining = totalBytes - bytesSent;
      const encoded = encoder.encode(chunk.slice(0, Math.min(chunkSize, remaining)));
      controller.enqueue(encoded);
      bytesSent += encoded.byteLength;
    },
  });

  let filename = `${size}GB-${ddr}-${clock}`;
  if (cooling) filename += `-${cooling}-Cooled`;
  if (rgb) filename += `-RGB-Lighting`;
  if (antivirus) filename += `-with-Active-Virus-Protection`;
  filename += '.ram';

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': String(totalBytes),
    },
  });*/
}
