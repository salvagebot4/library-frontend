import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  return (
    <div className="home">
      <Container>
        <Row>
          <Col>
            <h1>Welcome to The Book Nook</h1>
            <p>We offer a wide variety of books, media, devices, and more for borrowing. Use the search bar to find what you're looking for.</p>
            <Button variant="primary" href="#borrow">Borrow Now</Button>
          </Col>
          <Col>
            <Card className="featured-card">
              <Card.Body>
                <Card.Title>Featured Item</Card.Title>
                <Card.Text>
                  Check out our featured item this month!
                </Card.Text>
                <Button variant="primary" href="#item">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
