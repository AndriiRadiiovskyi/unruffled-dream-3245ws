import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShopProvider } from "./context";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import "./styles.css";

export default function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Товари</Link>
          <Link to="/cart">Кошик</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}
