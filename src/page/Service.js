import React from 'react'
import '../style/Service.css'
import { service } from '../helper/helper'

const Service = () => {
    return (
        <div className='service' id='service'>
            <h3 className='titleSection'>Serviços</h3>
            <span className='goldenSeparator'></span>
            <p>
                Oferecemos uma ampla gama de serviços jurídicos para atender às necessidades de nossos clientes,
                <br />
                sempre com um foco personalizado e eficiente. Nossa equipe de advogados experientes está pronta
                <br />
                para proporcionar soluções jurídicas que protejam seus interesses e ajudem a alcançar seus objetivos.</p>
            <div className='service_wrapper'>
                {service.map((services, index) => {
                    return (
                        <div key={index} className='service_container'>
                            <i className={services.class}></i>
                            <h5>{services.tile}</h5>
                            <p>{services.description}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Service