import React from "react";
import CardWidget from "./cardWidget";

const NavBar = () => {
  return  (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="CasaMachi1.png" alt="logoMachi" width="120"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li classNameName="nav-item">
                <a className="nav-link" href="#">Quienes somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Talleres</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tienda
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Flores de Bach</a></li>
                  <li><a className="dropdown-item" href="#">Cristales</a></li>
                  <li><a className="dropdown-item" href="#">Sesión de Masajes</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <CardWidget/>
      </nav>
      
    </div>
  )
}

export default NavBar;
