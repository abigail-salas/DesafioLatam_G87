import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Iniciar Sesión</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="mt-3">
              Iniciar Sesion
            </Button>
          </Form>

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

export default Login;
