import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove, incrementCount, decrementCount } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0);
  };

  return (
    <div className="text-dark text-center">
      <div className="d-flex justify-content-between align-items-center mb-4" style={{ position: "relative" }}>
        <h1 className="m-0" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          My Cart
        </h1>
        <Button className="btn1">
          <Link className="text-white" to="/checkout">
            Checkout
          </Link>
        </Button>
      </div>

      <h2>
        Grand Total: $ {calculateTotalPrice().toFixed(2)}
      </h2>

      {products.length === 0 ? (
        <div className="NoItems1 text-center">
          <img src="/images/cart.png" alt="Cart Empty" />
          <p style={{ color: "black" }} className="fs-3 my-5">
            Shopping Cart is Empty
          </p>
        </div>
      ) : (
        <div className="row justify-content-center">
          {products.map((product) => (
            <div
              className="col-md-4 mb-4"
              key={product.id}
              style={{
                marginTop: product.title === "Samsung Universe 9" ? "-2px" : "0px",
                height: "650px", 
              }}
            >
              <Card className="cards" style={{ height: "100%", padding: "5px" }}>
                <Card.Img
                  variant="top"
                  src={product.images}
                  alt={product.title}
                  style={{ padding: "5px" }}
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
                      Current Price: $ {product.price.toFixed(2)}
                    </span>
                  </Card.Text>
                  <Card.Text className="card-text">
                    Subtotal: $ {(product.price * product.count).toFixed(2)}
                  </Card.Text>
                  <div className="InDe d-flex align-items-center justify-content-center mb-2">
                    <Button variant="dark" onClick={() => dispatch(decrementCount(product.id))}>
                      -
                    </Button>
                    <span className="mx-2">{product.count}</span>
                    <Button variant="dark" onClick={() => dispatch(incrementCount(product.id))}>
                      +
                    </Button>
                  </div>
                  <Button variant="dark" onClick={() => dispatch(remove(product.id))}>
                    Remove Item
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 mb-4">
        <Button className="btn1">
          <Link className="text-white" to="/">
            Continue Shopping
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Cart;
