import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/Appcontext";
const AddToCart = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const addtocart = () => {
    // console.log("addtocart");
    const newCartItem = product;
    // console.log("product", newCartItem);
    setCart([...cart, newCartItem]);
  };
  return (
    <>
      <Button
        className="mx-2"
        variant="outline-success"
        size="sm"
        onClick={() => addtocart()}
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCart;
