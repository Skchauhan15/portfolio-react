import React from 'react'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Work from './Work'
import Contact from './Contact'

const HomePage = () => {
  return (
    <div className='homepage'>
        <Home/>
        <About></About>
        <Experience></Experience>
        <Work></Work>
        <Contact></Contact>

    </div>
  )
}

export default HomePage