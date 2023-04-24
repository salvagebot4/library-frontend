import { React, useState } from 'react';
import './Books.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import BooksList from './BooksList';

//to do list
// set equal to zero (useState = (0) for cost / fine_mult, name is empty string
// add variable for fine_multiplier, product_name, and cost
// add forms for fine_multiplier, product_name, and cost
// test forms with console.log()
//create route to make product

const Books = () => {
  const product_type_id = 1; //ensures that the type of product is a book
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [product_id, setProductID] = useState('');
  const [page_count, setPageCount ] = useState(0);


  const handleAddBook = async (event) => {
    event.preventDefault();
      const options = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-book',
        headers: {'Content-Type': 'application/json'},
        data: { product_id, description, publisher, publication_date, author, page_count }
      }
      try {
        console.log(product_id, description, publisher, publication_date, author, page_count);

        //const response = await axios.request(options);
        //const responseData = response.data;
      }
      catch(error){
        console.error(error);
      }
  };
  
  const handleEditBook = async (event) => {
    event.preventDefault();
    //to do:
    //make put request that handles delete and edit
      //method: 'PUT',
      //url

  };
  

  return (
    <div> 
      <h1>Book Management</h1>
      
      <h2>Add Book</h2>
<form onSubmit={handleAddBook}>
  <label htmlFor="author">Author:</label>
  <input type="text" id="author" name="author" value={author} onChange={(event) => setAuthor(event.target.value)} required /><br />

  <label htmlFor="description">Description:</label>
  <textarea id="description" name="description" value={description} onChange={(event) => setDescription(event.target.value)} required ></textarea><br />

  <label htmlFor="publisher">Publisher:</label>
  <input type="text" id="publisher" name="publisher" value={publisher} onChange={(event) => setPublisher(event.target.value)} required /><br />

  <label htmlFor="publication-date">Publication Date:</label>
  <input type="date" id="publication-date" name="publication-date" value={publication_date} onChange={(event) => setPublicationDate(event.target.value)} required /><br />

  <label htmlFor="product-id">Product ID:</label>
  <input type="text" id="product-id" name="product-id" value={product_id} onChange={(event) => setProductID(event.target.value)} required /><br />

  <label htmlFor="page-count">Page Count:</label>
  <input type="number" id="page-count" name="page-count" value={page_count} onChange={(event) => setPageCount(event.target.value)} required /><br />

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
      <form onSubmit={handleEditBook}>
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