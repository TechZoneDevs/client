'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Register from '../register/register'
import styles from './Menu.module.css'
import MenuUserLogueado from './MenuUserLogueado/MenuUserLogueado'
import MenuUserNotLogueado from './MenuUserNotLogueado/MenuUserNotLogueado'

const Menu = ({menu, setMenu}: {menu: boolean, setMenu: Function}) => {
    const [registrarse, setRegistrarse] = useState(false)
    const userLogueado = false;


    if(!menu) return null

    //agregar condicional de que si esta logueado que no aparezca el btn de registrarse y que aparezca uno como de deslogueo

  return (
    <div className = {styles.holeModal}>
        <button onClick={()=> setMenu(!menu)} className = {styles.closeBtn}>Close</button>
        { userLogueado? <MenuUserLogueado /> : <MenuUserNotLogueado />}       
    </div>
  )
}

export default Menu