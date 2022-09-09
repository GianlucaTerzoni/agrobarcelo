import React from 'react'
import './ContactStyles.css'


const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="form-container">
                <form>
                    <h1><span>Contacto</span></h1>
                    <div>
                        <label>Nombre:</label>
                        <input type='text' placeholder='Ingrese su nombre' />
                    </div>
                    <div>
                        <label>Correo Electrónico:</label>
                        <input type='email' placeholder='Ingrese su correo electr.' />
                    </div>
                    <div>
                        <label>Mensaje:</label>
                        <textarea rows='10'  placeholder='Escriba su mensaje' />
                    </div>
                    <button>ENVIAR</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact