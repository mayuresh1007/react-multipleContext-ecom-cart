import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { ProductContext } from "../context/Appcontext";
import Card from "react-bootstrap/Card";
import AddToCart from "./AddToCart";

const FilterBar = () => {
  const { productlist, setProductList } = useContext(ProductContext);
  const [category, setCategory] = useState([]);
  const [filteredItems, setFilteredItems] = useState(productlist);

  useEffect(() => {
    getCaterories();
  }, []);

  function getCaterories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategory(res.data));
  }

  useEffect(() => {
    handleFiter();
  }, [category]);
  
  const handleFiter = (item) => {
    // console.log(item);
    let filterProductlist = productlist.filter(
      (products) => products.category === item
    );
    setFilteredItems(filterProductlist);
    console.log(filterProductlist);
  };
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="mt-3 ">
          {category.map((item, i) => (
            <Button
              variant="outline-secondary"
              key={i}
              className="mx-2"
              onClick={() => handleFiter(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="">
        {filteredItems?.map((product) => (
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
    </>
  );
};

export default FilterBar;

/**
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Bags", "Watches", "Sports", "Sunglasses"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
 */
