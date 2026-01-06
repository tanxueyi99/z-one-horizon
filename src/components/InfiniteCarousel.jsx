import { useState, useEffect, useRef } from "react";

/**
 * InfiniteCarousel Component
 *
 * A reusable infinite scrolling carousel with seamless looping
 *
 * @param {Array} items - Array of JSX elements to display in the carousel
 * @param {number} itemWidth - Width of each item in pixels (default: 320)
 * @param {string} gap - Gap between items, can use any CSS unit (default: "5vw")
 * @param {string} height - Tailwind height class for the carousel (default: "h-96")
 *
 * @example
 * const myItems = data.map(item => (
 *   <img key={item.id} src={item.url} alt={item.title} className="w-full h-full object-cover" />
 * ));
 *
 * <InfiniteCarousel items={myItems} itemWidth={400} gap="3vw" height="h-[500px]" />
 */

function InfiniteCarousel({
  items = [],
  itemWidth = 320,
  gap = "5vw",
  height = "h-96",
  bgColour = "",
}) {
  const totalItems = items.length;

  // Return null if no items provided
  if (totalItems === 0) {
    return null;
  }

  // Create 5 copies for smooth infinite scrolling
  const [currentIndex, setCurrentIndex] = useState(totalItems * 2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionTimeoutRef = useRef(null);
  const isJumpingRef = useRef(false);

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
      className={`w-full ${height} flex justify-between items-center ${bgColour}`}
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
            transform: `translateX(calc(50% - ${
              itemWidth / 2
            }px - ${currentIndex} * (${itemWidth}px + ${gap})))`,
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              className="h-full shrink-0"
              style={{
                width: `${itemWidth}px`,
                marginLeft: index === 0 ? "0" : gap,
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
