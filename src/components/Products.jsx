import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

const Products = () => {
  const CartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const isProductInCart = (productId) => {
    return CartProducts.some((item) => item.id === productId);
  };

  const toggleCart = (product) => {
    if (isProductInCart(product.id)) {
      dispatch(remove(product.id));
    } else {
      dispatch(add(product));
      setShowSuccessMessage(true);
       setTimeout(() => {
      setShowSuccessMessage(false);
      }, 3000);
    }
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/Data/data.json") 
      .then((response) => response.json())
      .then((result) => setProducts(result.products))
      .catch((e) => console.log("Error fetching data:", e));
  }, []);

  const cards = products.map((product) => (
    <div className="card-container" key={product.id}>
      <div className="card-products">
        <Card style={{ padding: "5px" }} className="cards">
          <Card.Img
            variant="top"
            src={product.images[0]} 
          />
          <Card.Body
            style={{
              paddingTop: product.title === "Samsung Universe 9" ? "55px" : "10px",
            }}
          >
            <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
              {product.title}
            </Card.Title>
            <Card.Text>
              <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#28a745" }}>
                Current Price: ${product.price}
              </span>
            </Card.Text>
            <Card.Text>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "#dc3545",
                  textDecoration: "line-through",
                  marginRight: "5px",
                }}
              >
                Original Price: $
                {(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
              <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#dc3545" }}>
                Discount: {product.discountPercentage}%
              </span>
            </Card.Text>
            <Card.Text>Brand: {product.brand}</Card.Text>
            <Button variant="primary" className="add" onClick={() => toggleCart(product)}>
              {isProductInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  ));

  return (
    <>
      <div className="card-products">
        {showSuccessMessage && (
          <div className="alert alert-success" style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}>
            Product added to cart successfully!
          </div>
        )}
        {cards}
      </div>
    </>
  );
};

export default Products;
