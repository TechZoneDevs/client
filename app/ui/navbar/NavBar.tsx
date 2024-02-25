
import styles from './NavBar.module.css';
import React from 'react';
import Link from "next/link";
import { montserrat } from './../fonts';
import Image from 'next/image';
import logo from '../../../public/logos/Logo TechZone.png'
import menuLogo from '../../../public/logos/menuNavBar.png'
import carritoLogo from '../../../public/logos/carritoLogo.png'


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.divLogo}>
                <Link href={'/'}>
                    <Image src= {menuLogo} alt='menu Logo' height={100} width={100} />
                </Link>
                <Link href={'/'}>
                <h1 className={`${montserrat.className} hover:text-shadow-white`} style={{ fontSize: '18px' }}>
    Tech <span className="relative">
      <span className="text-black bg-purple-500 p-1 rounded-tl-lg rounded-br-lg">Zone</span>
    </span>
  </h1>
                </Link>
            </div>
            <div>
                <input type='text' placeholder='Busca un producto' className = "w-[380px] h-[40px] rounded-[30px] p-5 text-black"/>
                <h2><SearchIcon /></h2>
            </div>
            <div className ="flex items-center justify-center gap-8">            
          
            <Link href={'/search'}><h2 className = {`${montserrat.className}`} style={{ fontSize: '18px' }}>Productos</h2></Link>
            <Link href={'/profile'}><h2 className = {`${montserrat.className}`} style={{ fontSize: '18px' }}><AccountCircleIcon />Perfil</h2></Link>
            <Link href={'/carrito'}><Image src= {carritoLogo} alt='menu Logo' height={80} width={80} /></Link>

           
            
            </div>
        </div>
    )
}