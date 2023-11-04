import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/Appcontext";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  // console.log(cart);
  const style = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Navbar expand="lg fixed-top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">YOUR-shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link ><Link to="/products">ProductList</Link></Nav.Link>
            <Nav.Link >  <Link to="/about">About</Link></Nav.Link> */}
            <Link style={style} className="mx-2" to="/products">
              ProductList
            </Link>
            <Link style={style} className="mx-2" to="/about">
              About
            </Link>
            <Link style={style} className="mx-2" to="/cart">
              Cart
            </Link>
            <Badge className="mx-2" bg="danger">
              {cart.length}
            </Badge>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
