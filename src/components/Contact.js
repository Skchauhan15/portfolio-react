import React from 'react'
import styles from './Contact.module.css'
import {Link} from 'react-router-dom';

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1> CONTACT WITH ME</h1>
        <div><i className="fa-solid fa-envelope"></i>   skchauhan15101996@gmail.com</div>
        <div> <i className="fa-solid fa-phone"></i>    +91-8534851745</div>
        <div> <i className="fa-brands fa-github"></i>  https://github.com/Skchauhan15  </div>
        <div> <i className="fa-brands fa-linkedin"></i>    https://www.linkedin.com/in/sumit-kumar-86710a170/ </div>
        <Link to="/files/sumitResume.pdf" target="_blank" download><button>Download CV</button></Link>
      </div>
      <div className={styles.right}>
        <form action="https://formspree.io/f/xayzykdy" method='POST'>
        <input type='text' name='name' placeholder="Your Name" required autoComplete='off'></input>
        <input type='email' name='email' placeholder="Your Email" required autoComplete='off'></input>
        <textarea  name='msg' placeholder="Your Message" autoComplete='off'></textarea>
        <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact