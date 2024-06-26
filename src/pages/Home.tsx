import { Container, Button } from 'react-bootstrap';
import "../App.css";

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
    
          <Container fluid className="bg-light text-dark text-center py-3">
            <p>&copy; Halleluyah Adesuyi, 2024 E-Commerce Store. All rights reserved.</p>
          </Container>
        </Container>
      );
}