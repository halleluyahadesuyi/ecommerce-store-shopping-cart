import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';

export function Home() {
    const products = [
        { id: 1, name: "Product 1", description: "This is a great product.", price: "$10.00" },
        { id: 2, name: "Product 2", description: "This is another great product.", price: "$15.00" },
        { id: 3, name: "Product 3", description: "This is yet another great product.", price: "$20.00" },
      ];
    
      return (
        <>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">E-Commerce Store</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#products">Products</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    
          <Container fluid className="p-0">
            <div className="bg-dark text-white text-center py-5">
              <h1>Welcome to Our E-Commerce Store</h1>
              <p>Your one-stop shop for all your needs</p>
              <Button variant="primary" href="#products">Shop Now</Button>
            </div>
          </Container>
    
          <Container className="py-5">
            <h2 className="text-center mb-4">Featured Products</h2>
            <Row>
              {products.map(product => (
                <Col md={4} key={product.id} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={`https://via.placeholder.com/300x200?text=${product.name}`} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text><strong>{product.price}</strong></Card.Text>
                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
    
          <Container fluid className="bg-dark text-white text-center py-3">
            <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
          </Container>
        </>
      );
}