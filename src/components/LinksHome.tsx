export default function LinksHome() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        max-w-[1200px]
        mx-auto
        py-8
        px-4
        md:px-8
      "
    >
      {/* Assistance */}
      <div className="p-2 md:p-4">
        <h4 className="text-lg font-semibold mb-3">Assistance</h4>

        <ul className="flex flex-col gap-3 text-sm md:text-base">
          <li>
            <a href="#" className="hover:underline">
              Centre d'aide
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              AirCover
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Lutte contre la discrimination
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Assistance handicap
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Options d'annulation
            </a>
          </li>
        </ul>
      </div>

      {/* Voyage */}
      <div className="p-2 md:p-4">
        <h4 className="text-lg font-semibold mb-3">Accueil de voyage</h4>

        <ul className="flex flex-col gap-3 text-sm md:text-base">
          <li>
            <a href="#" className="hover:underline">
              J'ai un problème de voisinage
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Mettre votre logement sur Airbnb
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              AirCover pour les hôtes
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Ressources pour les hôtes
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Forum de la communauté
            </a>
          </li>
        </ul>
      </div>

      {/* Airbnb */}
      <div className="p-2 md:p-4">
        <h4 className="text-lg font-semibold mb-3">Airbnb</h4>

        <ul className="flex flex-col gap-3 text-sm md:text-base">
          <li>
            <a href="#" className="hover:underline">
              Newsroom
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              AirCover
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Nouvelles fonctionnalités
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Carrières
            </a>
          </li>

          <li>
            <a href="#" className="hover:underline">
              Investisseurs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
