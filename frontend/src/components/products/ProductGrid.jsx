import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    image: "/products/chocolate-box.jpg",
    title: "Chocolate Ball",
    category: "Snacks & Sweets",
    weight: "500 g",
    price: 25,
    oldPrice: 50,
    discount: "50% off",
    rating: 4.9,
  },
  {
    id: 2,
    image: "/products/brown-bread.jpg",
    title: "Brown Bread",
    category: "Bakery",
    weight: "200 g",
    price: 5,
    oldPrice: 10,
    discount: "50% off",
    rating: 5.0,
  },
  {
    id: 3,
    image: "/products/brown-bread.jpg",
    title: "Brown Bread",
    category: "Bakery",
    weight: "200 g",
    price: 5,
    oldPrice: 10,
    discount: "50% off",
    rating: 5.0,
  },
  {
    id: 4,
    image: "/products/brown-bread.jpg",
    title: "Brown Bread",
    category: "Bakery",
    weight: "200 g",
    price: 5,
    oldPrice: 10,
    discount: "50% off",
    rating: 5.0,
  },
  {
    id: 5,
    image: "/products/brown-bread.jpg",
    title: "Brown Bread",
    category: "Bakery",
    weight: "200 g",
    price: 5,
    oldPrice: 10,
    discount: "50% off",
    rating: 5.0,
  },
  {
    id: 6,
    image: "/products/brown-bread.jpg",
    title: "Brown Bread",
    category: "Bakery",
    weight: "200 g",
    price: 5,
    oldPrice: 10,
    discount: "50% off",
    rating: 5.0,
  },
  // add more...
];

export default function ProductGrid() {
  return (
    <section className="container my-5" id="menu">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <small className="text-muted">Best Seller</small>
          <h2 className="fw-bold">
            Best <span style={{ color: "#116530" }}>Seller</span> Products
          </h2>
        </div>

        <button className="btn btn-success rounded-pill px-4">
          View All Products →
        </button>
      </div>

      <Swiper
        navigation
        spaceBetween={25}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        style={{ paddingBottom: "30px" }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
