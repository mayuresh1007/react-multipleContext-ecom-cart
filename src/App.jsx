import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";

import { Outlet } from "react-router-dom";
import { CartContext, ProductContext } from "./context/Appcontext";

function App() {
  const [cart, setCart] = useState([]);
  const [productlist, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    try {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setProductList(res.data);
        console.log(res.data.length);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ProductContext.Provider value={{ productlist, setProductList }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <NavBar />
          <Outlet />
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App;
