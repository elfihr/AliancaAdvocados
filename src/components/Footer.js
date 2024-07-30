import React from 'react'
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logoContainer'>
                <i class="fa-solid fa-gavel"></i>
                <div>
                    <p>C&OJustiça</p>
                    <p>AliançadosAdvocados</p>
                </div>
            </div>
            <div className='footerSeparator'></div>
            <div>
                <p>
                    &#169;A Fihr Site
                </p>
            </div>
            <div className='footerSeparator'></div>
            <div className='footer_SocialMedia'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
    )
}

export default Footer