import { useState, useEffect, useRef } from "react";

/**
 * InfiniteCarousel Component
 *
 * A reusable infinite scrolling carousel with seamless looping
 * Now with responsive card sizing to always show exactly 3 cards
 *
 * @param {Array} items - Array of JSX elements to display in the carousel
 * @param {number} itemWidth - Base width of each item in pixels (will be overridden by responsive calculation)
 * @param {string} gap - Gap between items in pixels (default: "40px")
 * @param {string} height - Tailwind height class for the carousel (default: "h-96")
 *
 * @example
 * <InfiniteCarousel items={myItems} gap="40px" height="h-[500px]" />
 */

function InfiniteCarousel({
  items = [],
  itemWidth = 320,
  gap = "40px",
  height = "h-96",
  bgColour = "",
}) {
  const totalItems = items.length;
  const containerRef = useRef(null);
  const [responsiveWidth, setResponsiveWidth] = useState(itemWidth);
  const [responsiveHeight, setResponsiveHeight] = useState(400);

  // Return null if no items provided
  if (totalItems === 0) {
    return null;
  }

  // Create 5 copies for smooth infinite scrolling
  const [currentIndex, setCurrentIndex] = useState(totalItems * 2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionTimeoutRef = useRef(null);
  const isJumpingRef = useRef(false);

  // Parse gap to number
  const gapValue = parseInt(gap);

  // Calculate responsive card width and height to always show 3 cards with proper aspect ratio
  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Account for arrow buttons (40px each side = 80px total) and gaps (2 gaps between 3 cards)
        const arrowSpace = 160; // 80px per arrow button
        const availableWidth = containerWidth - arrowSpace - gapValue * 2;
        const calculatedWidth = Math.floor(availableWidth / 3);

        // Maintain 4:3 aspect ratio (landscape cards)
        const calculatedHeight = Math.floor(calculatedWidth * 0.75);

        setResponsiveWidth(calculatedWidth);
        setResponsiveHeight(calculatedHeight);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, [gapValue]);

  // Duplicate items: [items, items, items, items, items]
  const extendedItems = [
    ...items,
    ...items,
    ...items, // Center set - starting position
    ...items,
    ...items,
  ];

  function handleLeftClick() {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    setIsTransitioning(true);
    isJumpingRef.current = false;
    setCurrentIndex((prev) => prev - 1);
  }

  function handleRightClick() {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    setIsTransitioning(true);
    isJumpingRef.current = false;
    setCurrentIndex((prev) => prev + 1);
  }

  // Handle repositioning when scrolling too far
  useEffect(() => {
    if (isJumpingRef.current) {
      isJumpingRef.current = false;
      return;
    }

    const minSafeIndex = totalItems;
    const maxSafeIndex = totalItems * 4 - 1;

    if (currentIndex < minSafeIndex) {
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        isJumpingRef.current = true;
        setCurrentIndex(currentIndex + totalItems);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);
    } else if (currentIndex > maxSafeIndex) {
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        isJumpingRef.current = true;
        setCurrentIndex(currentIndex - totalItems);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);
    }

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [currentIndex, totalItems]);

  return (
    <div
      ref={containerRef}
      className={`w-full flex justify-between items-center ${bgColour}`}
      style={{ height: `${responsiveHeight}px` }}
    >
      {/* Left Arrow Button */}
      <button
        className="h-20 w-20 cursor-pointer flex justify-center items-center hover:bg-amber-300 rounded-full transition-colors z-10 flex-shrink-0"
        onClick={handleLeftClick}
        aria-label="Previous"
      >
        <svg
          className="w-10 h-10 -scale-x-100 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Carousel Container */}
      <div className="h-full w-full overflow-hidden flex justify-center items-center">
        <div
          className={`flex h-full ${
            isTransitioning
              ? "transition-transform duration-1000 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translate3d(calc(50% - ${
              responsiveWidth / 2
            }px - ${currentIndex} * (${responsiveWidth}px + ${gap})), 0, 0)`,
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              className="h-full shrink-0"
              style={{
                width: `${responsiveWidth}px`,
                marginLeft: index === 0 ? "0" : gap,
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        className="h-20 w-20 cursor-pointer flex justify-center items-center hover:bg-amber-300 rounded-full transition-colors z-10 flex-shrink-0"
        onClick={handleRightClick}
        aria-label="Next"
      >
        <svg
          className="w-10 h-10 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default InfiniteCarousel;
