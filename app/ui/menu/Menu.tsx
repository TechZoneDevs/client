'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Register from '../register/register'

const Menu = ({menu, setMenu}: {menu: boolean, setMenu: boolean}) => {
    const [registrarse, setRegistrarse] = useState(false)


    if(!menu) return null

    //agregar condicional de que si esta logueado que no aparezca el btn de registrarse y que aparezca uno como de deslogueo

  return (
    <div>
        <button onClick={()=> setMenu(false)}>x</button>
        <Link href={'/ventas'} ><h3>Productos en venta</h3></Link>
        <Link href={'/historial'} ><h3>Historial de compras</h3></Link>
        <button onClick={()=> setRegistrarse(true)}>Registrate aqui</button>
        <Register registrarse={registrarse} setRegistrarse={setRegistrarse}/>
    </div>
  )
}

export default Menu