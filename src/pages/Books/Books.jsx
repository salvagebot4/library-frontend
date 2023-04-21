import React from 'react';
import './Books.css';

const Books = () => {
  return (
    <div>
      <h1>Book Management</h1>
      
      <h2>Add Book</h2>
      <form>
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
      <form>
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
      <form>
        <label htmlFor="book-product-id">Product ID:</label>
        <input type="text" id="book-product-id" name="book-product-id" /><br />
        
        <input type="submit" value="Delete Book" />
      </form>
    </div>
  );
};

export default Books;