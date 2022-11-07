import React from "react";

 export default function CardDoProjeto({title, src, hrefGit, hrefDemo, descricao}) {
  return(
    <div
    className="card-projeto" 
   
    >
      <div className="card-img" style={{backgroundImage:`url(${src})`}}>
        
      </div>
      <div className="card-info">
        <h5> {title}</h5>
        <p>{descricao}</p>
      </div>

      <div className="buttons">
        <a className="github" target='_blank'  href={hrefGit} rel="noreferrer">
          GitHub
        </a>
        <a className="Demo" target='_blank' href={hrefDemo} rel="noreferrer">
          Demo
        </a>
      </div>
    </div>


  )
}
