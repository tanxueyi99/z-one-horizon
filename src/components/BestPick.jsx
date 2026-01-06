import React, { useState } from "react";
import BGImage from "../assets/imgs/ProjectorBG.jpeg";

const BestPick = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isProjectorOn, setIsProjectorOn] = useState(true);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=800&fit=crop",
      title: "Ancient Temple",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=800&fit=crop",
      title: "Mountain Serenity",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. The beauty of nature captivates and inspires endless wonder.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
      title: "Ocean Paradise",
      description:
        "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Discover the tranquil beauty of coastal landscapes.",
    },
  ];

  const handleDotClick = (index) => {
    setIsProjectorOn(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsProjectorOn(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url(${BGImage})`,
          zIndex: 0,
        }}
      ></div>

      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }}></div>

      {/* Circular Light Effect 2 - Bottom Left - Fixed position */}
      <div
        className={`absolute transition-opacity duration-500 ${
          isProjectorOn ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 0.5, bottom: "5%", left: "3%" }}
      >
        {/* Light at bottom left - Stronger Orange */}
        <div className="relative w-[400px] h-[400px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/40 via-orange-500/30 to-transparent blur-3xl"></div>
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-orange-300/50 via-orange-400/35 to-transparent blur-2xl"></div>
          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-orange-200/60 via-orange-300/40 to-transparent blur-xl"></div>
          {/* Center bright spot */}
          <div className="absolute inset-24 rounded-full bg-gradient-to-br from-orange-100/70 to-orange-200/60 blur-lg"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-yellow-400 inline-block border-b-4 border-yellow-400 pb-2">
            Best Pick
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center gap-12 max-w-7xl mx-auto w-full">
          {/* Left Side - Image */}
          <div className="flex-1 flex flex-col items-center gap-8 relative">
            {/* Light behind this specific image - positioned relative to container */}
            <div
              className={`absolute transition-opacity duration-500 ${
                isProjectorOn ? "opacity-100" : "opacity-0"
              }`}
              style={{
                zIndex: -1,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Light behind image - Stronger Orange */}
              <div className="relative w-[600px] h-[600px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/70 via-orange-500/50 to-transparent blur-3xl"></div>
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-orange-300/80 via-orange-400/60 to-transparent blur-2xl"></div>
                <div className="absolute inset-24 rounded-full bg-gradient-to-br from-orange-200/90 via-orange-300/70 to-transparent blur-xl"></div>
                {/* Center bright spot */}
                <div className="absolute inset-40 rounded-full bg-gradient-to-br from-orange-100/100 to-orange-200/90 blur-lg"></div>
              </div>
            </div>

            {/* Circular Image */}
            <div
              className={`transition-all duration-500 ${
                isProjectorOn ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{
                width: "500px",
                height: "500px",
                position: "relative",
              }}
            >
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-yellow-400 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`flex-1 transition-all duration-500 ${
              isProjectorOn
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <h2 className="text-5xl font-bold text-yellow-400 italic mb-6">
              {slides[currentSlide].title}
            </h2>
            <p className="text-lg leading-relaxed text-yellow-100 italic">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPick;
