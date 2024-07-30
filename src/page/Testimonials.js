import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import '../style/Testimonials.css'

import { testimonials } from '../helper/helper';


const Testimonials = () => {

    return (
        <div className='testimonials' id='testimonials'>
            <div className='testimonials_title'>
                <h3 className='titleSection'>Depoimentos</h3>
                <span className='goldenSeparator'></span>
                <p>Há uma razão pela qual a nossa reputação nos precede: a nossa história de 13 anos em São Paulo<br /> rendeu-nos algumas das principais críticas na indústria de danos pessoais.</p>
            </div>
            <i className="Testimonials_quote fa-solid fa-quote-right"></i>
            <div className='testimonialsWrapper'>
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {testimonials.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <p className='testimonialsDescription'>{client.description}</p>
                                <span className='goldborderImg'>
                                    <img src={client.img} className='testimonialsImg'></img>
                                </span>
                                
                                <p>{client.name}</p>
                            </SwiperSlide>
                        )
                    })}





                    ...
                </Swiper>
            </div>

        </div>

    )
}

export default Testimonials