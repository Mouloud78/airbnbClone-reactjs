import { useRef } from "react";

import { SiOpensea, SiCampaignmonitor } from "react-icons/si";
import { GrOverview } from "react-icons/gr";

import {
  MdOutlinePool,
  MdCabin,
  MdOutlineSurfing,
  MdOutlineTwoWheeler,
} from "react-icons/md";

import {
  GiBigDiamondRing,
  GiFarmTractor,
  GiRiver,
  GiCampingTent,
  GiIsland,
  GiLuckyFisherman,
  GiMountainCave,
  GiGrapes,
  GiTreeBranch,
  GiWaterfall,
  GiCastle,
  GiWheat,
  GiYinYang,
} from "react-icons/gi";

import { FaSkiing } from "react-icons/fa";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { IoFilterSharp } from "react-icons/io5";

enum ScrollDirection {
  LEFT = "left",
  RIGHT = "right",
}

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categoriesList = [
    { name: "Bord de mer", icon: <SiOpensea /> },
    { name: "Piscines", icon: <MdOutlinePool /> },
    { name: "Avec vue", icon: <GrOverview /> },
    { name: "Surf", icon: <MdOutlineSurfing /> },
    { name: "Luxe", icon: <GiBigDiamondRing /> },
    { name: "Campagne", icon: <SiCampaignmonitor /> },
    { name: "À deux roues", icon: <MdOutlineTwoWheeler /> },
    { name: "À la ferme", icon: <GiFarmTractor /> },
    { name: "Au pied des pistes", icon: <FaSkiing /> },
    { name: "Lacs", icon: <GiRiver /> },
    { name: "Cabanes", icon: <MdCabin /> },
    { name: "Cabanes perchées", icon: <GiLuckyFisherman /> },
    { name: "Camping", icon: <GiCampingTent /> },
    { name: "Îles", icon: <GiIsland /> },
    { name: "Montagnes", icon: <GiMountainCave /> },
    { name: "Vignobles", icon: <GiGrapes /> },
    { name: "Forêts", icon: <GiTreeBranch /> },
    { name: "Cascades", icon: <GiWaterfall /> },
    { name: "Châteaux", icon: <GiCastle /> },
    { name: "Plaines", icon: <GiWheat /> },
    { name: "Retraite spirituelle", icon: <GiYinYang /> },
  ];

  const handleScroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;

    if (direction === ScrollDirection.LEFT) {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative pt-6 px-4 md:px-10 flex items-center gap-3">
      {/* LEFT BUTTON - DESKTOP ONLY */}
      <button
        onClick={() => handleScroll(ScrollDirection.LEFT)}
        className="
          hidden
          md:flex
          items-center
          justify-center
          p-2
          rounded-full
          border
          bg-white
          shadow-sm
          hover:shadow-md
          transition
          z-10
        "
      >
        <RiArrowLeftSLine className="text-xl" />
      </button>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="
          flex-1
          overflow-x-auto
          scrollbar-hide
          scroll-smooth
        "
      >
        <div className="flex gap-6 min-w-max">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                border-b-2
                border-transparent
                hover:border-[#484848]
                pb-2
                transition
                min-w-[90px]
                md:min-w-[120px]
                flex-shrink-0
              "
            >
              <span className="text-xl md:text-2xl text-[#484848]">
                {category.icon}
              </span>

              <span
                className="
                  text-xs
                  md:text-sm
                  mt-1
                  text-center
                  text-[#484848]
                  whitespace-nowrap
                "
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON - DESKTOP ONLY */}
      <button
        onClick={() => handleScroll(ScrollDirection.RIGHT)}
        className="
          hidden
          md:flex
          items-center
          justify-center
          p-2
          rounded-full
          border
          bg-white
          shadow-sm
          hover:shadow-md
          transition
          z-10
        "
      >
        <RiArrowRightSLine className="text-xl" />
      </button>

      {/* FILTER BUTTON */}
      <button
        className="
          flex
          items-center
          gap-2
          border
          border-gray-300
          px-3
          py-2
          rounded-xl
          cursor-pointer
          hover:shadow-sm
          transition
          whitespace-nowrap
          bg-white
        "
      >
        <IoFilterSharp />

        <span className="hidden sm:block">Filtres</span>
      </button>
    </div>
  );
}
