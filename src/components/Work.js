import React from 'react';
import styles from './Work.module.css';
import reactpanel from '../assests/reactdashboard.png';
import kafen from'../assests/Screenshot (346).png';
import shoppane from'../assests/Screenshot (343).png';
import nukk from'../assests/Screenshot (344).png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; 


const Work = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>Work</div>
      <div className={styles.grid}>
      <Carousel autoPlay infiniteLoop>
                <div>
                    <img src={reactpanel} alt='reactpanel'/>
                    <p className="legend"><a href='https://admin-panel-1c84c.web.app/'>React:Admin Panel</a></p>
                </div>
                <div>
                    <img src={kafen} alt='kafen'/>
                    <p className="legend"><a href='https://skchauhan15.github.io/final-project/'>Kafen Store Admin Panel</a></p>
                </div>
                <div>
                    <img src={shoppane} alt='shoppane'/>
                    <p className="legend"><a href='https://skchauhan15.github.io/jsproject/'>ShopPane</a></p>
                </div>
                <div>
                    <img src={nukk} alt='nukk'/>
                    <p className="legend"><a href='https://codepen.io/skchauhan/pen/OJZZwRg'>Nukk</a></p>
                </div>
            </Carousel>
            </div>
    </div>
  )
}

export default Work
