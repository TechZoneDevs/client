'use client'
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Prueba(){
    const value = usePathname();
    console.log(value);

    return(
        <h1>
            Hello from Prueba
        </h1>
    );
};