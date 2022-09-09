import React from 'react'
import { SiDatabricks } from 'react-icons/si'
import { BsFillArrowUpCircleFill }from 'react-icons/bs'
import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import './footerStyle.css'

import {Link} from 'react-scroll';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="top">
                <div className="logo-footer"><SiDatabricks className="icon"/>
                <h2>Agro Barcelo</h2>
                </div>
                <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                </Link>
            </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Inicio</p>
                        <p>Nosotros</p>
                        <p>Contacto</p>
                    </div>
                    <div className="col">
                        <h3>Informacion</h3>
                        <p>Inicio</p>
                        <p>Nosotros</p>
                        <p>Contacto</p>
                    </div>
                    <div className="col">
                        <h3>Sucursales</h3>
                        <p>Inicio</p>
                        <p>Nosotros</p>
                        <p>Contacto</p>
                    </div>
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Inicio</p>
                        <p>Nosotros</p>
                        <p>Contacto</p>
                    
                    </div>
                    <form>
                        <h3>Contacto</h3>
                        <input type='email' placeholder='Enter your email'/>
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <AiOutlineWhatsApp className='social-icon'/>
                        </div>
                    </form>
        </div>
    </div>
    </div>
  )
}
