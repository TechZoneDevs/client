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
import AboutWe from "./ui/about/AboutWe";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter)
  const dispatch = useAppDispatch()

  //const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

//  if (isLoading || isFetching) return <p>loading...</p>;
//  if (error) return <p>some error</p>;





  return (
    <div className = {styles.holeContainer}>
      <NavBar />
      <div className={styles.divOne}>
  <p className={styles.texto}>Bienvenido a TechZone, la zona más tecnológica que existe.</p>
  <div>
  <button className={styles.boton1}><a href="#category">Categorias</a></button>
  <button className={styles.boton2}><a href="./subhtml/login.html">Nosotros</a></button>
</div>
</div>
      <div id="category" className = {styles.divCategorias}>
        <CardsGenerales/>
      </div>
      <div className = {styles.divCategorias2}>
        <CardsProductos/>
      </div>
      {/* Agregar Carrousel de imagenes(Banners) */}
      <div className = {styles.divCategoriasCarrusel}>
      <Carrousel />
    </div>
  <div className={styles.divCategorias3}>
    <CardsCategory />
  </div>
  <div className="lineaDiagonalContainer">
    <div className="lineaDiagonal"></div>
  </div>
  <div className={styles.divAbout}>
    <AboutWe />
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
