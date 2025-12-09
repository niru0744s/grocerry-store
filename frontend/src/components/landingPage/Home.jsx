import React from 'react'
import Hero from '../heroSection/Hero'
import bgImage from '../../assets/hero.png';
import {PRODUCTS} from '../../data/products';
import ProductGrid from '../products/ProductGrid';
export default function Home() {
    console.log(PRODUCTS);
  return (
    <div>
      <Hero bgImage={bgImage}/>
      <section style={{ paddingTop: 18 }}>
        <h2 style={{ textAlign: 'center', marginTop: 0 }}>Top Milk Shakes</h2>
        <p style={{ textAlign: 'center', color: '#6b5957' }}>Explore The Most Bought Shakes This Week</p>

        <ProductGrid products={PRODUCTS} colsMinWidth={220} />
      </section>
    </div>
  )
};