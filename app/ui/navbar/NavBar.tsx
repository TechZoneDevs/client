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
            <div className={styles.logoContainer}>
                <Link href={'/'}>
                    <Image src={menuLogo} className={styles.menuLogo} alt='menu Logo' height={40} width={40} />
                </Link>
                <Link href={'/'}>
  <h1 className={`${montserrat.className}`} style={{marginLeft: '5px', color: 'white', fontSize: '14px' }}>
    Tech 
      <span className={styles.techText}>Zone</span>
    
  </h1>
</Link>

            </div>
            <div className={styles.searchContainer}>
             <SearchIcon className={styles.searchIcon} />
                 <input type='text' placeholder='Busca un producto' className={`${styles.searchInput} text-black`} />
            </div>

            <div className={styles.navLinksContainer}>
            <Link href="/search" className={`${montserrat.className} ${styles.navLink}`}>
 <p className={styles.textBtn}>Productos</p>
    
 
</Link>
                <Link href={'/profile'}><AccountCircleIcon className={styles.profileIcon} /></Link>
                <Link href={'/carrito'}><Image src={carritoLogo} alt='carrito Logo' height={40} width={40} className={styles.carritoIcon} /></Link>
            </div>
        </div>
    )
}
