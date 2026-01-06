import TearDrop from "./shapes/TearDrop";
import TearDropTest from "./shapes/TearDropTest";
import LeftLogo from "../assets/imgs/Left_transparent.png";
import RightLogo from "../assets/imgs/Right_transparent.png";

import HeroContainer from "./utility/HeroContainer";
import TopNavigation from "./TopNavigation";
import "animate.css";
import { use, useState } from "react";

function HeroNavigation() {
  const [isOrange, setIsOrange] = useState(true);
  const [isGreen, setIsGreen] = useState(false);
  const [isBlue, setIsBlue] = useState(false);

  const [rotation, setRotation] = useState(0);
  const [currentColor, setCurrentColor] = useState(0); // 0=orange, 1=blue, 2=green

  const rotateToColor = (targetColorIndex) => {
    if (currentColor === targetColorIndex) return;

    const currentPos = currentColor;
    const targetPos = targetColorIndex;

    let steps = targetPos - currentPos;

    // Fix the wrap-around logic for 3 positions
    if (steps === 2) steps = -1; // Going from 0→2 should go backwards (-1 step)
    if (steps === -2) steps = 1; // Going from 2→0 should go forwards (+1 step)

    // Rotate in the OPPOSITE direction (negative)
    const newRotation = rotation - steps * 120;

    setRotation(newRotation);
    setCurrentColor(targetPos);

    setIsOrange(targetPos === 0);
    setIsBlue(targetPos === 1);
    setIsGreen(targetPos === 2);
  };

  const handleOrangeTearClick = () => {
    rotateToColor(0);
  };

  const handleBlueTearClick = () => {
    rotateToColor(1);
  };

  const handleGreenTearClick = () => {
    rotateToColor(2);
  };

  return (
    <>
      <HeroContainer>
        {/* <TopNavigation /> */}
        <nav className="absolute top-0 left-0 right-0 z-10">
          <div className="flex justify-between items-center">
            <div className="text-5xl px-6 text-[#F5AC00]">Home</div>
            <div className="flex justify-center items-center pt-2">
              <img
                className={`w-22 h-22 ${
                  isOrange
                    ? "image-neon-glow-orange"
                    : isBlue
                    ? "image-neon-glow-blue"
                    : "image-neon-glow-green"
                } `}
                src={LeftLogo}
                alt="LeftLogo"
                onClick={() => alert("Logo")}
              />
              <div
                className={`text-6xl font-amiri pt-5 ${
                  isOrange
                    ? "neon-glow-orange text-orange-glass-text"
                    : isBlue
                    ? "neon-glow-blue text-blue-glass-text"
                    : "neon-glow-green text-green-glass-text"
                } `}
              >
                Spirit
              </div>
              <img
                className={`w-22 h-22 ${
                  isOrange
                    ? "image-neon-glow-orange"
                    : isBlue
                    ? "image-neon-glow-blue"
                    : "image-neon-glow-green"
                } `}
                src={RightLogo}
                alt="RightLogo"
                onClick={() => alert("Logo")}
              />
            </div>
            <div className="text-5xl px-6 text-[#F5AC00]">Contact</div>
          </div>
        </nav>
        {/* bg-neutral-950  */}
        <div className="flex h-screen bg-neutral-950 -z-10">
          <div className="w-1/2 flex items-center justify-center pt-30 bg-[radial-gradient(circle_at_center,_rgba(255,136,0,0.3)_0%,_#0a0a0a_60%)]">
            <div
              className="flex items-center justify-center transition-transform duration-500 ease-in-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="absolute">
                <div className="nav-ring petal-neon-glow-ring"></div>
              </div>

              <div className="absolute" onClick={handleOrangeTearClick}>
                <TearDrop
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-64 petal-neon-glow-orange"
                  fill="fill-[var(--color-orange-glass)]"
                />
              </div>

              <div
                className="absolute rotate-120"
                onClick={handleBlueTearClick}
              >
                <TearDrop
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-64 petal-neon-glow-blue"
                  fill="fill-[var(--color-blue-glass)]"
                />
              </div>
              <div
                className="absolute rotate-240"
                onClick={handleGreenTearClick}
              >
                <TearDrop
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-64 petal-neon-glow-green"
                  fill="fill-[var(--color-green-glass)]"
                />
              </div>
            </div>
          </div>

          <div className="w-1/2 flex items-center justify-center  bg-blue-400">
            <div className=" bg-backdrop-orange w-50 h-50">
              hello
              <div className="w-30 h-30 custom-orange-gradient">hi</div>
            </div>
          </div>
        </div>

        {/* <svg
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
        </svg> */}
        {/* 
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
        </svg> */}

        {/* <svg
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
        </svg> */}

        {/* <svg
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
        </svg> */}

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
      </HeroContainer>
    </>
  );
}

export default HeroNavigation;
