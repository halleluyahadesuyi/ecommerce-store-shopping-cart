import { Container, Row, Col, Card } from "react-bootstrap";
import ProgressiveImage from "../components/ProgressiveImageLoading";
import ceo from "../assets/ceo.jpg";
import cto from "../assets/cto.jpg";
import marketer from "../assets/marketer.jpg";

export function About() {
  return (
    <Container className="py-5 bg-dark text-light">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-center mb-4">
        Our store is more than just an online retailer; we are a dedicated team
        passionate about delivering excellence. Our mission is to revolutionize
        your online shopping experience by providing exceptional products and
        unmatched customer service. We source products from trusted suppliers to
        ensure superior quality and reliability. Constantly evolving and
        adapting to meet the ever-changing needs of our customers and the
        marketplace. Supporting and engaging with our community to foster
        positive social and environmental impact. Operating with honesty and
        transparency in everything we do, ensuring trust and integrity with our
        customers.
      </p>

      <h2 className="text-center mb-4">Our Mission</h2>
      <p className="text-center mb-4">
        Our mission is to deliver outstanding value and quality to our
        customers, ensuring a seamless and enjoyable shopping experience. We
        strive to innovate and lead in the e-commerce space. Our mission is
        clear and unwavering: to redefine your online shopping journey with
        excellence in service. We aim to provide unparalleled service that
        exceeds your expectations at every touchpoint. Introducing cutting-edge
        products that enhance your lifestyle and meet your evolving needs.
        Committing to sustainable practices that minimize our ecological
        footprint.
      </p>

      <h2 className="text-center mb-4">Meet Our Team</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <ProgressiveImage
              src={ceo}
              placeholderSrc={ceo}
              alt="ceo"
              className="card-img-top" /* Bootstrap utility class; makes image fit well within card's layout (or border radius) */
            />
            <Card.Body className="text-center">
              <Card.Title>Marie Johnson</Card.Title>
              <Card.Text>CEO & Founder</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <ProgressiveImage
              src={cto}
              placeholderSrc={cto}
              alt="cto"
              className="card-img-top"
            />
            <Card.Body className="text-center">
              <Card.Title>James Bond</Card.Title>
              <Card.Text>Chief Technology Officer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow-sm">
            <ProgressiveImage
              src={marketer}
              placeholderSrc={marketer}
              alt="marketer"
              className="card-img-top"
            />
            <Card.Body className="text-center">
              <Card.Title>Cynthia Carter</Card.Title>
              <Card.Text>Head of Marketing</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
