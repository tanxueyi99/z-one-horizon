import { useState } from "react";
import DigitalCards from "./DigitalCards";
import InfiniteCarousel from "./InfiniteCarousel";
import PopupCard from "./PopUpCard";
import dragonImg from "../assets/imgs/Cute_Dragon.jpg";

function DigitalAssets() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  const demoItems = [
    <div
      key={1}
      className="h-full w-full flex items-center justify-center text-white text-2xl font-bold"
    >
      <DigitalCards
        onCardClick={handleCardClick}
        imageSrc="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwyfHxjYXR8ZW58MHx8fHwxNzY3MjY4NDIwfDA&ixlib=rb-4.1.0&w=1080&h=1920&fit=max&q=80"
        title="@Cute Cat"
        description="A lovely cat enjoying the day"
      />
    </div>,
    <div
      key={2}
      className="h-full w-full flex items-center justify-center text-gray-800 text-2xl font-bold"
    >
      <DigitalCards
        onCardClick={handleCardClick}
        imageSrc="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw2fHxjYXR8ZW58MHx8fHwxNzY3MjY4NDIwfDA&ixlib=rb-4.1.0&w=1080&h=1920&fit=max&q=80"
        title="@Sleepy Kitten"
        description="An adorable kitten taking a nap"
      />
    </div>,
    <div
      key={3}
      className="h-full w-full flex items-center justify-center text-gray-800 text-2xl font-bold"
    >
      <DigitalCards
        onCardClick={handleCardClick}
        imageSrc="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHx8fHwxNzY3MjY4NDIwfDA&ixlib=rb-4.1.0&w=1080&h=1920&fit=max&q=80"
        title="@Curious Cat"
        description="A curious feline exploring"
      />
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

  const demoItems1 = [
    <div
      key={1}
      className="h-full w-full flex items-center justify-center text-white text-2xl font-bold"
    >
      <DigitalCards
        onCardClick={handleCardClick}
        imageSrc={dragonImg}
        title="@Cute Dragon"
        description="Dragon cute"
      />
    </div>,
    <div
      key={2}
      className="h-full w-full flex items-center justify-center text-gray-800 text-2xl font-bold"
    >
      <DigitalCards
        onCardClick={handleCardClick}
        imageSrc="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw3fHxjYXR8ZW58MHx8fHwxNzY3MjY4NDIwfDA&ixlib=rb-4.1.0&w=1080&h=1920&fit=max&q=80"
        title="@Shock Kitten"
        description="An adorable kitten taking a nap"
      />
    </div>,
    <div
      key={3}
      className="h-full w-full flex items-center justify-center text-gray-800 text-2xl font-bold"
    >
      <DigitalCards
        onCardClick={handleCardClick}
        imageSrc="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwzfHxjYXR8ZW58MHx8fHwxNzY3MjY4NDIwfDA&ixlib=rb-4.1.0&w=1080&h=1920&fit=max&q=80"
        title="@Curious Cat"
        description="A curious feline exploring"
      />
    </div>,
  ];

  return (
    <div className="bg-amber-200 min-h-screen">
      <div className="bg-black flex flex-col justify-evenly h-screen">
        <div className="text-5xl px-5 text-amber-200 font-amiri">
          Digital Assets
        </div>
        <InfiniteCarousel
          items={demoItems}
          itemWidth={350}
          gap="5vw"
          height="h-70"
          bgColour="bg-amber-200"
        />
        <InfiniteCarousel
          items={demoItems1}
          itemWidth={350}
          gap="5vw"
          height="h-70"
          bgColour="bg-amber-200"
        />
      </div>

      {/* Popup rendered at top level */}
      <PopupCard
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={selectedCard?.title || "@Image Title"}
        imageSrc={selectedCard?.imageSrc || "./src/assets/imgs/Cute_Dragon.jpg"}
        description={selectedCard?.description}
      />
    </div>
  );
}

export default DigitalAssets;
