import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Hero.css";

/**
 * Props:
 * - headline: main heading (can include <span> tags for color)
 * - subhead: paragraph below
 * - ctaText: primary CTA
 * - secondaryText: secondary link text
 * - heroImg: path to image (public or imported)
 * - rating: numeric rating shown
 */
export default function Hero({
  headline = `Your One-Stop Shop for <span class="text-green">Quality Groceries</span>`,
  subhead = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`,
  ctaText = "Shop Now",
  secondaryText = "View All Products",
  heroImg = "/images/heroImg.png",
}) {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(10,10,10,0.06), rgba(10,10,10,0.02)), url(${heroImg})`,
  };
  return (
    <header className="hero-banner position-relative">
      <div className="hero-bg" style={bgStyle} aria-hidden="true"></div>

      <div className="container position-relative">
        <div className="row align-items-center gy-4">

          {/* LEFT TEXT — overlayed on background */}
          <div className="col-12 col-lg-6">
            <div className="hero-content text-block">
              <div className="badge-pill d-inline-flex align-items-center mb-3">
                <ShoppingBagIcon className="me-2 small-icon" />
                <span>The Best Online Grocery Store</span>
              </div>

              <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: headline }} />

              <p className="lead text-muted max-700">{subhead}</p>

              <div className="mt-4 d-flex align-items-center gap-3 flex-wrap">
                <a href="#" className="btn btn-success btn-lg rounded-pill d-inline-flex align-items-center gap-2">
                  {ctaText} <ArrowForwardIcon fontSize="small" />
                </a>

                <a href="#" className="text-decoration-underline text-dark">
                  {secondaryText}
                </a>
              </div>

              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="avatar-stack">
                  <img src="/images/avatars/a1.jpg" alt="a1" />
                  <img src="/images/avatars/a2.jpg" alt="a2" />
                  <img src="/images/avatars/a3.jpg" alt="a3" />
                </div>
                <div>
                  <div className="fw-bold">4.8 Ratings+</div>
                  <div className="text-muted small">Trusted by 75k+ Customers</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT is intentionally empty — background contains the image. */}
          <div className="col-12 col-lg-6 d-none d-lg-block">
            {/* keep column to preserve two-column layout on large screens */}
          </div>

        </div>
      </div>

      {/* small badges that appear on top of the background */}
      <div className="hero-floating-badges">
        <div className="hero-badge hero-badge--secure d-flex align-items-center">
          <LockIcon className="me-2 small-icon" />
          <span>Secure Payment</span>
        </div>

        <div className="hero-badge hero-badge--delivery d-flex align-items-center">
          <LocalShippingIcon className="me-2 small-icon" />
          <span>Fast Delivery</span>
        </div>
      </div>
    </header>
  );
}
