import React from 'react'
import logo from '../public/logos/Logo TechZone.png'
import Image from 'next/image';



const aboutWe = () => {
  return (
    <div>
        <div>
            <h3>Tecnologias utilizadas en este proyecto</h3>
            <div>
                aca agregar imagenes de todas las tecnologias usadas
            </div>
        </div>
    <div>
        <div>
        <Image src = {logo} alt = 'logo TechZone' height = {120} width = {200}/>
            
        </div>
        <div>
            <h2>Quienes somos?</h2>
            <p>Somos un equipo de desarrolladores egresados en soyHenry que estan en busca de conseguir un trabajo a tiempo completo como desarrolladores</p>
        </div>
    </div>
    <div> 
        en cada card agregar: Imagen de la persona, tecnologias que maneja, en que estuvo (back, front, full stack) y link de su linkedin
        <div>Card Aquiles</div>
        <div>Card Nico</div>
        <div>Card Leo</div>
        <div>Card Nahu</div>
        <div>Card Maxi</div>
        <div>Card Jano</div>
    </div>
    </div>
  )
}

export default aboutWe