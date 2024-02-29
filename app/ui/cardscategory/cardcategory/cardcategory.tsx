import React from 'react';
import styles from './cardcategory.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';

export default function CardCategory({name, image}: {name: string, image: string}){
    return (
        <div className={styles.cardCategory}>
            <div className = {styles.imgContainer}>
            <Image src={image} alt='categoria' height={130} width={130} className={styles.img} />
            </div>
            <h1 className={`${montserrat.className} ${styles.textCategory}`}>
                {name}
            </h1>
        </div>
    );
}