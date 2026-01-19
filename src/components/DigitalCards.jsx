function DigitalCards({
  onCardClick,
  imageSrc = "./src/assets/imgs/Cute_Dragon.jpg",
  imageAlt = "Image",
  title = "Image Title",
  description = "",
}) {
  const handleClick = () => {
    onCardClick({
      imageSrc,
      imageAlt,
      title,
      description,
    });
  };

  return (
    <div
      className="relative h-full w-full cursor-pointer group overflow-hidden transition-transform duration-300 hover:scale-106"
      onClick={handleClick}
      style={{
        backfaceVisibility: "hidden",
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover"
        style={{ backfaceVisibility: "hidden" }}
      />
      <div className="absolute inset-0 pointer-events-none neon-glow-orange-bg z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-6 pt-12 transition-all duration-300 group-hover:pb-8 pb-4">
        <h3 className="text-2xl font-bold text-amber-200">{title}</h3>
      </div>
    </div>
  );
}

export default DigitalCards;
