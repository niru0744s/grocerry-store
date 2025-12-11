import React from "react";
import "./categories.css";

/**
 * You can supply either:
 *  - image: "/categories/categories/veg.svg"  (best: put SVG or PNG in public/images/categories)
 *  - icon: a React element (Material UI icon)
 *
 * Example usage below the component file.
 */

const CATEGORIES = [
  { id: 1, label: "Vegetables", count: "120 Products", image: "/images/categories/vegetable.svg" },
  { id: 2, label: "Fresh Fruits", count: "85 Products", image: "/images/categories/fruits.svg" },
  { id: 3, label: "Milk & Eggs", count: "32 Products", image: "/images/categories/milk.svg" },
  { id: 4, label: "Bakery", count: "21 Products", image: "/images/categories/bakery.svg" },
  { id: 5, label: "House Hold", count: "47 Products", image: "/images/categories/household.svg" },
  { id: 6, label: "Dry Fruits", count: "15 Products", image: "/images/categories/dryfruits.svg" },
  // add more if needed
];

export default function Categories({ categories = CATEGORIES }) {
  return (
    <section className="category-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          <small className="text-muted">Categories</small>
          <h2 className="section-title">Featured <span className="highlight">Categories</span></h2>
        </div>

        {/* Grid - responsive */}
        <div className="category-grid-wrapper">
          <div className="row g-3 justify-content-center align-items-start">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              >
                <div className="category-card text-center">
                  <div className="category-icon">
                    {cat.image ? (
                      <img src={cat.image} alt={cat.label} loading="lazy" />
                    ) : (
                      <div className="category-icon-fallback" aria-hidden="true" />
                    )}
                  </div>

                  <div className="category-meta mt-3">
                    <div className="category-label">{cat.label}</div>
                    <div className="category-count text-muted">{cat.count}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
