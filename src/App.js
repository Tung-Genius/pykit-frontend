import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import LoginPage from "./pages/Login";
import Landing from "./pages/Landinh";
import RegisterPage from "./pages/Register";
import ProductDetailsPage from "./pages/ProductDetails";
import ProductCategoryPage from "./pages/ProductCategory";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route
            path="/products/category/:category_id"
            element={<ProductCategoryPage/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
