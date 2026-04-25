import { useContext } from "react";
import { ShopContext } from "./context";
import { products } from "./data";

export default function ProductList() {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="grid">
      {products.map((p) => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button onClick={() => addToCart(p)}>В кошик</button>
        </div>
      ))}
    </div>
  );
}
