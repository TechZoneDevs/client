import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { montserrat, inter } from "./ui/fonts";
import styles from './landing.module.css';
import banner from '../public/logos/bannerGif.gif'

export default function Home() {
  return (
    <div className = {styles.holeContainer}>
      <Image src={banner} alt = 'Banner' width = {1150} height = {400}/>

    </div>
  );
}
