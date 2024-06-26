import { Container, Row, Col, Card } from 'react-bootstrap';
import ceo from "../assets/ceo.jpg";
import cto from "../assets/cto.jpg";
import marketer from "../assets/marketer.jpg";

export function About() {
  return (
    <Container className="py-5 bg-dark text-light">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-center mb-4">We are committed to providing the best online shopping experience. Our team is dedicated to offering high-quality products and exceptional customer service.</p>
      
      <h2 className="text-center mb-4">Our Mission</h2>
      <p className="text-center mb-4">Our mission is to deliver outstanding value and quality to our customers, ensuring a seamless and enjoyable shopping experience. We strive to innovate and lead in the e-commerce space.</p>
      
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={ceo} />
            <Card.Body className="text-center">
              <Card.Title>Marie Johnson</Card.Title>
              <Card.Text>CEO & Founder</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={cto} />
            <Card.Body className="text-center">
              <Card.Title>James Bond</Card.Title>
              <Card.Text>Chief Technology Officer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <Card.Img variant="top" src={marketer} />
            <Card.Body className="text-center">
              <Card.Title>Will Carter</Card.Title>
              <Card.Text>Head of Marketing</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

