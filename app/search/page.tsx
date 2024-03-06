'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import CardProducto from '../ui/cardsProductosMuestra/cardProductoMuestra/cardProducto';
import NavBar from '../ui/navbar/NavBar';

export default function Search(){
    const value = usePathname();
    console.log(value);
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
    

    //hacer un mapeo de los options y mapeo de productos

    return (
        <>
        <NavBar/>
        <div  style={{ background: 'linear-gradient(to bottom, rgb(0, 0, 0)15%, rgb(98, 0, 98) 100%)', width: '100%', minHeight: '100vh', height: 'auto', display: 'flex' }} className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center mb-2 p-10">
            <select className="px-4 py-2 mr-4 mb-4 bg-gray-200 rounded">
                <option value="">All</option>
                <option value=""></option>
            </select>
            <select className="px-4 py-2 mr-4 mb-4 bg-gray-200 rounded">
                <option value="">All</option>
                <option value=""></option>
            </select>
            <select className="px-4 py-2 mr-4 mb-4 bg-gray-200 rounded">
                <option value="">All</option>
                <option value=""></option>
            </select>
            <select className="px-4 py-2 mb-4 bg-gray-200 rounded">
                <option value="">All</option>
                <option value=""></option>
            </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productos?.map((producto) => (
                <CardProducto key={producto.id} name={producto.name} marca={producto.marca} image={producto.img} precio={producto.precio} />
            ))}
        </div>
    </div>
        </>
    );
    
};