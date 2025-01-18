import React from 'react'
import './Media.css'
const Media = () => {
  return (
    <section class="section-media">
    <div class="media-main-div">
        <h3>Why Trust <span>AMT MEDIA?</span></h3>
        {/* cards main div */}
        <div class="media-outer-div">

            {/* card one */}
            <div class="media-card-one">
                <div></div>
                <div>
                <h4>Proven Track Record</h4>
                <p>With 8 years in business and a niche focus on real estate, we have mastered what works. Our strategies are not just about creating content—they’re designed to convert, directly contributing to sales and profit.</p>
                </div>
            </div>

            {/* card two */}
            <div class="media-card-one">
                <div></div>
                <div>
                <h4>Understanding Your World</h4>
                <p>Your business isn’t just transactions; 
                it’s about building lasting relationships. Our content strategy is geared to keep you top of mind with your clients, reinforcing your success  in both the digital realm and local community.</p>
                </div>
            </div>

            {/* card three */}
            <div class="media-card-one">
            <div></div>
                <div>
                <h4>A Partnership That Cares</h4>
                <p>Beyond the lens and editing software, we 
                care about your growth. Our clients appreciate not just the end product but the journey there feeling supported, celebrated, and understood.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Media
