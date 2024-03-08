'use client'
import styles from './NavBar.module.css';
import React, { useState } from 'react';
import Link from "next/link";
import { montserrat } from './../fonts';
import Image from 'next/image';
import logo from '../../../public/logos/Logo TechZone.png'
import menuLogo from '../../../public/logos/menuNavBar.png'
import carritoLogo from '../../../public/logos/carritoLogo.png'
import Menu from '../menu/Menu';


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Carrito from '../carrito/Carrito';

export default function NavBar({ setLogin, login }: { setLogin: Function, login: boolean }) {
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState(false)

    return (
        <div className={styles.navBarContainer}>
            <div className={styles.logoContainer}>
                <button onClick={() => setMenu(true)}>
                    <Image src={menuLogo} className={styles.menuLogo} alt='menu Logo' height={40} width={40} />
                    { menu && <Menu menu = {menu} setMenu = {setMenu}/>}
                </button>
                <Link href={'/'}>
                    <h1 className={`${montserrat.className} transition-all duration-300 ease-in-out transform hover:scale-105`} style={{ marginLeft: '5px', color: 'white', fontSize: '14px' }}>
                        Tech
                        <span className={styles.techText}>Zone</span>
                    </h1>

                </Link>

            </div>
            <div className={styles.searchContainer}>
                <SearchIcon className={styles.searchIcon} />
                <input type='text' placeholder='Busca un producto' className={`${styles.searchInput} text-black`} style={{ fontSize: '13px', paddingLeft: '15px' }} />
            </div>

            <div className={styles.navLinksContainer}>
                <Link href="/search" className={`${montserrat.className} ${styles.navLink}`}>
                    <p className={styles.textBtn}>Productos</p>
                </Link>
                <button onClick = {()=> setLogin(!login)}><AccountCircleIcon className={styles.profileIcon} /></button>
                <button onClick={() => setCarrito(true)}><Image src={carritoLogo} alt='carrito Logo' height={40} width={40} className={styles.carritoIcon} />
                </button>
            </div>
            <Carrito carrito={carrito} setCarrito={setCarrito} />
        </div>
    )
}
