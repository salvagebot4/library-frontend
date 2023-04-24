import React from 'react';
import './Books.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import BooksList from './BooksList';

const Books = () => {
  const handleAddBook = (event) => {
    event.preventDefault();
  
    const book = {
      product_type_id: '1', // hardcoded
      //product_name: event.target.elements['book-name'].value,
      //cost: event.target.elements['book-cost'].value,
      //fine_multiplier: event.target.elements['book-fine-multiplier'].value,
      product_id: event.target.elements['product-id'].value,
      author: event.target.elements['author'].value,
      description: event.target.elements['description'].value,
      publisher: event.target.elements['publisher'].value,
      publication_date: event.target.elements['publication-date'].value,
      page_count: event.target.elements['page-count'].value,
    };

      const options = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-book',
        headers: {''},
        data: {  }
      }

  /*
    axios.post('https://library-management-server.herokuapp.com/api/add-book', book)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  */

  const handleDeleteBook = (event) => {
    event.preventDefault();
  
    const productId = event.target.elements['book-product-id'].value;
  
    axios.delete(`/api/update-book/${productId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleEditBook = (event) => {
    event.preventDefault();
  
    const productId = event.target.elements['book-product-id'].value;
  
    const updatedBook = {
      product_type_id: '1', // hardcoded
      product_id: productId,
      author: event.target.elements['book-author'].value,
      description: event.target.elements['book-description'].value,
      publisher: event.target.elements['book-publisher'].value,
      publication_date: event.target.elements['book-publication-date'].value,
      page_count: event.target.elements['book-page-count'].value,
    };
  
    axios.put(`/api/update-book/${productId}`, updatedBook)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <div> 
      <h1>Book Management</h1>
      
      <h2>Add Book</h2>
<form onSubmit={handleAddBook}>
  <label htmlFor="author">Author:</label>
  <input type="text" id="author" name="author" /><br />

  <label htmlFor="description">Description:</label>
  <textarea id="description" name="description"></textarea><br />

  <label htmlFor="publisher">Publisher:</label>
  <input type="text" id="publisher" name="publisher" /><br />

  <label htmlFor="publication-date">Publication Date:</label>
  <input type="date" id="publication-date" name="publication-date" /><br />

  <label htmlFor="product-id">Product ID:</label>
  <input type="text" id="product-id" name="product-id" /><br />

  <label htmlFor="page-count">Page Count:</label>
  <input type="number" id="page-count" name="page-count" /><br />

  <input type="submit" value="Add Book" />
</form>


      
      <h2>Edit Book</h2>
      <form onSubmit={handleEditBook}>
        <label htmlFor="book-product-id">Product ID:</label>
        <input type="text" id="book-product-id" name="book-product-id" /><br />
        
        <label htmlFor="book-name">Book Name:</label>
        <input type="text" id="book-name" name="book-name" /><br />
        
        <label htmlFor="book-author">Author:</label>
        <input type="text" id="book-author" name="book-author" /><br />
        
        <label htmlFor="book-publisher">Publisher:</label>
        <input type="text" id="book-publisher" name="book-publisher" /><br />
        
        <label htmlFor="book-publication-date">Publication Date:</label>
        <input type="date" id="book-publication-date" name="book-publication-date" /><br />
        
        <label htmlFor="book-page-count">Page Count:</label>
        <input type="number" id="book-page-count" name="book-page-count" /><br />
        
        <label htmlFor="book-description">Description:</label>
        <textarea id="book-description" name="book-description"></textarea><br />
        
        <input type="submit" value="Update Book" />
      </form>
      
      <h2>Delete Book</h2>
      <form onSubmit={handleDeleteBook}>
        <label htmlFor="book-product-id">Product ID:</label>
        <input type="text" id="book-product-id" name="book-product-id" /><br />
        
        <input type="submit" value="Delete Book" />
      </form>

      <Link to="/products/books/bookslist">
        <button>View Books List</button>

      </Link>
    </div>
  );
};

export default Books;