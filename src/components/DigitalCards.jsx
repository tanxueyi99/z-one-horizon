import PopupCard from "./PopUpCard";
import { useState } from "react";

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
      className="relative bg-green-100 h-full w-full cursor-pointer group overflow-hidden"
      onClick={handleClick}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 pointer-events-none neon-glow-orange-bg z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-6 pt-12 transition-all duration-300 group-hover:pb-8 pb-4">
        <h3 className="text-2xl font-bold text-orange-glass-text">{title}</h3>
      </div>
    </div>
  );
}

export default DigitalCards;
