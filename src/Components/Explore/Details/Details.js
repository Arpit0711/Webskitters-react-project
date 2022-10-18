import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import axios from "axios";

export default function Details() {
  const [value, setValue] = useState([]);
  const { id } = useParams();
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.rawg.io/api/games${id}?key=bb9e9578cf034172a9f1ed6e568d6325`
  //     )
  //     .then((res) => {
  //       console.log("res", res);
  //       // setState(res.data.results);
  //     })
  //     .catch((errr) => {
  //       console.log("axios err", errr);
  //     });
  // }, []);
  // console.log("state", value);
  return (
    <div className="sub_category">
      <Row xs={1} md={3}>
        {value.map((v) => (
          <Col key={v.id}>
            <Card className="cat__card">
              {/* <Card.Img variant="top" src={v.background_image} /> */}
              <Card.Body>{/* <Card.Title>{v.name}</Card.Title> */}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
