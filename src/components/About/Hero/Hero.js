import React from 'react'
import Navbar from '../../Navbar/Navbar';
import './Hero.scss';
import heroBg from '../../../assets/about-page-hero.jpg'


function Hero() {
  return (
    <div className="about-page">
      <Navbar></Navbar>
      <img className="about-hero-bg" src="https://humanresourcesonline-assets.b-cdn.net/article_images/office-decor-mistakes-you-might-be-making-that-are-impacting-your-employee-s-mental-wellbeing/1730253010_Arina_Oct_2024_Office_Decor_Environment_Mistakes_123rf.jpg" alt="" />
      <div className='about-hero'>

        <div className="about-hero-content">
          <h4>
            <span>
              Home

            </span>
            <span className='delimeter'></span>
            <span>

              About
            </span>
          </h4>
          <h1>About</h1>
        </div>


      </div>
    </div>
  )
}

export default Hero