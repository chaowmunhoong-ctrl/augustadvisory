import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'August Advisory - Accounting & CFO Advisory';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), 'public/images/logo.png'));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#348981',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={logoSrc} width={160} height={160} />
        <div style={{ fontSize: 56, fontWeight: 700, color: 'white', marginTop: 24 }}>
          August Advisory
        </div>
        <div style={{ fontSize: 26, color: 'white', marginTop: 12, opacity: 0.9 }}>
          Accounting & CFO Advisory
        </div>
      </div>
    ),
    { ...size }
  );
}
