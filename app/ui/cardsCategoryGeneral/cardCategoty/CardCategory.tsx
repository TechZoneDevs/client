import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import { montserrat } from '../../fonts';

export default function CardCategory({name, image}: {name: string, image: string}){
    return (
        <div className = {styles.cardCategory}>
                <Image src = {image} alt = 'categoria' height = {120} width = {200} className = {styles.img}/>
            
                <h1 
    className={` ${montserrat.className} ${styles.textCategory} bg-black p-1 rounded-lg text-white border-2 hover:text-purple border-white transition duration-300 ease-in-out hover:shadow-custom`} 
    style={{ 
        fontSize: '18px',
        boxShadow: '0px 0px 10px 2px rgb(225, 0, 255)',
    }} 
>
    {name}
</h1>



            
        </div>
    );
};