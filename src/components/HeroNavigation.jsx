function HeroNavigation() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3.14 -0.225 2.28 4.225"
        width="200"
        height="200"
      >
        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="#000000"
        />
      </svg>

      <div className="nav-ring"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2.20 -0.225 0.4 4.225"
        width="107.93"
        height="200"
      >
        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="#000000"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3.14 -0.225 2.28 4.225"
        width="200"
        height="200"
      >
        <defs>
          <pattern
            id="texture"
            x="0"
            y="0"
            width="0.1"
            height="0.1"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0.05" cy="0.05" r="0.02" fill="#333" />
          </pattern>
        </defs>
        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="url(#texture)"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3.14 -0.225 2.28 4.225"
        width="100"
        height="100"
      >
        <defs>
          <pattern id="imgTexture" x="0" y="0" width="1" height="1">
            <image
              href="your-texture.jpg"
              width="1"
              height="1"
              preserveAspectRatio="none"
            />
          </pattern>
        </defs>
        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="url(#imgTexture)"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3.14 -0.225 2.28 4.225"
        width="100"
        height="100"
      >
        <defs>
          <pattern id="imgTexture" x="0" y="0" width="1" height="1">
            <image
              href="your-texture.jpg"
              width="1"
              height="1"
              preserveAspectRatio="none"
            />
          </pattern>
        </defs>
        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="url(#imgTexture)"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3.14 -0.225 2.28 4.225"
        width="100"
        height="100"
      >
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend mode="multiply" in="SourceGraphic" />
          </filter>
        </defs>
        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="#000000"
          filter="url(#noise)"
        />
      </svg>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3.14 -0.225 2.28 4.225">
        <path
          d="M -0.9 3.2 Q -1 4 -2 4 Q -3 4 -3.1 3.2 Q -3.3 2 -2.5 0.25 Q -2 -0.7 -1.5 0.25 Q -0.7 2 -0.9 3.2"
          fill="#000000"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3.14 -0.225 2.28 4.225">
        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="#000000"
        />
      </svg> */}
    </>
  );
}

export default HeroNavigation;
