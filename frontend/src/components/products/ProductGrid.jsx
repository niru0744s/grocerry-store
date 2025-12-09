import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import './product-grid.css';

/**
 * Props:
 *  - products: array of product objects
 *  - colsMinWidth: css min width for grid columns (default 220)
 */
export default function ProductGrid({ products = [], colsMinWidth = 220 }) {
    useEffect(()=>{
        console.log("all products - ",products);
    },[]);
  return (
    <section className="prod-grid-wrap">
      <div
        className="prod-grid"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${colsMinWidth}px, 1fr))` }}
      >
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
