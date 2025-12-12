import React from 'react'
import Hero from '../heroSection/Hero'
import bgImage from '../../assets/hero.png';
import {PRODUCTS} from '../../data/products';
import ProductGrid from '../products/ProductGrid';
import Categories from '../categorySection/Categories';
import PromoSection from '../promoSection/PromoSection';
export default function Home() {
    console.log(PRODUCTS);
  return (
    <div>
      <Hero bgImage={bgImage}/>
      <Categories/>
      <section style={{ paddingTop: 16 , paddingBottom: 10, backgroundColor:"#d9dedbff" }}>
        {/* <PromoSection/> */}
        <ProductGrid products={PRODUCTS} colsMinWidth={220} />
      </section>
    </div>
  )
};