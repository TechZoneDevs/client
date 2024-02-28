import React from 'react';
import styles from './CardsCategory.module.css';
import CardCategory from './cardCategoty/CardCategory'
import { montserrat } from '../fonts';

export default function CardsCategory(){
    const category = [
      {
        id: 3,
        img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708807040/cpu3_fcg4as.png',
        name: 'Gaming'
      },
      {
        id: 4,
        img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708809448/cropped3_tikrfq.png',
        name: 'Tecnologia'
      },
      {
        id: 6,
        img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708805538/tarjetagrafica2_sprphn.png',
        name: 'Componentes'
      },
      {
        id: 9,
        img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708807476/cropped2_bxpo8c.png',
        name: 'Smartphones'
      }
    ]
    interface CategoryProps{
      category:{
        id: number;
        img: string;
        name: string;
      };
    };

    return(
        <div className = {styles.divOne}>
            { category?.map((element) => <CardCategory key = {element.id} name = {element.name} image = {element.img} />)}
        </div>
    );
}