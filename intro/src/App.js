import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";

//import local images

import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-4 text-center">
        <h1>Welcome to My React App</h1>
        <Row className="mt-4">
          {/* Cards */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>Some quick example text.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>Some quick example text.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={image2}/>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>Some quick example text.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
