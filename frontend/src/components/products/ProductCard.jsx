import React from 'react';

/**
 * product: {
 *  id, name, price, desc, img (url), badge (optional)
 * }
 */
export default function ProductCard({ product }) {
  return (
    <article className="prod-card" aria-labelledby={`p-${product.id}`}>
      <div className="prod-media">
        {product.badge && <span className="prod-badge">{product.badge}</span>}
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="prod-img"
        />
      </div>

      <div className="prod-body">
        <h3 id={`p-${product.id}`} className="prod-title">{product.name}</h3>
        {product.desc && <p className="prod-desc">{product.desc}</p>}
        <div className="prod-row">
          <div className="prod-price">₹{product.price}</div>
          {/* Visual-only: no buttons */}
        </div>
      </div>
    </article>
  );
}
