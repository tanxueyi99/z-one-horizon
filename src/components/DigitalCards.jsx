import PopupCard from "./PopUpCard";
import { useState } from "react";

function DigitalCards({ onCardClick }) {
  return (
    <div
      className="relative bg-green-100 h-full w-full cursor-pointer group overflow-hidden"
      onClick={onCardClick}
    >
      <img
        src="./src/assets/imgs/Cute_Dragon.jpg"
        alt="Cute Dragon"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-6 pt-12 transition-all duration-300 group-hover:pb-8 pb-4">
        <h3 className="text-2xl font-bold">Cute Dragon</h3>
      </div>
    </div>
  );
}

export default DigitalCards;
