import React from 'react'
import '../style/About.css'
import { checks } from '../helper/helper'
import aboutImg from '../assets/about01.png'

const About = () => {
    return (
        <div className='about' id='sobre'>
            <h3 className='titleSection'>Sobre Nós</h3>
            <span className='goldenSeparator'></span>
            <p className='descriptionSection'>
                Valorizamos a inovação em nossas estratégias legais, adaptando-nos às mudanças
                <br />
                no ambiente jurídico para melhor servir nossos clientes.
            </p>
            <div className='about_Main'>
                <div className='aboutContainer'>
                    <p className='aboutContainer_Intro'>Valorizamos justiça, honestidade e tempo. Estamos sempre ao seu serviço, pois nos encarregamos da sua defesa. Qualquer detalhe será notado e pode ser essencial para o seu caso. Durante nosso trabalho, reunimos uma equipe de especialistas dedicados e com vasta experiência em ajuda jurídica.</p>
                    <div className='about_Wrapper'>
                        {checks.map((checks, index) => {
                            return (
                                <div key={index} className='check_Container'>
                                    <i className={checks.class}></i>
                                    <p>{checks.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='quote_Container'>
                        <i className="fa-solid fa-quote-right"></i>
                        <h4>Nossa experiência nos permite ter confiança e manter nossa palavra. Sempre reivindicaremos a justiça</h4>
                    </div>
                    <div className='signatutre_Container'>
                        <p className='about_cargo'>Presidente da Aliança dos Advogados</p>
                        <p className='signature'>Ronaldo S. Peçanha</p>
                    </div>

                </div>
                <img className='aboutImg' src={aboutImg} alt='advogado Ronaldo' />
            </div>
                        
        </div>
    )
}

export default About