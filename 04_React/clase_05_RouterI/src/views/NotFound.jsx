import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h4>404</h4>
          <p>Pagina no encontrada</p>

          <div className="mt-4 d-grid mb-4">
            <Button variant="dark" as={Link} to={"/home"} size="lg">
              Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
