import { useState } from "react";
import DigitalCards from "./DigitalCards";
import InfiniteCarousel from "./InfiniteCarousel";
import PopupCard from "./PopUpCard";

function DigitalAssets() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const demoItems = [
    <div
      key={1}
      className="bg-blue-800 h-full w-full flex items-center justify-center text-white text-2xl font-bold"
    >
      <DigitalCards onCardClick={handleCardClick} />
    </div>,
    <div
      key={2}
      className="bg-amber-200 h-full w-full flex items-center justify-center text-gray-800 text-2xl font-bold"
    >
      Item 2
    </div>,
    <div
      key={3}
      className="bg-cyan-300 h-full w-full flex items-center justify-center text-gray-800 text-2xl font-bold"
    >
      Item 3
    </div>,
    <div
      key={4}
      className="bg-blue-700 h-full w-full flex items-center justify-center text-white text-2xl font-bold"
    >
      Item 4
    </div>,
    <div
      key={5}
      className="bg-blue-500 h-full w-full flex items-center justify-center text-white text-2xl font-bold"
    >
      Item 5
    </div>,
    <div
      key={6}
      className="bg-emerald-500 h-full w-full flex items-center justify-center text-white text-2xl font-bold"
    >
      Item 6
    </div>,
    <div
      key={7}
      className="bg-emerald-800 h-full w-full flex items-center justify-center text-white text-2xl font-bold"
    >
      Item 7
    </div>,
  ];

  return (
    <div className="bg-amber-200 min-h-screen">
      <div className="absolute text-5xl text-orange-600 p-5 font-amiri">
        Digital Assets
      </div>

      <div className="bg-black flex flex-col justify-center gap-8 h-screen">
        <InfiniteCarousel
          items={demoItems}
          itemWidth={350}
          gap="5vw"
          height="h-70"
          bgColour=" bg-amber-100"
        />
        <div className="h-70 w-full bg-amber-100">hi</div>
      </div>

      {/* Popup rendered at top level */}
      <PopupCard
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="@Cute Dragon"
        imageSrc="./src/assets/imgs/Cute_Dragon.jpg"
      />
    </div>
  );
}

export default DigitalAssets;
