import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [showAvailability, setShowAvailability] = useState(false);
  const [showMostBorrowed, setShowMostBorrowed] = useState(false);
  const [hasAvailabilityData, setHasAvailabilityData] = useState(false);
  const [hasMostBorrowedData, setHasMostBorrowedData] = useState(false);
  useEffect(() => {
    if (!hasAvailabilityData) {
        axios.get('https://library-management-server.herokuapp.com/api/productAvailabilityReports')
          .then((response) => {
            setData(response.data);
            setHasAvailabilityData(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      if (!hasMostBorrowedData) {
        axios.get('https://library-management-server.herokuapp.com/api/productMostBorrowedReports')
          .then((response) => {
            setData2(response.data);
            setHasMostBorrowedData(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
  }, [hasAvailabilityData, hasMostBorrowedData]);
const handleAvailabilityClick = () => {
  setShowAvailability(prevState => !prevState);
  setShowMostBorrowed(false);
};

const handleMostBorrowedClick = () => {
  setShowMostBorrowed(prevState => !prevState);
  setShowAvailability(false);
};
  return (
    <div>
    <h1>Product Reports</h1>
    <Row className="mb-3">
      <Col>
        <Button variant={showAvailability ? 'primary' : 'secondary'} onClick={handleAvailabilityClick}>Availability</Button>
      </Col>
      <Col>
        <Button variant={showMostBorrowed ? 'primary' : 'secondary'} onClick={handleMostBorrowedClick}>Most Borrowed</Button>
      </Col>
    </Row>
    {showAvailability && (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Type</th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Stock number</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.product_id}>
              <td>{item.type_name}</td>
              <td>{item.product_id}</td>
              <td>{item.product_name}</td>
              <td>{item.stock_number}</td>
              <td>{item.available}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
    {showMostBorrowed && (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Type</th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Number of Checkouts</th>
          </tr>
        </thead>
        <tbody>
          {data2.map(item => (
            <tr key={item.product_id}>
              <td>{item.type_name}</td>
              <td>{item.product_id}</td>
              <td>{item.product_name}</td>
              <td>{item.num_checkouts}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
      <h1>Product Management</h1>
      <div className="option-container">
        <h2>Choose Product Type</h2>
        <p>Select the type of product you'd like to manage:</p>
        <Link to="/products/books"><button>Books</button></Link>
        <Link to="/products/media"><button>Media</button></Link>
        <Link to="/products/devices"><button>Devices</button></Link>
      </div>
    </div>
  );
};

export default Products;
