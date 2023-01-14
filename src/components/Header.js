import React, { useState } from 'react'
import {NavLink } from 'react-router-dom';

const Header = () => {

  const [show, setshow] = useState('hide');
  const clickhandler=(e)=>{
    if(show==='hide'){
      setshow('flexcol');
    }
    else if(show==='flexcol'){
      setshow("hide");
    }
  }
  return (
    <header className='flexrow'>
        <div className='name'>
         Portfolio
        </div>
        <ul className='flexrow1'>
                <li><NavLink className='links' to='/'>HOME</NavLink></li>
                <li><NavLink className='links' to='/about'>ABOUT ME</NavLink></li>
                <li><NavLink className='links' to='/contact'>CONTACT</NavLink></li>
                <li><NavLink className='links' to='/experience'>EXPERIENCE</NavLink></li>
                <li><NavLink className='links' to='/work'>WORK</NavLink></li>
        </ul>
      <div className='barbutton' onClick={clickhandler}><i className="fa-solid fa-bars"></i></div>
        <ul className={show} onClick={clickhandler}>
                <li><NavLink className='links' to='/'>HOME</NavLink></li>
                <li><NavLink className='links' to='/about'>ABOUT ME</NavLink></li>
                <li><NavLink className='links' to='/contact'>CONTACT</NavLink></li>
                <li><NavLink className='links' to='/experience'>EXPERIENCE</NavLink></li>
                <li><NavLink className='links' to='/work'>WORK</NavLink></li>
      </ul>
    </header>
  )
}

export default Header