import React from "react";
import "../styles/Home.scss";
import astronalta from "../imgs/header-img.svg";
import linkedin from "../imgs/linkedin.c.svg";
import github from "../imgs/github.png";

 export default function Home() {
  return(
    <section id="home">
      <div className="home-info">
      <h5>
        Oi, meu nome é
      </h5>
      <h2  className="nome">
        Domingos Alexandre 
      </h2>
      <h3>
        Front-End Developer.
      </h3>
      <p>
      
      </p>
      <div className="links">
      <a href="https://www.linkedin.com/in/domingos-alexandre-s-jr/">
        <img src={linkedin} alt="linkdin" />
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/daxjunior36">
        <img src={github} alt="github" />
        <span>GitHub</span> 
      </a>
      </div>
      </div>

      <div className="home-img">
        <img src={astronalta} alt="" />
      </div>

    </section>

  )
}