import React from "react";
import CardWidget from "./cardWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return  (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}><img src="CasaMachi1.png" alt="logoMachi" width="120"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link active" activeclassname="page" to={"/category/Inicio"}>Inicio</NavLink></li>
                  <li classNameName="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/Quienes"}>Quienes somos</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/Talleres"}>Talleres</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" activeclassname="page" to={"/category/Tienda"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Tienda
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" activeclassname="page" to={"/category/Flores"}>Flores de Bach </NavLink></li>
                      <li><NavLink className="dropdown-item" activeclassname="page" to={"/category/Cristales"}>Cristales</NavLink></li>
                      <li><NavLink className="dropdown-item" activeclassname="page" to={"/category/Masajes"}>Sesión de Masajes</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <CardWidget/>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
