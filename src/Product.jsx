import React from "react";
import "./Product.css";

function Product({id, title, image, price, rating}) {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_, i) =>(   
                <p>⭐</p>  
            ))}
          </div>  {/*1. to fill the whole array we have to use the .fill method 2. _(underscore)means each and every item of the array and i means integer   */}
        </div>

        <img
          src={image}
          alt="product image"
        />

        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
