import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import formImg from '../imgs/iluminado2.png';
import "../styles/Formulario.scss";


export default function Formulario() {
  const form = useRef();
  console.log(process.env.REACT_APP_PUBLIC_KEY)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='form_section'>
      <div className='form-img'>
        <img src={formImg} alt="imagem-do-formulario" />
        <form ref={form} onSubmit={sendEmail}>
          <h2> Entre em Contato</h2>
          <input type="text" name="user_name" placeholder='Nome'/>
         
          <input type="email" name="user_email" placeholder='E-mail'/>
          
          <textarea name="message" placeholder='Sua Mensagem'/>
          <button type="submit"> Enviar </button>
        </form>
      </div>
     
    </section>
  )
};