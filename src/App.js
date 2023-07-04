import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./companets/Header";
import Cart from "./companets/Cart";
import Home from "./companets/Home";
import Footer from "./companets/Footer";
import Shop from "./companets/Shop";
import ProductUse from "./companets/products/ProductUsa";
import ProductGlow from "./companets/products/ProductGlow";
import ProductSweetShot from "./companets/products/ProductSweetShot";
import AboutUs from "./companets/AboutUs";
import Contact from "./companets/Contact";
import "./style/style.css";
import "./function/function";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Shop/USA" element={<ProductUse/>}/>
          <Route path="/Shop/Glow" element={<ProductGlow/>}/>
          <Route path="/Shop/SweetShot" element={<ProductSweetShot/>}/>
          <Route path="/About" element={<AboutUs/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </React.Fragment>
    </Router>
  );
}

export default App;
