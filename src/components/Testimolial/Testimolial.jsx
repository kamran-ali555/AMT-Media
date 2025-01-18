import React from 'react'
import './Testimonial.css'

const Testimolial = () => {
  return (
    <section class="testimonial-section">
                {/*cards main div */}
        <div class="testimonial-main-div">
              {/* cards flex div one */}
            <div class="testimonial-inner-div-one">
                <div class="testimonial-card-one">
                    <h4>“Rising star in the creative industry”</h4>
                    <p>Alex (and AMT MEDIA) is a rising star in the creative industry, especially in the real estate market. He has helped tremendously in building my online brand on social media platforms. I highly recommend working with him!</p>
                    <div>
                        <img src="./images/testimmnial-img1.png" alt="img" />
                        <div>
                            <h5>Murdock Richard</h5>
                            <p>Lower Financial</p>
                        </div>

                    </div>
                </div>

                {/* card two */}
                <div class="testimonial-card-two">
                    <h5>--- Testimonials</h5>
                    <h4>Don't take our word for it, take theirs</h4>
                </div>
            </div>

                {/* cards flex div two */}
            <div className="testimonial-inner-div-two">
            {/* card three */}
            <div class="testimonial-inner-div-one">
                <div class="testimonial-card-one">
                    <h4>“So happy with the results”</h4>
                    <p>I’m so happy with the results and with the fantastic job Alex and his team provides for me. Thank you so much!</p>
                    <div>
                        <img src="./images/testimmnial-img1.png" alt="img" />
                        <div>
                            <h5>Leen Abusaad </h5>
                            <p>Ebby Halliday </p>
                        </div>

                    </div>
                </div>

                {/* card foure */}
                <div class="testimonial-card-one">
                    <h4>“Highly recommend AMT MEDIA”</h4>
                    <p>Alex cares about his clients and is willing to try new things and strategies. I’d highly recommend AMT MEDIA if you want a long-term organic growth strategy for social media/marketing!</p>
                    <div>
                        <img src="./images/testimmnial-img1.png" alt="img" />
                        <div>
                            <h5>Brad Piper</h5>
                            <p>Lighthouse Estate</p>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Testimolial
