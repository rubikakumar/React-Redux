import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const CartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="NavB fixed-header" style={{ backgroundColor: '#343a40', padding: '10px 20px' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white font-weight-bold">
          <img
            src="/images/Store-Logo.png"
            alt="Store Logo"
            style={{ width: "150px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link 
              as={Link} 
              to="/" 
              className="text-white opt" 
              style={{ marginRight: '20px', transition: 'color 0.3s ease', fontSize: '18px' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#f8f9fa'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              Products
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/cart" 
              className="text-white opt"
              style={{ display: 'flex', alignItems: 'center', transition: 'color 0.3s ease', fontSize: '18px' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#f8f9fa'}
              onMouseOut={(e) => e.currentTarget.style.color = 'white'}
            >
              <i className="fa-solid fa-cart-shopping" style={{ marginRight: '5px' }}></i>
              My Cart ({CartProducts.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
