import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button,Table } from 'react-bootstrap';
import axios from 'axios';
import './BookList.css';
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://library-management-server.herokuapp.com/api/products/books');
        setBooks(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchBooks();
  }, []);

  return (
    <Container>
      <h1>Books List</h1>
      <Row>
        <Col>
          <Table bordered>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Publisher</th>
                <th>Publication Date</th>
                <th>Page Count</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.product_id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td>{book.publisher}</td>
                  <td>{book.publication_date}</td>
                  <td>{book.page_count}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;