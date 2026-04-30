import { ImageResponse } from 'next/og';



// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#030303',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          letterSpacing: '-1px',
          borderRadius: '4px',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '2px', marginLeft: '2px' }}>
          a<span style={{ color: '#dc2626' }}>.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
