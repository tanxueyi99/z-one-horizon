function TearDrop(props) {
  return (
    <>
      <svg
        className={`${props.className || ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2.20 -0.225 0.4 4.225"
        width="107.93"
        height="200"
      >
        <path
          d="m -0.9 3.2 q -0.1 0.8 -1.1 0.8 q -1 0 -1.1 -0.8 q -0.2 -1.2 0.6 -2.95 q 0.5 -0.95 1 0 q 0.8 1.75 0.6 2.95"
          fill="#000000"
          className={`${props.fill || "#000000"}`}
          // className="fill-[var(--color-initial-glow)]"
        />
      </svg>
    </>
  );
}

export default TearDrop;
