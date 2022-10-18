import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import axios from "axios";

import "./category.css";

import LoginModal from "../../LoginModal/LoginModal";

export default function Category() {
  const [state, setState] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const isLoggedIn = window.sessionStorage.getItem("TokenValue");
  console.log("Token category", isLoggedIn);

  useEffect(() => {
    axios
      .get("https://api.rawg.io/api/games?key=bb9e9578cf034172a9f1ed6e568d6325")
      .then((res) => {
        // console.log("res", res);
        setState(res.data.results);
      })
      .catch((errr) => {
        console.log("axios err", errr);
      });
  }, []);
  // console.log("state", state);
  return (
    <div className="category">
      <input
        className="category__search"
        placeholder="search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Row xs={1} md={3}>
        {state
          .filter((s) => {
            if (searchTerm == "") {
              return s;
            } else if (
              s.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return s;
            }
          })
          .map((s) => (
            <Col key={s.id}>
              <Card className="cat__card">
                <Card.Img variant="top" src={s.background_image} />
                <Card.Body>
                  <Card.Title>
                    {isLoggedIn ? (
                      <Link to={`/gameDetails/${s.id}`}>{s.name}</Link>
                    ) : (
                      <LoginModal gameName={s.name} />
                    )}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
