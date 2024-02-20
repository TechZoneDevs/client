
import styles from './NavBar.module.css';
import React from 'react';
import Link from "next/link";
import { montserrat } from './../fonts';
import Image from 'next/image';
import logo from '../../../public/logos/Logo TechZone.png'

export default function NavBar() {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.divLogo}>
                <Link href={'/'}>
                    <Image src= {logo} alt='logo' height={100} width={100} />
                </Link>
                <Link href={'/'}>
                <h1 className={`${montserrat.className} hover:text-shadow-white`} style={{ fontSize: '18px' }}>TechZone</h1>
                </Link>
            </div>
            <Link href={'/favoritos'}><h1 className = {`${montserrat.className}`} style={{ fontSize: '18px' }}>Favoritos</h1></Link>
            <Link href={'/search'}><h1 className = {`${montserrat.className}`} style={{ fontSize: '18px' }}>Buscar</h1></Link>
            <Link href={'/profile'}><h1 className = {`${montserrat.className}`} style={{ fontSize: '18px' }}>Perfil</h1></Link>
        </div>
    )
}