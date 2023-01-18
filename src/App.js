import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router,  Routes ,Route } from "react-router-dom";
import GlobalStyle from './globalStyles';
import  { useState, useEffect } from "react";
import axios from 'axios';
import Products from './Products';
import LoadingSpinner from './LoadingSpinner';
import ShoppingCart from './ShoppingCart';

const App = ()=> {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [number , setNumber] = useState(0);
    



    
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setLoading(false);
        setProducts(response.data.products);
      })
      .catch(() => {
        setLoading(true);
      });
  }, []);
  const product ={};
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item     
        )
        
      );
      setNumber(number +1);
      console.log(cartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      setNumber(number +1);
      console.log(cartItems);
      
    }
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity ===1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      setNumber(number-1);
    }else{
      setCartItems(
        cartItems.map((item) => item.id === product.id 
        ? {...ProductExist,quantity: ProductExist.quantity -1}
        : item
        )
      )
      setNumber(number-1);
    }

  }
   

  return (
    
      <Router>
         <GlobalStyle/>
         <Navbar number ={number}/>
         <Routes>
         <Route
            exact
            path="/products"
            element={
              isLoading ? (
                <LoadingSpinner />
              ) : (
                <Products
                  products={products}
                  handleAddProduct={handleAddProduct}
                />
              )
            }
          />

        <Route
            exact
            path="/shoppingcart"
            element={<ShoppingCart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}
          />  



         </Routes>

      </Router>
    
  )
}

export default App