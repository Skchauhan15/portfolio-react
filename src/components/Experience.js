import React from 'react'
import styles from './Experience.module.css'
import htmllogo from'../assests/html.png';
import csslogo from'../assests/css.png';
import expresslogo from "../assests/express.png"
import jslogo from'../assests/js.png';
import mongologo from'../assests/mongo.png';
import nodelogo from'../assests/nodejs.png';
import reactlogo from'../assests/react.png';
import sqllogo from'../assests/sql.png';

const Experience = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>Experience</div>
      <div className={styles.text2}>These are the technologies I've worked with</div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={htmllogo} alt='htmllog'></img>
        </div>
        <div className={styles.logo}>
          <img src={csslogo} alt='csslogo'></img>
        </div>
        <div className={styles.logo}>
          <img src={jslogo} alt='jslogo'></img>
        </div>
        <div className={styles.logo}>
          <img src={reactlogo} alt='reactlogo'></img>
        </div>
        <div className={styles.logo}>
          <img src={nodelogo} alt='nodelogo'></img>
        </div>
        <div className={styles.logo}>
          <img src={expresslogo} alt='expresslogo'></img>
        </div>
        <div className={styles.logo}>
          <img src={sqllogo} alt='sqllogo'></img>
        </div>
        <div className={styles.logo}>
          <img src={mongologo} alt='mongologo'></img>
        </div>
      </div>
    </div>
  )
}

export default Experience