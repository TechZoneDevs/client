import React from 'react';
import styles from './cardcategory.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';

export default function CardCategory({name, image}: {name: string, image: string}){
    return (
        <div className = {styles.cardCategory}>
                <Image src = {image} alt = 'categoria' height = {100} width = {280} className = {styles.img}/>
            <div className = {styles.divCategory}>
            <h1 className={`${montserrat.className} ${styles.textCategory}`} style={{ fontSize: '18px' }} >
                {name}
            </h1>
            </div>
        </div>
    );
};