import { useEffect } from "react";

function PopupCard({ isOpen, onClose, title, imageSrc }) {
  useEffect(() => {
    if (isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
      onClick={onClose}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-6xl max-h-[90vh] min-h-[80vh] w-full mx-4 overflow-hidden relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with title and close button */}
        <div className="relative bg-white p-4 pb-2">
          <h2 className="text-5xl text-gray-800 text-center font-bold">
            {title}
          </h2>
          <p className="text-md text-gray-600 text-center mt-1 font-bold">
            Subtitle or description text here
          </p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Image section with side text */}
        <div className="p-8 pt-4 flex justify-between items-center flex-1 overflow-y-auto gap-8">
          {/* Left side text */}
          <div className="flex flex-col justify-center gap-20 w-48 flex-shrink-0">
            <div>
              <p className="text-4xl font-bold text-gray-700">-Animation</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-700">-Malaysia</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-700">-Yearly</p>
            </div>
          </div>

          {/* Center image */}
          <div className="flex items-center justify-center flex-1 h-full">
            <img
              src={imageSrc}
              alt={title}
              className="w-auto max-w-full rounded-lg object-cover"
              style={{ height: "60vh" }}
            />
          </div>

          {/* Right side text */}
          <div className="flex flex-col justify-center gap-20 w-48 flex-shrink-0">
            <div>
              <p className="text-4xl font-bold text-gray-700">-Animation</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-700">-Animation</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-700">-Animation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupCard;
