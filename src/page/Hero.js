import React from 'react'
import Background from '../assets/hero.jpg'
import '../style/Hero.css'
import { heroIntro } from '../helper/helper'

const Hero = () => {
    return (
        <div>
            <div className='hero' style={{ backgroundImage: `url(${Background})` }}>
                <div className='hero_container' >
                    <p >Aliança de Advogados</p>
                    <h3>Seu aliado legal em todas as circunstâncias.</h3>
                    <p className='hero_description'>Tratamos cada caso com a atenção e o cuidado que ele merece,<br /> desenvolvendo estratégias personalizadas para garantir o melhor resultado.</p>
                    <a href='/about' className='btnHero'><i class="fa-brands fa-whatsapp"></i>Entre em Contato</a>
                </div>
                <div className='heroIntro_Wrapper'>
                    {heroIntro.map((intro, index) => {
                        return (
                            <div key={index} className='heroIntro_Container'>

                                <div className='heroIntro_content'>
                                    <i className={intro.class}></i>
                                    <h5>{intro.tile}</h5>
                                </div>
                                <p>{intro.description}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Hero