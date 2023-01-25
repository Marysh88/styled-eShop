import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Products from "./Products";
import ShoppingCart from'./ShoppingCart'


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;
