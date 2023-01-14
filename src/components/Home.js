import React from 'react';
import styles from './Home.module.css';
import image from '../assests/Picsart_23-01-02_06-13-40-230.png'

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textsection}>
        <div className={styles.subheading}><span className='maincolor'>Hi, </span>My Name is</div>
         <div className='heading'><span className='maincolor'>SUMIT KUMAR</span></div>
         <div className={styles.subheading}> and I am a <span className='maincolor'>MERN Developer </span></div>
      </div>
      <div className={styles.imagesection}>
          <img src={image} alt="Hello"></img></div>
    </div>
  )
}

export default Home