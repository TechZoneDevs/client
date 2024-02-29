import React from 'react'
import logo from '@/public/logos/Logo TechZone.png'
import Image from 'next/image';
import styles from "./about.module.css";

const AboutWe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTecnologias}>
        <h3><span className={styles.spanHenry2}>Tecnologias utilizadas</span> en este proyecto</h3>
        <div>
          aca agregar imagenes de todas las tecnologias usadas
        </div>
      </div>
      <div className={styles.containerTech}>
        <div>
          <Image src={logo} alt='logo TechZone' />
        </div>
        <div>
          <div>
            <h2>Que es <span className={styles.spanHenry2}>TechZone</span>?</h2>
          </div>
          <p>Es un  <span className={styles.spanHenry2}>Ecommerce completo</span> realizado con un equipo de <span className={styles.spanHenry}>desarrolladores</span> egresados en <span className={styles.spanHenry}>soyHenry</span> con el fin de incorporar experiencia y tecnologias nuevas para incrementar nuestras <span className={styles.spanHenry}>oportunidades laborales</span> como desarrolladores a tiempo completo. Nos especializamos en <span className={styles.spanHenry2}>diversas tecnologías </span> y estamos comprometidos con la <span className={styles.spanHenry}>excelencia</span> en nuestro trabajo.</p>
        </div>
      </div>

      <div className={styles.container}>
        <div>
          <h2 className={styles.textInfo}>Informacion sobre cada uno de los desarrolladores de <span className={styles.spanHenry2}>TechZone</span>.</h2>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Aquiles</h3>
            <p>Información sobre Aquiles...</p>
          </div>
          <div className={styles.card}>
            <h3>Nico</h3>
            <p>Información sobre Nico...</p>
          </div>
          <div className={styles.card}>
            <h3>Leo</h3>
            <p>Información sobre Leo...</p>
          </div>
          <div className={styles.card}>
            <h3>Nahu</h3>
            <p>Información sobre Nahu...</p>
          </div>
          <div className={styles.card}>
            <h3>Maxi</h3>
            <p>Información sobre Maxi...</p>
          </div>
          <div className={styles.card}>
            <h3>Jano</h3>
            <p>Información sobre Jano...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutWe