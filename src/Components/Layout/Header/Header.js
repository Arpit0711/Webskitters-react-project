import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const isLoggedIn = window.sessionStorage.getItem("TokenValue");
  console.log("Token", isLoggedIn);

  let location = useLocation();
  useEffect(() => {
    console.log("Location:", location);
  }, [location]);
  return (
    <div>
      <Navbar variant="transparent" bg="dark" className="Header__navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://i.pinimg.com/originals/db/3c/69/db3c6932ab7f48aa37911fa229efa7ba.jpg"
              width="70"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`${
                location.pathname === "/" ? "active" : "Nav__link"
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/explore"
              className={`${
                location.pathname === "/explore" ? "active" : "Nav__link"
              }`}
            >
              Explore
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`${
                location.pathname === "/about" ? "active" : "Nav__link"
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`${
                location.pathname === "/contact" ? "active" : "Nav__link"
              }`}
            >
              Contact
            </Nav.Link>
          </Nav>
          {isLoggedIn ? (
            <Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="login__button">
                  <Link to={"/profile"}>Logout</Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Nav>
          ) : (
            <Nav>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="login__button">
                  <Link to={"/login "}>Login</Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Nav>
          )}
        </Container>
      </Navbar>{" "}
    </div>
  );
}
