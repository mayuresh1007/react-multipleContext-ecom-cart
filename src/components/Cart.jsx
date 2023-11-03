import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/Appcontext";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const TotalPrice = cart.reduce((acc, curr) => {
    return (acc += curr.price);
  }, 0);
  //   console.log(TotalPrice);
  const removeFromCart = (id) => {
    // console.log("removed called");

    // console.log(cart)
    const udpateCart = cart.filter((item) => item.id !== id);
    setCart(udpateCart);
  };
  return (
    <div className="mt-5 container">
      <div className="mt-5 d-inline-flex flex-wrap py-1">
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
              {/* <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text> */}
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
    </div>
  );
};

export default Cart;
