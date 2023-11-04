import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/Appcontext";
import Card from "react-bootstrap/Card";
import CheckOut from "./CheckOut";
import { Link, Outlet } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const TotalPrice = cart.reduce((acc, curr) => {
    return (acc += curr.price * curr.quantity);
  }, 0);
  //   console.log(TotalPrice);
  const removeFromCart = (id) => {
    const udpateCart = cart.filter((item) => item.id !== id);
    setCart(udpateCart);
  };

  const minusQnt = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      console.log("Product with ID", product.id, "is already in the cart.");
      // Increment the quantity of the existing product
      existingProduct.quantity -= 1;
      setCart([...cart]); // Update the cart to trigger a re-render
    }
  };
  const addQnt = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      console.log("Product with ID", product.id, "is already in the cart.");
      // Increment the quantity of the existing product
      existingProduct.quantity += 1;
      setCart([...cart]); // Update the cart to trigger a re-render
    }
  };
  const OpenCheckOut = () => {
    setOpen(!open);
  };

  return (
    <div className="mt-5 container">
      <div className="mt-5 d-inline-flex flex-wrap py-1">
        <h4>Total Price:-{TotalPrice}</h4>
        {cart.map((item, i) => (
          <Card
            key={i}
            className="mx-2 "
            border="dark"
            style={{ width: "14rem" }}
          >
            <Card.Body>
              <Card.Img
                style={{ width: "120px", height: "100px" }}
                variant="top"
                src={item.image}
              />
              <hr />
              <Card.Title>{item.title}</Card.Title>
              <Card.Title>Price:-{item.price}</Card.Title>
              <Card.Title>Quantity:-{item.quantity}</Card.Title>
              <Button
                className="mx-2"
                variant="outline-danger"
                size="sm"
                onClick={() => minusQnt(item)}
              >
                -
              </Button>
              Quantity
              <Button
                className="mx-2"
                variant="outline-success"
                size="sm"
                onClick={() => addQnt(item)}
              >
                +
              </Button>
            </Card.Body>
            <Button
              className="mx-2"
              variant="outline-danger"
              size="sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove from Cart
            </Button>
          </Card>
        ))}
      </div>
      <Button
        className="mx-2"
        variant="outline-info"
        size="sm"
        onClick={() => OpenCheckOut()}
      >
        Check Out page
      </Button>
      {open && <CheckOut TotalPrice={TotalPrice} />}
      {/* <Outlet/> */}
    </div>
  );
};

export default Cart;

/**
 * 
 * <div className="mt-5 d-inline-flex flex-wrap py-1">
        <h4>Total Price:-{TotalPrice}</h4>
        {cart.map((item) => (
          <Card
            key={item.id}
            className="mx-2 "
            border="dark"
            style={{ width: "14rem" }}
          >
            <Card.Body>
              <Card.Img
                style={{ width: "120px", height: "100px" }}
                variant="top"
                src={item.image}
              />
              <hr />
              <Card.Title>{item.title}</Card.Title>
              <Card.Title>{item.price}</Card.Title>
               <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> 
              </Card.Body>
              <Button
                className="mx-2"
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </Button>
            </Card>
          ))}
        </div>
 */
