import React from 'react';
import styles from './CarrouselTwo.module.css';
import { useState, useEffect, useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CircleIcon from '@mui/icons-material/Circle';

export default function CarrouselTwo(){
    const [ slide, setSlide ] = useState(0);

    const images = [
        {
          id: 1,
          img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1709065707/gaming-pcs-banner_ICUE-CERTIFIED_u7iiww.webp'
        },
        {
          id: 2,
          img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1709065875/razer-brand-banner_rhgfqp.jpg'
        },
        {
          id: 3,
          img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1709065874/Banner-Corsair_lo7guo.jpg'
        },
        {
          id: 4,
          img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1709065706/11042020_iPhoneProMax_STORY_LEVEL_BANNER_1600x483_etzjyz.jpg'
        },
        {
          id: 5,
          img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1709066043/gnp-20super-2560_r1i44o.jpg'
        },
        {
          id: 6,
          img: 'https://res.cloudinary.com/diswtvj50/image/upload/v1709066044/key_bg_sqajgy.jpg'
        }
      ];
      interface imagesProps{
        images:{
          id: number;
          img: string;
        };
      };

      const nextSlide = function(){
        setSlide(slide === images.length - 1 ? 0 : slide + 1);
      }

      const prevSlide = function(){
        setSlide(slide === 0 ? images.length - 1 : slide - 1);
      }

    return(
        <div className = {styles.holeContainer}>
            <ArrowBackIosNewIcon sx = {{position: 'absolute', width: '2rem', height: '2rem', color: 'white', left: '1rem', cursor: 'pointer'}} onClick = {prevSlide}/>

            {images.map((item, idx) => {
                return <img src = {item.img} key = {item.id} alt = 'banner' className = {slide == idx ? styles.slide : styles.slideHidden}/>
            })}
            <ArrowForwardIosIcon sx = {{position: 'absolute', width: '2rem', height: '2rem', color: 'white', right: '1rem', cursor: 'pointer'}} onClick = {nextSlide}/>
            <span className = {styles.indicators}>
                {images.map((item, index) => {
                    return <div onClick = {() => setSlide(index)}className = {slide == index ? styles.indicator : styles.indicatorHidden}><CircleIcon key = {index} sx  = {{height: '10px', width: '10px', cursor: 'pointer',}}/></div>
                })}
            </span>

        </div>
    )
}