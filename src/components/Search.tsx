import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="border-b-2 pb-5 px-4">
      <div
        className="
        max-w-[900px]
        mx-auto
        shadow-md
        rounded-3xl
        border border-gray-300
        flex
        flex-col
        md:flex-row
        items-stretch
        md:items-center
        overflow-hidden
      "
      >
        {/* Destination */}
        <button className="flex flex-col text-left px-5 py-4 hover:bg-gray-100 md:flex-1">
          <p className="text-sm font-bold">Destination</p>
          <span className="text-sm text-gray-500">
            Rechercher une destination
          </span>
        </button>

        {/* Départ */}
        <button className="flex flex-col text-left px-5 py-4 hover:bg-gray-100 md:flex-1 border-t md:border-t-0 md:border-l border-gray-200">
          <p className="text-sm font-bold">Départ</p>
          <span className="text-sm text-gray-500">Quand ?</span>
        </button>

        {/* Arrivée */}
        <button className="flex flex-col text-left px-5 py-4 hover:bg-gray-100 md:flex-1 border-t md:border-t-0 md:border-l border-gray-200">
          <p className="text-sm font-bold">Arrivée</p>
          <span className="text-sm text-gray-500">Quand ?</span>
        </button>

        {/* Voyageurs */}
        <button className="flex flex-col text-left px-5 py-4 hover:bg-gray-100 md:flex-1 border-t md:border-t-0 md:border-l border-gray-200">
          <p className="text-sm font-bold">Voyageurs</p>
          <span className="text-sm text-gray-500">Ajouter un voyageur</span>
        </button>

        {/* Search button */}
        <div className="flex items-center justify-center p-4 border-t md:border-t-0 md:border-l border-gray-200">
          <button className="rounded-full bg-[#ff5a5f] hover:bg-[#FC642d] text-white text-2xl p-4 transition">
            <IoIosSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
