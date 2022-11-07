import React from "react";
import "../styles/Header.scss";
import logo from "../imgs/DAX-r.png";


 export default function Header() {
  return(
    <header className="header">
      <img src={logo} alt="logo"/>
      <nav className="navbar">
        <a href="#home">
          Home
        </a>
        <a href="#sobre">
          Sobre
        </a>
        <a href="#skills">
          Skills
        </a>
        <a href="#projetos">
          Projetos
        </a>
        <a href="#form_section">
          Contato
        </a>
      </nav>
    </header>

  )
}

