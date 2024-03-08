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
import CardsCategory from "./ui/cardscategory/cardscategory";
import CardsGenerales from "./ui/cardsCategoryGeneral/CardsCategory";
import NavBar from "./ui/navbar/NavBar";
import Footer from "./ui/footer/Footer";
import CardsProductos from "./ui/cardsProductosMuestra/cardsProductosMuestra";
import Carrousel from "./ui/carrousel/Carrousel";
import AboutWe from "./ui/about/aboutWe";
import CarrouselTwo from "./ui/carrouselTwo/CarrouselTwo";
import Login from "./ui/login/login";

export default function Home() {
  const [login, setLogin ] = useState(false);
  const count = useAppSelector(state => state.counterReducer.counter)

  return (
    <div className={styles.holeContainer}>
      <NavBar setLogin = {setLogin} login = {login}/>
      <div className={styles.divOne}>
        <div className = {styles.cuadroInfo}>
        <p className={`${montserrat.className}`} style = {{fontSize: '35px',  height: 'auto', fontWeight: '700', textAlign: 'center' }}>Bienvenido a Tech<span className = {styles.span1}>Zone</span></p>
        <p className={`${montserrat.className}`} style = {{fontSize: '28px',  height: 'auto', fontWeight: '400', textAlign: 'center' }}>Todos tus componentes <span className = {styles.span1} style = {{fontWeight: '600'}}>Tech</span> en un solo lugar</p>
        <div className = {styles.buttons}>
          <button className={styles.boton1}><a href="#category">Categorias</a></button>
          <button className={styles.boton2}><a href="./subhtml/login.html">Nosotros</a></button>
        </div>
        </div>
      </div>
      {login && <Login login = {login} setLogin = {setLogin}/>}
      <div id="category" className={styles.divCategorias}>
        <CardsGenerales />
      </div>
      <div className={styles.divCategorias2}>
        <CardsProductos />
      </div>
      <div className={styles.divCategoriasCarrusel}>
        <CarrouselTwo />
      </div>
      <div className={styles.divCategorias3}>
        <CardsCategory />
      </div>
      <div className={styles.divAbout}>
        <AboutWe />
      </div>
      <Footer />
    </div>
  );
}
