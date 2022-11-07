import React from "react";
import CardDoProjeto from "./CardDoProjeto";
import projetos from "../helpers/projetos"; 
import "../styles/Projetos.scss"

export default function Projetos() {
  return(
  <section id="projetos">
  <h2>projetos</h2>
  <div className="card-projeto-list">
    {projetos.map((element) => (
      <CardDoProjeto key={element.title} src={element.src} title={element.title} descricao={element.descricao} hrefDemo={element.hrefDemo} hrefGit={element.hrefGit}/>
    ))}
  </div>
  </section>

  )
}
