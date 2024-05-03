import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav
        className="navbar container-fluid bg-dark border-bottom border-body navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid align-items-center">
          <button type="button" className="btn btn-dark m-2">
            {" "}
            <Link to="/" className="text-decoration-none fs-5">
              Taller el Garage
            </Link>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <button type="button" className="btn btn-dark m-2">
                  <Link to="/clientes" className="text-decoration-none fs-5">
                    Clientes
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark m-2">
                  <Link to="/vehiculos" className="text-decoration-none fs-5">
                    Vehículos
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-dark m-2">
                  <Link
                    to="/presupuestos"
                    className="text-decoration-none fs-5"
                  >
                    Presupuesto
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
