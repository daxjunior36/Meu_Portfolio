import React from "react";
import "../styles/Header.scss";


 export default function Header() {
  return(
    <header className="header">
     <div className="logo-container">
      <div className="logo">
        <span>DAX</span>
      </div>
        <div className="nome-profissao">
          <span className="nome">Domingos Alexandre</span>
          <p className="profissao"><span>WEB</span><span>DEVELOPER</span></p>
        </div>
     </div>
      <nav className="navbar">
        <a href="#home">
          Home
        </a>
        <a href="#sobre">
          Sobre
        </a>
        <a href="#projetos">
          Projetos
        </a>
        <a href="#skills">
          Skills
        </a>
        <a href="#form_section">
          Contato
        </a>
      </nav>
    </header>

  )
}

