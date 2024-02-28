import React, { useState, useRef, useEffect } from 'react';
import styles from "./carrousel.module.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';

const Carrousel = () => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [currentIndex, setCurrentIndex ] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imagenNode = listNode?.querySelectorAll("li > img")[currentIndex];
    if (imagenNode) {
      imagenNode.scrollIntoView({
        behavior: 'smooth'
      });
    };

  }, [currentIndex]);

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

  const scrollToImage = function(direction: string){
    if(direction == 'prev'){
      setCurrentIndex(current => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : current -1;
      });
    } else {
      const isLastSlite = currentIndex === images.length - 1;
      if (!isLastSlite){
        setCurrentIndex( curr => curr + 1);
      }
    }

  }
  const goToSlide = function(index: number){
    setCurrentIndex(index);
  }


  return (
    <div className={styles.mainContainer}>
      <div className = {styles.sliderContainer}>
        <div className = {styles.leftArrow} onClick = {() => scrollToImage('prev')}><ArrowBackIosNewIcon /></div>
        <div className = {styles.rightArrow} onClick = {() => scrollToImage('next')}><ArrowForwardIosIcon /></div>
        <div className = {styles.imagesContainer}>
        <ul ref= {listRef}> 
        {images.map((element) => {
          return <li key = {element.id}>
            <img src = {element.img} className = {styles.image} alt = 'banner'/>
          </li>
        })}
        </ul>
          
        </div>
        <div className = {styles.dotsContainer}>
          { images.map((_, index: number) => (
            <div className = {styles.dot} onClick = {() => goToSlide(index)} key = {index}>
              <CircleIcon sx = {{ height: '10px', cursor: 'pointer'}}/>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Carrousel