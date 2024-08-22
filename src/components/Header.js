import React from 'react'
import logoMarian from '../assets/images/Logo-Marian-2.png'
import {  NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header id="header">
        <div className="center">
            {/* <!-- LOGO --> */}
                <div id="logo">
                    <img src={logoMarian} className="app-logo" alt="Logo"/>
                    <span id="brand">
                        <strong>Macias </strong>Mariano
                    </span>
                </div>
            {/* <!-- MENU --> */}
            <nav id="menu">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobre-mi" className={({ isActive }) => isActive ? "active" : ""}>Sobre Mi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formacion-profesional" className={({ isActive }) => isActive ? "active" : ""}>Estudios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formulario" className={({ isActive }) => isActive ? "active" : ""}>Contactame</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="#" className={({ isActive }) => isActive ? "active" : ""}>Pagina 2</NavLink>
                    </li> */}
                </ul>
            </nav>

            {/* <!-- LIMPIAR FLOTADOS --> */}
            <div className="clearfix"></div>
        </div>
    </header>
    </>
  )
}
