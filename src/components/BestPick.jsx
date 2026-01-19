import { useState, useRef, useEffect } from "react";
import ProjectorIMG from "../assets/imgs/ProjectorIMG.png";

const BestPick = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scannerKey, setScannerKey] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [isProjectorOn, setIsProjectorOn] = useState(true);
  const [nextSlide, setNextSlide] = useState(0);
  const imageRef = useRef(null);
  const dotRef = useRef(null);
  const [imagePosition, setImagePosition] = useState({
    centerX: typeof window !== "undefined" ? window.innerWidth / 2 : 400,
    centerY: typeof window !== "undefined" ? window.innerHeight / 2 : 400,
    radius: 250,
  });
  const [dotPosition, setDotPosition] = useState({
    x: 86,
    y: typeof window !== "undefined" ? window.innerHeight - 240 : 400,
  });

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=800&fit=crop",
      title: "Ancient Temple",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=800&fit=crop",
      title: "Mountain Serenity",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. The beauty of nature captivates and inspires endless wonder.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
      title: "Ocean Paradise",
      description:
        "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Discover the tranquil beauty of coastal landscapes.",
    },
  ];

  useEffect(() => {
    const updatePositions = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        setImagePosition({
          centerX: rect.left + rect.width / 2,
          centerY: rect.top + rect.height / 2,
          radius: rect.width / 2,
        });
      }

      if (dotRef.current) {
        const dotRect = dotRef.current.getBoundingClientRect();
        setDotPosition({
          x: dotRect.left + dotRect.width / 2,
          y: dotRect.top + dotRect.height / 2,
        });
      }
    };

    setTimeout(updatePositions, 100);

    window.addEventListener("resize", updatePositions);
    window.addEventListener("scroll", updatePositions);

    return () => {
      window.removeEventListener("resize", updatePositions);
      window.removeEventListener("scroll", updatePositions);
    };
  }, []);

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;

    if (imageRef.current && dotRef.current) {
      const imgRect = imageRef.current.getBoundingClientRect();
      const dotRect = dotRef.current.getBoundingClientRect();

      setImagePosition({
        centerX: imgRect.left + imgRect.width / 2,
        centerY: imgRect.top + imgRect.height / 2,
        radius: imgRect.width / 2,
      });

      setDotPosition({
        x: dotRect.left + dotRect.width / 2,
        y: dotRect.top + dotRect.height / 2,
      });
    }

    setIsProjectorOn(false);
    setIsAnimating(true);
    setNextSlide(index);
    setScannerKey((prev) => prev + 1);
    setScanProgress(0);

    const duration = 1000;
    const startTime = Date.now();

    const easeInOutCubic = (t) => {
      if (t < 0.5) {
        return 2 * t * t;
      }
      return 1 - Math.pow(-2 * t + 2, 2) / 2;
    };

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(linearProgress);
      setScanProgress(easedProgress);

      if (linearProgress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    setTimeout(() => {
      setCurrentSlide(index);
    }, 1000);

    setTimeout(() => {
      setIsAnimating(false);
      setScanProgress(0);
      setIsProjectorOn(true);
    }, 1100);
  };

  const scanOriginX = dotPosition.x;
  const scanOriginY = dotPosition.y;
  const topY = imagePosition.centerY - imagePosition.radius;
  const leftX = imagePosition.centerX - imagePosition.radius;
  const rightX = imagePosition.centerX + imagePosition.radius;
  const sweepDistance = imagePosition.radius * 2;

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: 1 }}></div>

      <div
        ref={dotRef}
        style={{
          position: "absolute",
          bottom: "240px",
          left: "80px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "transparent",
          boxShadow: "none",
          zIndex: 50,
        }}
      />

      {/* Projector Image */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          zIndex: 45,
        }}
      >
        <img
          src={ProjectorIMG}
          alt="Projector"
          style={{
            display: "block",
            maxWidth: "150px",
            height: "auto",
          }}
        />
      </div>

      {isAnimating && (
        <svg
          style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 25,
          }}
        >
          <line
            x1={scanOriginX}
            y1={scanOriginY}
            x2={leftX}
            y2={topY + scanProgress * sweepDistance}
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth="4"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(255,255,255,1)) drop-shadow(0 0 40px rgba(255,255,255,0.8))",
            }}
          />
          <line
            x1={scanOriginX}
            y1={scanOriginY}
            x2={rightX}
            y2={topY + scanProgress * sweepDistance}
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth="4"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(255,255,255,1)) drop-shadow(0 0 40px rgba(255,255,255,0.8))",
            }}
          />
        </svg>
      )}

      <div className="relative z-10">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-amber-200 inline-block border-b-4 border-amber-200 pb-2">
            Best Pick
          </h1>
        </div>

        <div className="flex-1 flex items-center gap-16 max-w-6xl mx-auto w-full justify-center">
          <div
            className="flex flex-col items-center gap-8 relative"
            style={{ marginLeft: "120px" }}
          >
            <div
              ref={imageRef}
              className={`transition-all duration-500`}
              style={{
                width: "500px",
                height: "500px",
                position: "relative",
              }}
            >
              <div
                className={`absolute transition-opacity duration-500`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "600px",
                  height: "600px",
                  opacity: isProjectorOn ? 1 : 0,
                  zIndex: -1,
                  clipPath: isAnimating
                    ? `inset(0 0 ${100 - scanProgress * 100}% 0)`
                    : "none",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl"></div>
                <div className="absolute inset-12 rounded-full bg-white/25 blur-2xl"></div>
                <div className="absolute inset-24 rounded-full bg-white/30 blur-xl"></div>
              </div>

              <div
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-amber-200 shadow-2xl"
                style={{ zIndex: 1 }}
              >
                {/* Current image - always visible */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${slides[currentSlide].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 1,
                  }}
                />

                {/* Next image - revealed by scan */}
                {isAnimating && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${slides[nextSlide].image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      clipPath: `inset(0 0 ${100 - scanProgress * 100}% 0)`,
                      zIndex: 10,
                    }}
                  />
                )}

                {/* Scan line inside circle */}
                {isAnimating && (
                  <div
                    key={scannerKey}
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      zIndex: 20,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "3px",
                        top: `${scanProgress * 100}%`,
                        left: 0,
                        background: "rgba(255, 255, 255, 1)",
                        boxShadow:
                          "0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.6)",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            <div
              className="flex justify-center gap-4"
              style={{ zIndex: 10, position: "relative" }}
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-amber-200 scale-125"
                      : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-lg">
            <div
              style={{
                clipPath: isAnimating
                  ? `inset(0 0 ${100 - scanProgress * 100}% 0)`
                  : "none",
                transition: isAnimating ? "none" : "opacity 0.3s ease-out",
              }}
            >
              <h2 className="text-5xl font-bold text-amber-200 italic mb-6">
                {slides[isAnimating ? nextSlide : currentSlide].title}
              </h2>
              <p
                className="text-lg leading-relaxed text-amber-200 italic"
                style={{ maxWidth: "500px" }}
              >
                {slides[isAnimating ? nextSlide : currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPick;
