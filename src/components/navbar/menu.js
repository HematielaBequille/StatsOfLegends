export function Menu() {
  return (
    <ul className="navbar-nav text-center gap-1 gap-xl-2 gap-xxl-3">
      <li>
        <a className="nav-link text-light" aria-current="page" href="/">
          Accueil
        </a>
      </li>
      <li>
        <a className="nav-link text-light" href="/equipes">
          Equipes
        </a>
      </li>
      <li>
        <a className="nav-link text-light" href="/joueurs">
          Joueurs
        </a>
      </li>
      <li>
        <a className="nav-link text-light" href="/ligues">
          Ligues
        </a>
      </li>
      <li>
        <a className="nav-link text-light" href="/calendrier">
          Calendrier
        </a>
      </li>
    </ul>
  );
}
