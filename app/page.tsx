'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';


export default function Home() {
  const [state, setState] = useState(123);
  return (
    <div>
      <h1>{state}</h1>
      <h1>Hello from Home</h1>
      <Link href = {'/prueba'}>A Prueba</Link>
    </div>
  );
}
