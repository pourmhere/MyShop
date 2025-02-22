import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const curYear = new Date().getFullYear();

  // Use a template literal to format the copyright year dynamically
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Shop &copy; {curYear} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
