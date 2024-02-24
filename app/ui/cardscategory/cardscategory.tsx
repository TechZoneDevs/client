import React from 'react';
import styles from './cardscategory.module.css';
import CardCategory from './cardcategory/cardcategory';

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
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733824/cpu_aiplu2.png',
        name: 'CPUs'
      },
      {
        id: 4,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733824/laptop_igtag0.png',
        name: 'Laptops'
      },
      {
        id: 5,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733825/procesador_gupn47.png',
        name: 'Procesadores'
      },
      {
        id: 6,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733824/tarjetagrafica_u1u2yv.png',
        name: 'Tarjetas de video'
      },
      {
        id: 7,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708734080/motherboard_p8mvkn.png',
        name: 'Motherboards'
      },
      {
        id: 8,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733824/monitor_uygmet.png',
        name: 'Monitores'
      },
      {
        id: 9,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733826/smartphone_s8rs7u.png',
        name: 'Smartphones'
      },
      {
        id: 10,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733825/audio_sjyb5v.png',
        name: 'Audio'
      },
      {
        id: 11,
        img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733827/tablet_ts9x4g.png',
        name: 'Tablets'
      },
    ]
    interface CategoryProps{
      category:{
        id: number;
        img: string;
        name: string;
      };
    };

    return(
        <div>
            <h1>Categorias</h1>
            { category?.map((element) => <CardCategory key = {element.id} name = {element.name} image = {element.img} />)}
        </div>
    );
}