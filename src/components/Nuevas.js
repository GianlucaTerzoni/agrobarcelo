import React from 'react'
import image1 from '../assets/_mg_6750.jpg'
import image2 from '../assets/_mg_6753.jpg'
import image3 from '../assets/_mg_6757.jpg'
import './NuevasStyles.css'



const Nuevas = () => {
  return (
    <div className='nuevas'>
        <div className='container'>
                <div className='content'>

                    <div>
                        <h3>Maquina número 1:</h3>
                        <img src={image1} alt='img not found' />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div>
                        <h3>Maquina número 2:</h3>
                        <img src={image2} alt='img not found' />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div>
                        <h3>Maquina número 3:</h3>
                        <img src={image3} alt='img not found' />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                </div>
        </div>

    </div>
  )
}

export default Nuevas