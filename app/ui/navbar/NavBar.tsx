
import styles from './NavBar.module.css';
import React from 'react';
import Link from "next/link";
import { montserrat } from './../fonts';
import Image from 'next/image';
import logo from '../../../public/logos/Logo TechZone.png'
import GradeIcon from '@mui/icons-material/Grade';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

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
            <div>
                <input type='text' placeholder='Busca un producto' className = "w-[380px] h-[40px] rounded-[30px] p-5 text-black"/>
            </div>
            <div className ="flex items-center justify-center gap-8">            
            <Link href={'/favoritos'}><h1 className = {`${montserrat.className}`} style={{ fontSize: '18px' }}><GradeIcon />Favoritos</h1></Link>
            <Link href={'/search'}><h1 className = {`${montserrat.className}`} style={{ fontSize: '18px' }}><SearchIcon />Buscar</h1></Link>
            <Link href={'/profile'}><h1 className = {`${montserrat.className}`} style={{ fontSize: '18px' }}><AccountCircleIcon />Perfil</h1></Link>
            </div>
        </div>
    )
}