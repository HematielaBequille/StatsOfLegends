import { Logos } from "./logos";
import { Menu } from "./menu";
import { NavButtons } from "./buttons";

export default function Navbar() {
  return (
    <div className="container-fluid ps-0 d-flex no-wrap">
      <Logos />
      <nav className="navbar container-fluid navbar-dark navbar-expand-lg">
        <div className="container-fluid bg-secondary ps-3 py-2 gap-1 gap-xxl-3 rounded rounded-2">
          <a
            className="navbar-brand text-uppercase text-light inter-bold ms-1 fs-md"
            href="/"
          >
            Stats Of
            <br />
            Legends
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarToggler"
          >
            <Menu />
            <NavButtons />
          </div>
        </div>
      </nav>
    </div>
  );
}
