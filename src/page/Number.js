import React from 'react'
import '../style/Number.css'
import { number } from '../helper/helper'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

const Number = () => {
    return (
        <div className='number'>
            <div className='number_wrapper'>
                {number.map((number, index) => {
                    return (
                        <div className='number_container'>
                            <i className={number.class}></i>
                            <CountUp end={number.end} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>

                            <p>{number.label}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Number