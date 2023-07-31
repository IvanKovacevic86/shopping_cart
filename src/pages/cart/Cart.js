import React, { useContext } from "react";
import "./cart.css";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);

  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button> Checkout</button>
        </div>
      ) : (
        <h1> Your Cart is Empty </h1>
      )}
    </div>
  );
};

export default Cart;
