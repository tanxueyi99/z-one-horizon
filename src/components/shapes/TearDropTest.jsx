function TearDropTest(props) {
  return (
    <>
      <svg
        className={`${props.className || ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2.20 -0.225 0.4 4.225"
        width="107.93"
        height="200"
      >
        <defs>
          {/* Orange/Yellow-Green Gradient */}
          <linearGradient
            id="gradient-orange"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#a8b50d", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#d7e711", stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Blue Gradient */}
          <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#015ba8", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#017ae7", stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Green Gradient */}
          <linearGradient id="gradient-green" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#00a811", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#00e717", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="url(#gradient-orange)"
          className="petal-neon-glow-orange"
        />
      </svg>
    </>
  );
}

export default TearDropTest;
