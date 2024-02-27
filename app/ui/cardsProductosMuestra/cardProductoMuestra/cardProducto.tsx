import React from 'react';
import styles from './cardProducto.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';

export default function CardProducto({name, image, precio, marca}: {name: string, image: string, precio: number, marca: string}){
    return (
        <div className = {styles.cardProducto}>
                <Image src = {image} alt = 'categoria' height = {120} width = {200} className = {styles.img}/>
            <div className = {styles.info}>
                <div>
                <h1 className = {`${montserrat.className}`} style = {{ fontSize: '12px'}}>{name}</h1>
                <h1 className = {`${montserrat.className}`} style = {{ fontSize: '8px', textAlign: 'start'}}>{marca}</h1>
                </div>
                <h1 className = {`${montserrat.className}`} style = {{ fontSize: '13px'}}>{precio}$</h1>
                </div>

         </div>
    );
};