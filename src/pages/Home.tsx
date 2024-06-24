import { Container, Button } from 'react-bootstrap';
import "../styleHome.css";

export function Home() {
    return (
        <Container className="bg-dark text-light">
          <div className="landing-cover">
            <div className="cover-text text-center text-white">
              <h1>Welcome to Our E-Commerce Store</h1>
              <p>Your one-stop shop for all your needs</p>
              <Button variant="primary" href="#shop">Shop Now</Button>
            </div>
          </div>
    
          <Container className="py-5">
            <h2 className="text-center mb-4">Why Shop With Us?</h2>
            <p className="text-center">Discover amazing products at unbeatable prices. We offer a wide variety of items that cater to all your needs. Shop with us and experience the best in quality and service.</p>
          </Container>
    
          <Container className="py-5">
            <h2 className="text-center mb-4">About Us</h2>
            <p className="text-center">Our store is committed to providing the best online shopping experience. Learn more about our story and values, and see why we are a trusted choice for customers worldwide.</p>
            <div className="text-center">
              <Button variant="secondary" href="#about">Learn More</Button>
            </div>
          </Container>
    
          <Container className="py-5">
            <h2 className="text-center mb-4">Contact Us</h2>
            <p className="text-center">Have questions? We're here to help! Contact us and we'll be happy to assist you with any inquiries you may have.</p>
            <div className="text-center">
              <Button variant="secondary" href="#contact">Get in Touch</Button>
            </div>
          </Container>
    
          <Container fluid className="bg-light text-dark text-center py-3">
            <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
          </Container>
        </Container>
      );
}