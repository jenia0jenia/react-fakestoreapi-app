import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// import ProductsList from "./components/ProductsList";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsList from "./components/products/ProductsList";
import ProductsItem from "./components/products/ProductsItem";
import ProductsForm from "./components/products/ProductsForm";
import CustomLink from "./components/CustomLink";
import "./styles/App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <CustomLink to="/" end className="link-main">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/products">Products</CustomLink>
        </nav>

        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="products" element={<Products/>}>
              <Route index element={<ProductsList/>}></Route>
              <Route path=":id" element={<ProductsItem/>}></Route>
              <Route path="new" element={<ProductsForm/>}></Route>
              {/* <Route path="/:id/edit" element={<Products/>}></Route> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ProductsList></ProductsList> */}
    </div>
  );
}

export default App;
