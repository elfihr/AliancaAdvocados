import React from 'react'
import '../style/Team.css'
import { team } from '../helper/helper'

const Team = () => {
    return (
        <div className='team' id='team'>
            <h3 className='titleSection'>Nosso Time</h3>
            <span className='goldenSeparator'></span>
            <p>Conheça Nossa Equipe de Especialista da Aliança de Advogados</p>
            <div className='team_wrapper'>
                {team.map((team, index) => {
                    return (
                        <div key={index} className='team_container'>
                            <img className='teamImg' src={team.img} alt='time' />
                            <h5>{team.name}</h5>
                            <p>{team.prof}</p>
                            <div className='team_SocialMedia'>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-x-twitter"></i>
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team