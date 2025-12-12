import React from "react";
import PropTypes from "prop-types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./product-card.css";

export default function ProductCard({
  image,
  title,
  category,
  weight,
  price,
  oldPrice,
  discount,     // "20% off" or null
  rating,       // number e.g. 4.9
  onAdd,        // function handler for Add click
  onFavorite,   // function handler for Favorite
}) {
  return (
    <div className="product-card card h-100 border-0 rounded-3">
      {/* discount badge + favorite */}
      <div className="product-badges position-absolute top-0 start-0 m-3 d-flex align-items-start gap-2">
        {discount && <span className="badge badge-discount rounded-pill px-3 py-2">{discount}</span>}
      </div>

      <button
        type="button"
        className="btn btn-sm btn-white favorite-btn position-absolute top-0 end-0 m-3"
        aria-label="Add to wishlist"
        onClick={onFavorite}
      >
        <FavoriteBorderOutlinedIcon fontSize="small" />
      </button>

      {/* card body */}
      <div className="card-body d-flex flex-column p-3 pt-4">
        {/* image */}
        <div className="product-media d-flex align-items-center justify-content-center mb-3">
          <img src={image} alt={title} className="img-fluid product-image" />
        </div>

        {/* meta row (category + rating) */}
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="text-muted small product-category">{category}</div>
          <div className="d-flex align-items-center gap-1">
            <StarIcon className="star-icon" fontSize="small" />
            <span className="small fw-bold">{rating?.toFixed(1)}</span>
          </div>
        </div>

        {/* title */}
        <h6 className="product-title mb-1">{title}</h6>

        {/* weight */}
        {weight && <div className="text-muted small mb-3">{weight}</div>}

        <div className="mt-auto d-flex align-items-center justify-content-between">
          {/* price block */}
          <div className="price-block">
            <div className="fw-bold price-now">₹{price.toFixed(2)}/-</div>
            {oldPrice && <div className="text-muted small text-decoration-line-through">₹{oldPrice.toFixed(2)}/-</div>}
          </div>

          {/* add button */}
          <button
            type="button"
            className="btn btn-sm add-btn d-inline-flex align-items-center gap-2"
            onClick={onAdd}
            aria-label={`Add ${title} to cart`}
          >
            <ShoppingBagOutlinedIcon fontSize="small" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  weight: PropTypes.string,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  discount: PropTypes.string,
  rating: PropTypes.number,
  onAdd: PropTypes.func,
  onFavorite: PropTypes.func,
};

ProductCard.defaultProps = {
  category: "",
  weight: "",
  oldPrice: null,
  discount: null,
  rating: 0,
  onAdd: () => {},
  onFavorite: () => {},
};
