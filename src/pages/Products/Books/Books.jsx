import { React, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Books.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Books = () => {
  //POST ROUTE
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [product_id, setProductID] = useState('');
  const [page_count, setPageCount] = useState('');
  //PUT ROUTE
  const [column_name, setColumnName] = useState('');
  const [new_value, setNewValue] = useState('');
  const [is_deleted, setDeleted] = useState('');
  /*
  const viewBooks = async (event) => {
    event.preventDefault();
  
    const options = {
      method: 'GET',
      url: 'https://library-management-server.herokuapp.com/api/products/books',
      headers: {'Content-Type': 'application/json'}
    };
  
    try {
      const response = await axios(options);
      const books = response.data;
      console.log(books); // or update a state variable with the fetched data
    } catch (error) {
      console.log(error);
    }
  };*/


  const handleCreateBook = async (event) => {
    event.preventDefault();
  

      const options = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-book',
        headers: {'Content-Type': 'application/json'},
        data: { author, description, publisher, publication_date, product_id, page_count}
    };


    try {
        const response = await axios.request(options);
        //const responseData = response.data;
        //console.log(responseData[0]);
        alert(`Book ${author} ${description} ${publisher}  ${publication_date} ${product_id} ${page_count} created`)


    } catch (error) {
      console.log(error);
    }

  };
  const handleEditBook = async (event) => {
    event.preventDefault();

    const options = {
      method: 'PUT',
      url: 'https://library-management-server.herokuapp.com/api/update-book',
      headers: { 'Content-Type': 'application/json' },
      data: { column_name: column_name, new_value: new_value, product_id: product_id, is_deleted: is_deleted }
    };
try {
        const response = await axios.request(options);
        //const responseData = response.data;
        //console.log(responseData[0]);
        alert(`Book ${column_name} ${new_value}  ${product_id} updated`)


    } catch (error) {
      console.log(error);
    }

};
  return (
    <div> 
      <h1>Book Management</h1>
      <h2>Add Book</h2>
      <Form onSubmit={handleCreateBook}>
        <Form.Group controlId="book-name">
          <Form.Label>Book Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter book name" />
        </Form.Group>
        
        <Form.Group controlId="book-author">
          <Form.Label>Author:</Form.Label>
          <Form.Control type="text" placeholder="Enter author name" onChange={(e) => setAuthor(e.target.value)} />
        </Form.Group>
        
        <Form.Group controlId="book-publisher">
          <Form.Label>Publisher:</Form.Label>
          <Form.Control type="text" placeholder="Enter publisher name" onChange={(e) => setPublisher(e.target.value)} />
        </Form.Group>
        
        <Form.Group controlId="book-publication-date">
          <Form.Label>Publication Date:</Form.Label>
          <Form.Control type="date" onChange={(e) => setPublicationDate(e.target.value)} />
        </Form.Group>
        
        <Form.Group controlId="book-page-count">
          <Form.Label>Page Count:</Form.Label>
          <Form.Control type="number" onChange={(e) => setPageCount(e.target.value)} />
        </Form.Group>
        
        <Form.Group controlId="book-description">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
        
        <Form.Group controlId="book-product-id">
          <Form.Label>Product ID:</Form.Label>
          <Form.Control type="text" placeholder="Enter product ID" onChange={(e) => setProductID(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Book
        </Button>
      </Form>
      
      <h2>Edit Book</h2>
<Form onSubmit={handleEditBook}>
  <Form.Group controlId="book-product-id">
    <Form.Label>Product ID:</Form.Label>
    <Form.Control type="text" placeholder="Enter product ID" onChange={(e) => setProductID(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="book-column-name">
    <Form.Label>Column Name:</Form.Label>
    <Form.Control type="text" placeholder="Enter column name" onChange={(e) => setColumnName(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="book-new-value">
    <Form.Label>New Value:</Form.Label>
    <Form.Control type="text" placeholder="Enter new value" onChange={(e) => setNewValue(e.target.value)} />
  </Form.Group>

  <Form.Group controlId="book-is-deleted">
    <Form.Label>Deleted:</Form.Label>
    <Form.Control as="select" onChange={(e) => setDeleted(e.target.value)}>
      <option value="false">No</option>
      <option value="true">Yes</option>
    </Form.Control>
  </Form.Group>

  <Button variant="primary" type="submit">
    Update Book
  </Button>
</Form>
    
      <Link to="/BookList">
        <button>View Books List</button>
      </Link>
      
    </div>
  );
};

export default Books;
