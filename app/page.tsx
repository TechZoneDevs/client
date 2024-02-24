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
import NavBar from "./ui/navbar/NavBar";
import Footer from "./ui/footer/Footer";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter)
  const dispatch = useAppDispatch()

  //const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

//  if (isLoading || isFetching) return <p>loading...</p>;
//  if (error) return <p>some error</p>;

  return (
    <div className = {styles.holeContainer}>
      <NavBar />
      <div className ={styles.divOne}>

      </div>
      {/* <Image src={banner} alt = 'Banner' width = {1150} height = {400}/> */}
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
