import React from 'react';
import styles from './cardscategory.module.css';
import CardCategory from './cardcategory/Cardcategory'
import { montserrat } from '../fonts';

export default function CardsCategory(){
    const category = [{
        id: 1,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733825/teclado_dx8rko.png',
        name: 'Teclados'
      },
      {
        id: 2,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733824/mouse_pubjux.png',
        name: 'Mouses'
      },
      {
        id: 3,
        img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708807040/cpu3_fcg4as.png',
        name: 'CPUs'
      },
      {
        id: 4,
        img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708809448/cropped3_tikrfq.png',
        name: 'Laptops'
      },
      {
        id: 6,
        img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708805538/tarjetagrafica2_sprphn.png',
        name: 'Graphics'
      },
      {
        id: 8,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733824/monitor_uygmet.png',
        name: 'Monitores'
      },
      {
        id: 9,
        img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708807476/cropped2_bxpo8c.png',
        name: 'Smartphones'
      },
      {
        id: 10,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733825/audio_sjyb5v.png',
        name: 'Audio'
      },
      // {
      //   id: 11,
      //   img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733827/tablet_ts9x4g.png',
      //   name: 'Tablets'
      // },
    ]
    interface CategoryProps{
      category:{
        id: number;
        img: string;
        name: string;
      };
    };

    return(
        <div className = {styles.divCategorias}>
            { category?.map((element) => <CardCategory key = {element.id} name = {element.name} image = {element.img} />)}
        </div>
    );
}