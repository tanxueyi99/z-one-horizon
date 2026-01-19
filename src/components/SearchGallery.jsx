import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import PopupCard from "./PopupCard";

const SearchGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardData) => {
    console.log("Card clicked:", cardData);
    setSelectedCard(cardData);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    console.log("Closing popup");
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  // Sample data - replace with your actual data
  const galleryData = [
    {
      id: 1,
      title: "International Team",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "A beautiful mountain landscape",
    },
    {
      id: 2,
      title: "@MODU9949",
      image:
        "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=400&h=300&fit=crop",
      description: "Misty forest scenery",
    },
    {
      id: 3,
      title: "@HJ_MOONIES_MUSIC",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop",
      description: "Live music performance",
    },
    {
      id: 4,
      title: "@MSIA BC ENTERTAINMENT",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Concert stage lights",
    },
    {
      id: 5,
      title: "효동 TV",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      description: "Music equipment setup",
    },
    {
      id: 6,
      title: "@HJ_MOONIES_MUSIC",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop",
      description: "Recording studio",
    },
    {
      id: 7,
      title: "International Team",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop",
      description: "Beach sunset view",
    },
    {
      id: 8,
      title: "@MODU9949",
      image:
        "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=300&fit=crop",
      description: "Vinyl records collection",
    },
    {
      id: 9,
      title: "@HJ_MOONIES_MUSIC",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
      description: "Music festival crowd",
    },
    {
      id: 10,
      title: "MALAYSIA BC",
      image:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&h=300&fit=crop",
      description: "Concert lighting effects",
    },
    {
      id: 11,
      title: "77TV",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      description: "Live band performance",
    },
    {
      id: 12,
      title: "@HJ_MOONIES_MUSIC",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "Portrait photography",
    },
    {
      id: 13,
      title: "My Entertainment Team",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      description: "Man with camera",
    },
    {
      id: 14,
      title: "@MODU9949",
      image:
        "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=400&h=300&fit=crop",
      description: "City nightlife",
    },
    {
      id: 15,
      title: "Creative Studios",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop",
      description: "Turntable and vinyl",
    },
    {
      id: 16,
      title: "Music Fusion",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
      description: "Audio mixing console",
    },
    {
      id: 17,
      title: "Digital Arts",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Digital artwork display",
    },
    {
      id: 18,
      title: "Sound Wave Studio",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      description: "Podcast recording setup",
    },
    {
      id: 19,
      title: "Beat Makers",
      image:
        "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=300&fit=crop",
      description: "Music production",
    },
    {
      id: 20,
      title: "Entertainment Hub",
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=300&fit=crop",
      description: "Creative workspace",
    },
    {
      id: 21,
      title: "Stage Performance",
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop",
      description: "Concert stage view",
    },
    {
      id: 22,
      title: "Live Events",
      image:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=300&fit=crop",
      description: "Event crowd",
    },
    {
      id: 23,
      title: "Video Production",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      description: "Film production set",
    },
    {
      id: 24,
      title: "Media Network",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop",
      description: "Broadcasting equipment",
    },
    {
      id: 25,
      title: "Concert Series",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
      description: "Live concert atmosphere",
    },
    {
      id: 26,
      title: "Audio Visual",
      image:
        "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=400&h=300&fit=crop",
      description: "AV equipment",
    },
    {
      id: 27,
      title: "Streaming Channel",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop",
      description: "Streaming setup",
    },
    {
      id: 28,
      title: "Festival Grounds",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
      description: "Music festival venue",
    },
    {
      id: 29,
      title: "Recording Studio",
      image:
        "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=300&fit=crop",
      description: "Professional recording",
    },
    {
      id: 30,
      title: "DJ Collective",
      image:
        "https://images.unsplash.com/photo-1571266028243-d220c6b2c451?w=400&h=300&fit=crop",
      description: "DJ performance",
    },
    {
      id: 31,
      title: "Performance Arts",
      image:
        "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&h=300&fit=crop",
      description: "Artistic performance",
    },
    {
      id: 32,
      title: "Media Productions",
      image:
        "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=300&fit=crop",
      description: "Media content creation",
    },
  ];

  // Calculate rows based on data length
  // Each row has 6 columns
  const itemsPerRow = 6;
  const totalItems = galleryData.length;
  const rowCount = Math.ceil(totalItems / itemsPerRow);

  // Group items into rows of 6
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const rowItems = galleryData.slice(i * itemsPerRow, (i + 1) * itemsPerRow);
    rows.push(rowItems);
  }

  return (
    <div className="min-h-screen bg-black p-8">
      {/* Search Bar Section - constrained width */}
      <div className="max-w-3xl mx-auto mb-8 w-full">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="absolute -inset-1 bg-orange-500 rounded-full blur-lg opacity-50"></div>
            <div className="relative flex items-center bg-gradient-to-r from-amber-200 to-yellow-300 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-6 py-2 bg-transparent outline-none text-gray-800 placeholder-gray-600"
              />
              <button className="px-6 py-2 hover:bg-white/20 transition-colors">
                <Search className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-orange-500 rounded-full blur-lg opacity-50"></div>
            <button className="relative p-3 bg-gradient-to-r from-amber-200 to-yellow-300 rounded-full hover:from-amber-300 hover:to-yellow-400 transition-colors">
              <Filter className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="space-y-8">
        {rows.map((rowItems, rowIndex) => (
          <div key={rowIndex} className="relative -mx-8">
            {/* Amber-200 background - full width to edge */}
            <div className="absolute inset-0 bg-amber-200"></div>

            {/* Grid content - 6 columns per row - full width with equal spacing */}
            <div className="relative px-4">
              <div className="grid grid-cols-6 gap-4">
                {rowItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      handleCardClick({
                        imageSrc: item.image,
                        title: item.title,
                        description: item.description,
                      })
                    }
                    className="bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  >
                    <div className="aspect-video w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 bg-black/50">
                      <p className="text-white text-sm font-medium truncate">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Card - rendered at top level */}
      <PopupCard
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={selectedCard?.title || "@Image Title"}
        imageSrc={selectedCard?.imageSrc || "./src/assets/imgs/Cute_Dragon.jpg"}
        description={selectedCard?.description}
      />
    </div>
  );
};

export default SearchGallery;
