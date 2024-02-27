'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { montserrat, inter } from "./ui/fonts";
import styles from './landing.module.css';
import banner from '../public/logos/bannerGif.gif'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useGetUsersQuery } from "@/redux/services/getUser";
import CardsCategory from "./ui/cardscategory/Cardscategory";
import CardsGenerales from "./ui/cardsCategoryGeneral/CardsCategory";
import NavBar from "./ui/navbar/NavBar";
import Footer from "./ui/footer/Footer";
import CardsProductos from "./ui/cardsProductosMuestra/cardsProductosMuestra";
import Carrousel from "./ui/carrousel/Carrousel";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter)
  const dispatch = useAppDispatch()

  //const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

//  if (isLoading || isFetching) return <p>loading...</p>;
//  if (error) return <p>some error</p>;

const images: string[] = [
  'https://pcstore.com.uy/wp-content/uploads/slider/cache/30fd4e3092cf5a3a8c739cc5c984c53e/pcgamerbanner-scaled.webp',
  'https://res.cloudinary.com/corsair-pwa/image/upload/v1680719491/akamai/TLC/Global/gaming-pcs-banner_ICUE-CERTIFIED.webp',
  'https://about.att.com/ecms/dam/snr/2020/November2020/StoryLevelBanner/11042020_iPhoneProMax_STORY_LEVEL_BANNER_1600x483.jpg',
];

interface CarouselProps {
  images: string[];
}

  return (
    <div className = {styles.holeContainer}>
      <NavBar />
      <div className={styles.divOne}>
  <p className={styles.texto}>Bienvenido a TechZone, la zona más tecnológica que existe.</p>
  <div>
  <button className={styles.boton1}><a href="#category">Categorias</a></button>
  <button className={styles.boton2}><a href="./subhtml/login.html">About</a></button>
</div>
</div>
      <div id="category" className = {styles.divCategorias}>
        <CardsGenerales/>
      </div>
      <div className = {styles.divCategorias2}>
        <CardsProductos/>
      </div>
      {/* Agregar Carrousel de imagenes(Banners) */}
      <div className = {styles.divCategorias}>
      <Carrousel images={images} />
    </div>
    <div className = {styles.divCategorias}>
      <CardsCategory />
      </div>

      {/* <h2>{count}</h2>
    <button onClick={()=>{
      dispatch(increment())
    }}>
      increment

    </button>
    <button onClick={()=>{
      dispatch(decrement())
    }}>
      decrement
    </button> */}
    <Footer />
    </div>
  );
}
