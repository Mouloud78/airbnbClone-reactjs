import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-10 lg:px-20 py-3">
      {/* LOGO */}
      <Link
        to="/"
        className="flex items-center gap-2 font-bold text-xl md:text-2xl text-[#ff5a5f]"
      >
        <FaAirbnb className="text-3xl md:text-4xl" />
        <span className="hidden sm:block">airbnb</span>
      </Link>

      {/* MENU CENTRE */}
      <ul className="hidden md:flex items-center justify-center gap-6">
        <li className="font-bold text-[#484848]">
          <a href="#">Logements</a>
        </li>

        <li className="text-[#484848]">
          <a href="#">Expériences</a>
        </li>

        <li className="text-[#484848]">
          <a href="#">Expérience en ligne</a>
        </li>
      </ul>

      {/* DROITE */}
      <div className="flex items-center gap-3">
        {/* Icône monde cachée sur petit écran */}
        <TbWorld className="hidden sm:block text-xl" />

        {/* Bouton profil */}
        <div className="flex items-center gap-3 border border-gray-300 p-2 md:p-3 rounded-full hover:shadow-md cursor-pointer">
          <IoIosMenu className="text-xl" />
          <FaRegCircleUser className="text-2xl" />
        </div>
      </div>
    </nav>
  );
}
