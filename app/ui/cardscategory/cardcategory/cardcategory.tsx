import React from 'react';
import styles from './cardcategory.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';

export default function CardCategory({name, image}: {name: string, image: string}){
    return (
        <div className={styles.cardCategory}>
            <Image src={image} alt='categoria' height={120} width={200} className={styles.img} />
            <h1 className={`${montserrat.className} ${styles.textCategory}`} style={{ fontSize: '14px' }} >
                {name}
            </h1>
        </div>
    );
};