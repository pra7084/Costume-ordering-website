import { useRef } from "react";
import CartModal from "./CartModal";
import "./Cart.css";
import { DUMMY_PRODUCTS } from "../dummy-products";
const Cart = ({ data, toAdd, toMinus }) => {
  let cost = 0;
  const modal = useRef();
  const handleClick = () => {
    modal.current.open();
  };
  return (
    <>
      <CartModal ref={modal} goData={data}>
        <h2 className="your_cart">Your cart</h2>
        {data.map((val) => {
          const filteredId = DUMMY_PRODUCTS.find(
            (value) => value.id === val.id
          );
          cost += filteredId.price * val.count;
          if (val.count > 0) {
            return (
              <div key={val.id} className="cart_item">
                <span className="cart_title">
                  {filteredId.title}({filteredId.price})
                </span>
                <div>
                  <button onClick={() => toMinus(filteredId.id)}>-</button>
                  <span>{val.count}</span>
                  <button onClick={() => toAdd(filteredId.id)}>+</button>
                </div>
              </div>
            );
          }
        })}
        <p className="total">Cart Total:${cost.toFixed(2)}</p>
      </CartModal>
      <button onClick={handleClick} ref={modal}>
        <p>Cart</p>
        <span>({data.length})</span>
      </button>
    </>
  );
};
export default Cart;
