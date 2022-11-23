import React from "react";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Sobre from "./componentes/Sobre";
import Skills from "./componentes/Skills";
import Projetos from "./componentes/Projetos";
import "./styles/global.scss";
import Formulario from "./componentes/Formulario";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
   <>
     <Header/>
     <div className="background">

     </div>
     <main>
      <Home/>
      <Sobre/>
      <Projetos/>
      <Skills/>
      <Formulario/>
     </main>
     
   </>
   </BrowserRouter>
  );
}

export default App;
