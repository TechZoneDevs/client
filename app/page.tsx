'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { montserrat, inter } from "./ui/fonts";
import styles from './landing.module.css';



export default function Home() {
  const [state, setState] = useState(123);
  return (
    <div className = {styles.holeContainer}>
      <h1>{state}</h1>
      <h1>Hello from Home</h1>
      <p className = {`${montserrat.className} antialised`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cumque est neque beatae eum reprehenderit sapiente provident fuga similique distinctio, a ut accusamus laudantium corporis recusandae commodi ratione cupiditate. Eaque!</p>
      <Link href = {'/prueba'}>A Prueba</Link>
    </div>
  );
}
