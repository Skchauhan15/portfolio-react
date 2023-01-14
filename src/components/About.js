import React from 'react';
import styles from './About.module.css';
// import image from '../assests/IMG_20230104_003443.jpg'
import image from '../assests/dp.jpg'
const About = () => {
  return (
    <div className={styles.main}>
       <div className={styles.image}><img src={image} alt='profile'></img></div>
        <div className={styles.right}>
          <div className={styles.subheading}>ABOUT ME</div>
          <br/>
          <div className={styles.para}>I am Sumit, nice to meet you,
          please take a look around!</div>
          <br/>
          <div>Currently persuing the MERN STACK Developer course at Edyoda Digital University </div>
          <br/>
          <div className={styles.subheading}>Skills</div>
          <br/><ul>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
          <li>NODE JS</li>
          <li>EXPRESS JS</li>
          <li>MYSQL</li>
          <li>MONGO DB</li>
          </ul>
        </div>
       
    </div>
  )
}

export default About