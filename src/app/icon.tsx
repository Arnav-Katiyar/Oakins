import { ImageResponse } from 'next/og';

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
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2E1F1B',
          borderRadius: '50%',
          padding: '4px',
        }}
      >
        {/* Oakins Leaf Icon representation */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#E3A23C"
            strokeWidth="10"
          />
          <path
            d="M32 66 C32 46, 44 32, 66 32 C66 52, 54 66, 32 66 Z"
            fill="#E3A23C"
          />
          <path
            d="M36 62 Q50 49 63 35"
            stroke="#2E1F1B"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M48 48 Q55 44 58 41"
            stroke="#2E1F1B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M42 55 Q48 52 52 50"
            stroke="#2E1F1B"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
