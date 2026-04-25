import { useContext } from "react";
import { ShopContext } from "./context";

export default function ShoppingCart() {
  const { cart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart">
      <h2>Кошик</h2>

      {cart.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        cart.map((item, i) => (
          <div className="cart-item" key={i}>
            <span>
              {item.name} - ${item.price}
            </span>
            <button onClick={() => removeFromCart(i)}>❌</button>
          </div>
        ))
      )}
    </div>
  );
}
