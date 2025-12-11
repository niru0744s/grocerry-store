import React from "react";
import "./featuresGallery.css";

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

/**
 * Replace the image paths in `galleryImages` with your actual images
 * (local imports or URLs). Example:
 * import g1 from '../assets/g1.jpg'
 * then use g1 in the array.
 */
const galleryImages = [
  "/images/grocery-1.jpg",
  "/images/grocery-2.jpg",
  "/images/grocery-3.jpg",
  "/images/grocery-4.jpg",
  "/images/grocery-5.jpg",
];

export default function FeaturesGallery() {
  return (
    <section className="features-gallery-section">
      <div className="container">

        {/* Features row */}
        <div className="row features-row align-items-center text-center gx-4 gy-3">
          <div className="col-12 col-md-4">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <LocalShippingIcon className="feature-icon" />
              </div>
              <div className="feature-content">
                <h5 className="feature-title">Free Shipping</h5>
                <p className="feature-sub">Free shipping for order above ₹3000/-</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <PaymentIcon className="feature-icon" />
              </div>
              <div className="feature-content">
                <h5 className="feature-title">Flexible Payment</h5>
                <p className="feature-sub">Multiple secure payment options</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="feature-card">
              <div className="feature-icon-wrap">
                <HeadsetMicIcon className="feature-icon" />
              </div>
              <div className="feature-content">
                <h5 className="feature-title">24×7 Support</h5>
                <p className="feature-sub">We support online all days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery row */}
        <div className="gallery-row mt-4 mt-md-5">
          <div className="gallery-strip">
            {galleryImages.map((src, i) => (
              <div key={i} className="gallery-tile">
                <img src={src} alt={`gallery-${i}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
