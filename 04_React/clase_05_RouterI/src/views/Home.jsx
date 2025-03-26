import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2>Bienvenido a Home</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quaerat.
          </p>
          <div className=" d-grid gap-3">
            <Button
              variant="dark"
              type="submit"
              className="mt-3"
              as={Link}
              to={"/login"}
            >
              Iniciar Sesion
            </Button>

            <Button
              variant="dark"
              type="submit"
              className="mt-3"
              as={Link}
              to={"/register"}
            >
              Registrarse
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
