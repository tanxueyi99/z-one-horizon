function HeroContainer(props) {
  return (
    <>
      {/* relative h-screen bg-[url('hero-bg.jpg')] bg-cover bg-center */}
      <div
        className={`relative h-screen bg-cover bg-center ${
          props.className || ""
        }`}
      >
        {props.children}
      </div>
    </>
  );
}

export default HeroContainer;
