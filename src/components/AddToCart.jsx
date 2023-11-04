import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/Appcontext";
const AddToCart = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  
  const addToCart = (product) => {
    
    const existingProduct = cart.find((item) => item.id === product.id);
    console.log(existingProduct)
    if (existingProduct) {
      console.log("Product with ID", product.id, "is already in the cart.");
      // Increment the quantity of the existing product
      existingProduct.quantity += 1;
      setCart([...cart]); // Update the cart to trigger a re-render
    } else {
      console.log("Product with ID", product.id, "is not in the cart.");
      const newItem = {
        ...product,
        quantity: 1,
      };
      setCart([...cart, newItem]); // Add a new item to the cart
    }
    console.log(cart)
   
  };
  
  return (
    <>
      <Button
        className="mx-2"
        variant="outline-success"
        size="sm"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
