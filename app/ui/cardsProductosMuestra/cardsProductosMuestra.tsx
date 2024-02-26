import React from 'react';
import CardProducto from './cardProductoMuestra/cardProducto';
import styles from './cardsProductosMuestra.module.css';

import { montserrat } from '../fonts';

export default function CardsProductos() {
  const productos = [
    {
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
      name: 'Tarjetas de video'
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
    {
      id: 11,
      img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733827/tablet_ts9x4g.png',
      name: 'Tablets'
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Nuestros mejores productos
      </div>
      <div className={styles.productContainer}>
        {productos.map((element) => (
          <CardProducto key={element.id} name={element.name} image={element.img} />
        ))}
      </div>
    </div>
  );
}
