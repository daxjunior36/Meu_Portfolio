import React from "react";
import "../styles/Home.scss";
import astronalta from "../imgs/header-img.svg";
import linkedin from "../imgs/linkedin.c.svg";
import github from "../imgs/github.png";
import curriculo from "../imgs/curriculo.png";
import { useEffect, useState } from "react";

const text = 'Front-End Developer'
const text2 = 'Muito Prazer...'

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
        Olá, EU SOU Domingos Alexandre 
      </h2>
      <h3 id="profissao">
      {textToType} <span>|</span>
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
      <a href="https://drive.google.com/file/d/1L4WQlSRNQmUdX-iY5QKkZW2X1rmWxHIt/view?usp=share_link">
        <img className="curriculo" src={curriculo} alt="curriculo" />
        <span>Currículo</span> 
      </a>
      </div>
      </div>

      <div className="home-img">
        <img src={astronalta} alt="" />
      </div>

    </section>

  )
}