import React from 'react'
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logoContainer'>
                <i className="fa-solid fa-gavel"></i>
                <div>
                    <p>EscritorioAdvocacia</p>
                    <p>AliançadosAdvocados</p>
                </div>
            </div>
            <div className='footerSeparator'></div>
            <div>
                <p>
                    &#169;A Lue Site
                </p>
            </div>
            <div className='footerSeparator'></div>
            <div className='footer_SocialMedia'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
    )
}

export default Footer