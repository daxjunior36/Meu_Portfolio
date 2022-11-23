import React from "react";
import "../styles/Home.scss";
import astronalta from "../imgs/header-img.svg";
import linkedin from "../imgs/linkedin.c.svg";
import github from "../imgs/github.png";
import curriculo from "../imgs/curriculo.png";
import { useEffect, useState } from "react";

const text = 'DESENVOLVEDOR FRONT-END'
const text2 = 'MUITO PRAZER...'

 export default function Home() {
  const [textToType, setToType] = useState('');
  const [textoselecionado, setTextoselecionado] = useState(text2);
  const typeText = () => {
    textoselecionado.split('').forEach((e, index) => {
      setTimeout(() => {
        setToType((prev) => prev + e);
      }, 100 * index);
    });
  }
  const deleteText = () => {
    const textToDelete = textToType.split('');
    setTimeout(() => {
      textToDelete.forEach((_e, index) => {
        setTimeout(() => {
          textToDelete.splice(-1, 1);
          setToType(textToDelete.join(''));
          if(index === textToType.split('').length -1){
            setTextoselecionado(textToType === text ? text2: text)
          }
        }, 100 * index);
      });

    }, 800)
  }
  useEffect(() => {
    const typeOrDeleteText = () => {
      if (textToType === '') {
        typeText();
      }
      if (textToType === textoselecionado) {
        deleteText();
      }
    };
    if (textToType !== text) {
      typeOrDeleteText();
    }
  });
    
 
  return(
    <section id="home">
      <div className="home-info">
      <h5>
        
      </h5>
      <h2  className="nome">
        olá, eu sou Domingos Alexandre 
      </h2>
      <h3 id="profissao">
      {textToType} <span>|</span>
      </h3>
      <p>
      
      </p>
      <div className="links">
      <a target='_blank' href="https://www.linkedin.com/in/domingos-alexandre-s-jr/" rel="noreferrer">
        <img src={linkedin} alt="linkdin" />
        <span>LINKEDIN</span>
      </a>
      <a target='_blank' href="https://github.com/daxjunior36" rel="noreferrer">
        <img src={github} alt="github" />
        <span>GITHUB</span> 
      </a>
      <a target='_blank' href="https://www.canva.com/design/DAFPD5eVpSw/RlotwRhUPUhTbbvYCfTA-A/edit?utm_content=DAFPD5eVpSw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" rel="noreferrer">
        <img className="curriculo" src={curriculo} alt="curriculo" />
        <span>CURRÍCULO</span> 
      </a>
      </div>
      </div>

      <div className="home-img">
        <img src={astronalta} alt="" />
      </div>

    </section>

  )
}