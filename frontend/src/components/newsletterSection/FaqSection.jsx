import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./faq.css";

const FAQS = [
  { q: "Are the products fresh and of high quality?", a: "Yes — we source from trusted suppliers. All fresh produce is checked daily and packaged with care. If you ever receive a product you are not satisfied with, contact support and we will make it right." },
  { q: "What are your delivery hours?", a: "We deliver Monday to Saturday, 8:00 AM — 8:00 PM. Delivery slots depend on your pin code and current availability. You can choose available slots during checkout." },
  { q: "What payment methods do you accept?", a: "We accept major credit/debit cards, UPI, net banking, and popular wallets. Cash on delivery is available in selected areas." },
  { q: "Do you offer any discounts or promotions?", a: "Yes — we run seasonal promotions, first-time-user discounts, and loyalty offers. Check the homepage or your account inbox for latest deals." },
  { q: "How can I provide feedback about my experience?", a: "You can leave feedback on the order page, email us at feedback@example.com, or contact support via WhatsApp." }
];

export default function FaqSectionMui() {
  const [openIndex, setOpenIndex] = useState(1); // open second by default

  const toggle = (idx) => setOpenIndex(prev => (prev === idx ? null : idx));

  return (
    <section className="faq-section">
      <div className="container">
        <div className="text-center mb-4">
          <small className="text-muted">News & Blogs</small>
          <h2 className="faq-title">Our Latest <span className="highlight-green">News & Blogs</span></h2>
        </div>

        <div className="faq-list mx-auto">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>

                <button
                  className="faq-question d-flex align-items-center justify-content-between"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="question-text">{item.q}</span>

                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                  </span>
                </button>

                {/* MUI Collapse handles the animation of height smoothly */}
                <Collapse in={isOpen} timeout={300} collapsedSize={0}>
                  <div className="faq-answer"
                  style={{ willChange: "height, opacity", transition: "opacity 220ms ease" }}
                  >
                    {item.a}
                  </div>
                </Collapse>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
