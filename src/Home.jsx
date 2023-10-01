import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home__image"
          />

          <div className="home__row">
            <Product 
                id="11"
                title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Mand and Women (Blue)"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product 
                id="12"
                title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Mand and Women (Blue)"
                price={11.96}
                rating={2}
                image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
          </div>

          <div className="home__row">
            <Product 
                id="21"
                title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Mand and Women (Blue)"
                price={11.96}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product 
                id="22"
                title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Mand and Women (Blue)"
                price={11.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product 
                id="23"
                title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Mand and Women (Blue)"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
          </div>

          <div className="home__row">
            <Product 
                id="31"
                title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Mand and Women (Blue)"
                price={11.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
