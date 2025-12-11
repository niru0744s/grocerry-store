import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./promo-card.css";

export default function PromoCard({
  badge,
  title,
  subtitle,
  image,
  variant = "light", // "light" or "bright"
  ctaText = "Shop Now",
  ctaLink = "#",
}) {
  return (
    <div
      className={`promo-bg-card position-relative rounded-4 overflow-hidden d-flex align-items-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for better contrast */}
      <div className={`promo-overlay ${variant}`}></div>

      {/* TEXT AREA */}
      <div className="position-relative text-container">
        {/* Badge */}
        <div className="badge-container">
          <span className="promo-badge px-4 py-2 rounded-pill fw-semibold">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h2
          className="fw-bold promo-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Subtitle */}
        <p className="text-muted promo-sub mb-4">{subtitle}</p>

        {/* CTA Button */}
        <a href={ctaLink} className="btn btn-success rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2">
          {ctaText} <ArrowForwardIcon fontSize="small" />
        </a>
      </div>
    </div>
  );
}
