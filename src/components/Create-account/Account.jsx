import React from 'react'
import './Account.css'

const Account = () => {
  return (
    <section class="account-section">
        {/* main div account section */}
        <div className="main-div-account-section">
            <div className="create-account">
                <h4>Ready to Transform Your Brand?</h4>
                <p>It's time to translate your real estate acumen into a powerful digital footprint. Join us at AMT MEDIA, where your aspirations meet our expertise. Your next step? A simple call or email to get the ball rolling.</p>
                <button><a href="#">Get Started</a></button>
            </div>
            <div className="create-account-image">
                <img src="./images/createaccount.png" alt="img" />
            </div>
        </div>
    </section>
  )
}

export default Account
