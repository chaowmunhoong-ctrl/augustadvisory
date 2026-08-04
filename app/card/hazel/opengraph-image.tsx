import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = "Hazel Lim - August Advisory - Digital Business Card";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoBuffer = await readFile(join(process.cwd(), 'public/images/logo-mark-dark.png'));
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

  const photoBuffer = await readFile(join(process.cwd(), 'public/images/Hazel.png'));
  const photoSrc = `data:image/png;base64,${photoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#F0FFFE',
        }}
      >
        {/* Left panel: photo */}
        <div
          style={{
            width: 440,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#348981',
          }}
        >
          <img
            src={photoSrc}
            width={320}
            height={320}
            style={{ borderRadius: '50%', objectFit: 'cover', border: '8px solid white' }}
          />
        </div>

        {/* Right panel: details */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 64px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 28 }}>
            <img src={logoSrc} width={56} height={56} />
            <div style={{ fontSize: 26, fontWeight: 700, color: '#348981', marginLeft: 14, letterSpacing: 2 }}>
              AUGUST ADVISORY
            </div>
          </div>

          <div style={{ fontSize: 64, fontWeight: 700, color: '#2C3E50', display: 'flex' }}>
            Hazel Lim
          </div>
          <div style={{ fontSize: 28, color: '#5A6C7D', marginTop: 8, display: 'flex' }}>
            FCMA, CGMA, C.A.(M)
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, color: '#348981', marginTop: 16, letterSpacing: 2, display: 'flex' }}>
            MANAGING DIRECTOR
          </div>

          <div style={{ fontSize: 24, color: '#2C3E50', marginTop: 40, display: 'flex' }}>
            012-232 2151 &nbsp;|&nbsp; hazel@augustadvisory.com.my
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
