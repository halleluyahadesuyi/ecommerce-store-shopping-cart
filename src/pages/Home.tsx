import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import ProgressiveImage from "../components/ProgressiveImageLoading";
import coverImage from "../assets/cover.jpg";
import "../App.css";

export function Home() {
  return (
    <Container className="bg-dark text-light">
      <ProgressiveImage
        src={coverImage}
        placeholderSrc={coverImage}
        alt="landing page cover"
        className="landing-cover rounded"
      />
      <div className="cover-text text-center text-white">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Your one-stop shop for all your needs</p>
        <Link to="/store">
          <Button variant="primary">Shop Now</Button>
        </Link>
      </div>

      <Container className="bg-light text-dark p-5 border border-5 border-info rounded-pill">
        <h2 className="text-center mb-4">Why Shop With Us?</h2>
        <p className="text-center">
          Discover a vast range of products carefully curated to meet your needs
          and preferences. We prioritize quality, ensuring that every item we
          offer meets stringent standards. Enjoy competitive pricing on all our
          products, ensuring you get great value for your money. Our
          user-friendly platform and secure checkout process make shopping
          effortless and secure. We are committed to your satisfaction, offering
          responsive customer support to address any concerns.
        </p>
      </Container>

      <Container className="text-light text-center py-3 mt-5 fw-bold">
        <p>&copy; 2024 E-Commerce Store | Halleluyah Adesuyi</p>
      </Container>
    </Container>
  );
}
