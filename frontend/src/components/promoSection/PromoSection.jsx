import React from "react";
import PromoCard from "./PromoCard";
import "./promo-section.css";

export default function PromoSection() {
  return (
    <section className="promo-section py-5">
      <div className="container">

        {/* Centered grid wrapper: limits width so cards don't span full page */}
        <div className="promo-grid mx-auto">
          <div className="row g-4 justify-content-center align-items-stretch">

            {/* Use col sizes smaller than full width so two cards sit side-by-side */}
            <div className="col-12 col-md-6 col-lg-5 d-flex">
              <PromoCard
                badge="Flat 20% Discount"
                title="Purely Fresh <br/> Vegetables"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                image="/images/grocery-1.jpg"
                variant="light"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-5 d-flex">
              <PromoCard
                badge="Flat 25% Discount"
                title="Fresh Fruits, <br/> Pure Quality"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                image="/images/grocery-2.jpg"
                variant="bright"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
