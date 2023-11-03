import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ProductContext } from "../context/Appcontext";

import AddToCart from "./AddToCart";
import FilterBar from "./FilterBar";

const ProductList = () => {
  const { productlist } = useContext(ProductContext);
  //   console.log(productlist);
  return (
    <div className="container mt-5">
      <FilterBar />
      {productlist?.map((product) => (
        <div className="d-inline-flex p-2" key={product.id}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Img
                style={{ width: "180px" }}
                variant="top"
                src={product.image}
              />
              <Card.Text>{product.description}</Card.Text>
              <h5 className="text-md">${product.price}</h5>
              <span>⭐{product.rating.rate}</span>
              <AddToCart product={product} />
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
