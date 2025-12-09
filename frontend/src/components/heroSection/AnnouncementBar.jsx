import React from 'react';
import './announcement.css';

export default function AnnouncementBar({
  text = 'Welcome to SS CRACKERS Shop 80% Discount Live. Account details: Gpay - 8144443276, 8098626285.',
  bg = '#c62828',
  color = '#fff',
  speed = 18
}) {
  return (
    <div
      className="ann-bar"
      style={{ background: bg, color }}
    >
      <div
        className="ann-inner"
        style={{ ['--marquee-duration']: `${speed}s` }}
      >
        {/* Duplicate text twice for seamless loop */}
        <span className="ann-text">{text} • </span>
        <span className="ann-text">{text} • </span>
      </div>
    </div>
  );
}
