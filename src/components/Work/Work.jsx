import React from "react";
import "./style.css";

const Work = () => {
  return (
        <section class="work-section">
          {/* outer div */}
            <div class="work-outer-div">
              
              {/* inner div one */}
              <div className="work-inner-div-one">
                <h1>8+</h1>
                <p>Years Experience</p>
              </div>

              {/* inner div two */}
              <div className="work-inner-div-one">
                <h1>87%</h1>
                <p> Average Increase in Social <br/> Media Engagement</p>
              </div>

              {/* inner div three */}
              <div className="work-inner-div-one">
                <h1>120+b</h1>
                <p>Clients</p>
              </div>

              {/* inner div four */}
              <div className="work-inner-div-one">
                <h1>48%</h1>
                <p>Average Increase in Sales</p>
              </div>
            </div>
        </section>
  );
};

export default Work;
