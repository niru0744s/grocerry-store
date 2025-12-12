import React from 'react';
import './NewsLetter.css';

export default function NewsLetter() {
  return (
    <section className="newsletter-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <p className="newsletter-subtitle fw-bold">Our Newsletter</p>

            <h2 className="newsletter-heading">
              Subscribe to Our Newsletter to
              <br />
              Get <span className="text-success">Updates on Our Latest Offers</span>
            </h2>

            <form
              className="newsletter-wrapper"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to newsletter"
            >
              <div className="input-row">
                <label htmlFor="newsletter-email" className="visually-hidden">
                  Email
                </label>

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
        </div>
      </div>
    </section>
  );
}
