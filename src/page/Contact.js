import React from 'react'
import '../style/Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contato'>
      <h3 className='titleSection'>Contato</h3>
      <span className='goldenSeparator'></span>
      <p>Entre em Contato com a gente.</p>
      <div className='contact_wrapper'>

        <div className='contact_container'>
          <i class="fa-solid fa-location-dot"></i>
          <h3 className='contact_type'>Endereço</h3>
          <p>Avenida Paulista nº1449</p>
          <p>São Paulo - SP</p>
        </div>

        <div className='contact_container'>
        <i class="fa-solid fa-phone"></i>
          <h3 className='contact_type'>Telefone</h3>
          <p>+55 11 2109-XXXX</p>
          <p>+55 11 9 9277-XXXX</p>
        </div>

        <div className='contact_container'>
          <i class="fa-solid fa-location-dot"></i>
          <h3 className='contact_type'>E-Mail</h3>
          <p>aliancaadvocados@advocados.com</p>
          <p>saopauloalianca@advocados.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact