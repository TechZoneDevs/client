'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { montserrat, inter } from "./ui/fonts";
import styles from './landing.module.css';
import banner from '../public/logos/bannerGif.gif'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment } from "@/redux/features/counterSlice";

export default function Home() {
  const count = useAppSelector(state => state.counterReducer.counter)
  const dispatch = useAppDispatch()

  return (
    <div className = {styles.holeContainer}>
      <Image src={banner} alt = 'Banner' width = {1150} height = {400}/>
      <div className = {styles.pruebaColor}>
        <h1>
          Color Prueba
        </h1>
      </div>
      <h2>{count}</h2>
    <button onClick={()=>{
      dispatch(increment())
    }}>
      increment

    </button>
    <button onClick={()=>{
      dispatch(decrement())
    }}>
      decrement
    </button>
    </div>
  );
}
