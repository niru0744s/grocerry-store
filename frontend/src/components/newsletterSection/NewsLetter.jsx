import React from 'react'
import './NewsLetter.css';

export default function NewsLetter() {
  return (
    <div className='row'>
      <div className='col-2'></div>
      <div className='col text-center'>
        <p className='fw-bold'>Our Newsletter</p>
        <h1>Subscribe to Our Newsletter to <br />
        Get <span className="text-success">Updates on Our Latest Offers</span>
        </h1>
        <form className="newsletter-wrapper" onSubmit={(e) => e.preventDefault()}>

      <div className="input-row">
        <label htmlFor="newsletter-email" className="visually-hidden">Email</label>
        <input
          id="newsletter-email"
          type="email"
          className="form-control email-input"
          placeholder="Enter Email Address"
          required
          aria-label="Email address"
        />

        <button type="submit" className="btn subscribe-btn">
          Subscribe
        </button>
      </div>
    </form>
        </div>
      <div className='col-2'></div>
    </div>
  )
}
