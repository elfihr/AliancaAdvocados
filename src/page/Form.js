import React from 'react'
import '../style/Form.css'

const Form = () => {
  return (
    <div className='form'>
        <h3 className='titleSection'>Faça uma Consulta Grátis</h3>
        <span className='goldenSeparator'></span>
        <form method='POST' className='form_container' required>
            <input type='name' placeholder='Nome Completo*' required></input>
            <input type='email' placeholder='E-mail*' required></input>
            <input type='number' placeholder='Telefone*' required></input>
            <textarea rows={6} placeholder='Digite sua Dúvida*' name='message' required></textarea>
            <button className='form_btn' type='submit'>Enviar Mensagem</button>
        </form>
    </div>
  )
}

export default Form