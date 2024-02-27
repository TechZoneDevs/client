'use client'
import React, { useState } from 'react';
import CardProducto from './cardProductoMuestra/cardProducto';
import styles from './cardsProductosMuestra.module.css';

import { montserrat } from '../fonts';

export default function CardsProductos() {
  const productos = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733825/teclado_dx8rko.png',
      name: 'Teclado Nyvara',
      marca: 'Razer',
      precio: 120
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733824/mouse_pubjux.png',
      name: 'Mouse L201',
      marca: 'Logitech',
      precio: 80
    },
    {
      id: 3,
      img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708807040/cpu3_fcg4as.png',
      name: 'CPU Gamer',
      marca: 'Corsair',
      precio: 1500
    },
    {
      id: 4,
      img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708809448/cropped3_tikrfq.png',
      name: 'Alienware',
      marca: 'Dell',
      precio: 2000
    },
    {
      id: 5,
      img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708805538/tarjetagrafica2_sprphn.png',
      name: 'GeForce RTX 3070',
      marca: 'Nvidia',
      precio: 500
    },
    {
      id: 6,
      img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733824/monitor_uygmet.png',
      name: 'Monitor Gaming 75Hz',
      marca: 'Teros',
      precio: 400
    },
    {
      id: 7,
      img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1708807476/cropped2_bxpo8c.png',
      name: 'Iphone 14 Pro Black',
      marca: 'Apple',
      precio: 3000
    },
    {
      id: 8,
      img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733825/audio_sjyb5v.png',
      name: 'Audifonos BlackShark',
      marca: 'Razer',
      precio: 450
    },
    {
      id: 9,
      img: 'https://res.cloudinary.com/dphpu225t/image/upload/v1708733827/tablet_ts9x4g.png',
      name: 'Ipad Pro',
      marca: 'Apple',
      precio: 1600
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const totalPages = Math.ceil(productos.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, productos.length);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Laptops a la venta!
      </h1>
      <div className={styles.productContainer}>
        {productos.slice(startIndex, endIndex).map((producto) => (
          <CardProducto key={producto.id} name={producto.name} marca = {producto.marca} image={producto.img} precio = {producto.precio}/>
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
      </div>
    </div>
  );
}
