
import React from 'react'
import'./index.css'

const Navbar = () => {
  return (
   <header class="header-section">
    <nav class="navbar">
        {/* main-div */}
        <div  class="nav-outer-div">
            {/* inner div one */}
            <div>
                <span><img class="img" src="./images/logo.png" width="168px" height="75px" alt="img" /></span>
            </div>
            {/* inner div two */}
            <div>   
                <ul class="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            {/* inner div two */}
            <div>
            <button class="nav-btn" ><a href="#">Talk to Us Today</a></button>
            </div>
        </div>
    </nav>
    {/* hero section */}
    <section class="hero-section">
        {/* outer div */}
        <div class="outer-div">
          {/* inner div one */}
            <div class="inner-div-one" >
            <div>
            <h1>Elevate Your <span class="heading-red">Real Estate Brand</span> with Professional Video Content</h1>
            <p>In the bustling world of real estate, where every closing is a celebration and your brand is your legacy, it's time to revolutionize the way you connect with your audience.</p>
          </div>
          <div>
            <button class="hero-btn"><a href="#">Get Started</a></button>
          </div>
            </div>
            {/* inner div two */}
          <div class="inner-div-two">
          <img  src="./images/hero-img.png" alt="img" />
          <img class="frame"  src="./images/frame.png" alt="img" />
          </div>
        </div>
    </section>
   </header>
  )
}

export default Navbar
