import React from 'react';
import styles from './cardcategory.module.css';
import Image from 'next/image';

export default function CardCategory({name, image}: {name: string, image: string}){
    // interface CategoryImage{
    //     image:{
    //       src: string;
    //       alt: string;
    //     };
    //   };
    return (
        <div className = ''>
            <div>
                <Image src = {image} alt = 'categoria' width = {280} height = {170}/>
            </div>
            <h1>
                {name}
            </h1>
        </div>
    );
};