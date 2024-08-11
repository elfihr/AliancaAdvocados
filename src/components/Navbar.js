import React, { useRef, useState, useEffect } from "react";
import '../style/Navbar.css'
import { menuLinks } from '../helper/helper'
import { Twirl as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const btnRef = useRef()
    useEffect(() => {
        const closeDropdown = e => {
            if (!btnRef.current.contains(e.target)) {
                setIsMobile(false);
            }
        }
        document.body.addEventListener('click', closeDropdown)
        return () => document.body.removeEventListener('click', closeDropdown)
    }, [])

    return (
        <nav className="navbar">
            <div className="logo_Container">
            <i className="fa-solid fa-gavel hammerico"></i>
                <div>
                    <h4>AliançaDos</h4>
                    <h3>Advogados</h3>
                </div>

            </div>
            <div className={isMobile ? "navlink_mobile" : "navlink"} >
                {menuLinks.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li>
                                <a className={item.class} href={item.href}>{item.label}</a>
                            </li>
                        </ul>
                    )
                })}
            </div>
            <div className="menuIcon" onClick={() => setIsMobile(!isMobile)} ref={btnRef}>
                {<Hamburger toggled={isMobile} toggle={setIsMobile} />}
            </div>
        </nav>
    )
}


export default Navbar



