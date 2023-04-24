import React from 'react';
import './Books.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import BooksList from './BooksList';

const Books = () => {
  const handleAddBook = (event) => {
    event.preventDefault();

    const book = {
      product_name: event.target.elements['book-name'].value,
      author: event.target.elements['book-author'].value,
      publisher: event.target.elements['book-publisher'].value,
      publication_date: event.target.elements['book-publication-date'].value,
      page_count: event.target.elements['book-page-count'].value,
      description: event.target.elements['book-description'].value,
      product_id: event.target.elements['book-id'].value,
    };

    axios.post('/api/add-book', book)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      product_name: event.target.elements['book-name'].value,
      author: event.target.elements['book-author'].value,
      publisher: event.target.elements['book-publisher'].value,
      publication_date: event.target.elements['book-publication-date'].value,
      page_count: event.target.elements['book-page-count'].value,
      description: event.target.elements['book-description'].value,
    };
  
    axios.put(`/api/update-book${productId}`, updatedBook)
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
        
        <label htmlFor="book-product-id">Product ID:</label>
        <input type="text" id="book-product-id" name="book-product-id" /><br />
        
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
