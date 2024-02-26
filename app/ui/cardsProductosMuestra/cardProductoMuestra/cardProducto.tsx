import React from 'react';
import styles from './cardProducto.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';

export default function CardProducto({name, image}: {name: string, image: string}){
    return (
        <div className = {styles.cardProducto}>
                <Image src = {image} alt = 'categoria' height = {120} width = {200} className = {styles.img}/>
            
                <h1>{name}</h1>

         </div>
    );
};