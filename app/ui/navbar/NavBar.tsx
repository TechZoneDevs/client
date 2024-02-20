import styles from './NavBar.module.css';
import React from 'react';
import Link from "next/link";

export default function NavBar(){
    return(
        <div className = {styles.navBarContainer}>
            <Link href = {'/'}><h1>Tech Zone</h1></Link>
            <Link href = {'/favoritos'}><h1>Favoritos</h1></Link>
            <Link href = {'/search'}><h1>Search</h1></Link>
            <Link href = {'/profile'}><h1>Profile</h1></Link>
        </div>
    )
}