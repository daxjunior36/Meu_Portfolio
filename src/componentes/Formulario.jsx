import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import formImg from '../imgs/iluminado2.png';
import "../styles/Formulario.scss";
import toast, { Toaster } from 'react-hot-toast';


export default function Formulario() {
  const [form, setForm]  = useState({'user_email':'', 'user_name':'', message:''});
  console.log(process.env.REACT_APP_PUBLIC_KEY)

  const handleChange = ({target}) => {
    const { name, value } = target;
    setForm({...form, [name]:value})
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setForm({user_email:'', user_name:'', message:''})
          toast.success('Menssagem enviada com sucesso');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='form_section'>
      <div className='form-img'>
        <img src={formImg} alt="imagem-do-formulario" />
        <form onSubmit={sendEmail}>
          <h2> Entre em Contato</h2>
          <input onChange={handleChange} value={form['user_name']} type="text" name="user_name" placeholder='Nome'/>
         
          <input onChange={handleChange} value={form['user_email']} type="email" name="user_email" placeholder='E-mail'/>
          
          <textarea onChange={handleChange} value={form['message']} name="message" placeholder='Sua Mensagem'/>
          <button type="submit"> Enviar </button>
        </form>
      </div>
      <Toaster />
    </section>
  )
};