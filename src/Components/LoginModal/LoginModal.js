import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export default function LoginModal({ gameName }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {gameName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Authentication Required!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please Login to Continue</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={"/login"}>
            <Button variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
