import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { montserrat, inter } from "./ui/fonts";
import styles from './landing.module.css';

export default function Home() {
  return (
    <div className = {styles.holeContainer}>
      <img src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6fe91322-e36d-4aca-8d83-41904f9e429f/df3kllr-32b45386-cb0b-4d18-8614-d9c5c5349294.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmZTkxMzIyLWUzNmQtNGFjYS04ZDgzLTQxOTA0ZjllNDI5ZlwvZGYza2xsci0zMmI0NTM4Ni1jYjBiLTRkMTgtODYxNC1kOWM1YzUzNDkyOTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wXPGXM3Wy0nOUVmXi1d-CT031ZTvMjTdTsvYShmMXTY'} alt = 'Banner' width = {1500} height = {400}/>

    </div>
  );
}
