import { React, useState } from 'react';
import './Books.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import BooksList from './BooksList';

//to do list
// set equal to zero (useState = (0) for cost / fine_mult, name is empty string
// add variable for fine_multiplier, product_name, and cost
// add forms for fine_multiplier, product_name, and cost
// test forms with console.log()


const Books = () => {
  const product_type_id = 1; //ensures that the type of product is a book
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [product_id, setProductID] = useState('');
  const [page_count, setPageCount ] = useState(0);
  const [product_name, setProductName ] = useState('');
  const [cost, setCost ] = useState(0);
  const [fine_multiplier, setFineMultiplier ] = useState(0);
  const [column_name, setColumnName] = useState('');
  const [new_value, setNewValue] = useState('');

  const handleAddBook = async (event) => {
    event.preventDefault();
      const options1 = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-product',
        headers: {'Content-Type': 'application/json'},
        data: { product_id, product_type_id, product_name, cost, fine_multiplier }
      }
      const options2 = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-book',
        headers: {'Content-Type': 'application/json'},
        data: { product_id, description, publisher, publication_date, author, page_count }
      }
      try {
        //options2: adding a book
        //console.log(product_id, description, publisher, publication_date, author, page_count);
        //console.log(product_name, cost, product_id, fine_multiplier);
        const response1 = await axios.request(options1);
        const response2 = await axios.request(options2);
        //const responseData1 = response1.data;
        //const responseData2 = response2.data;
        //console.log(response1);
        //console.log(response2);
        alert(`book ${product_name} created. `);

      }
      catch(error){
        console.error(error);
        alert(`error creating book. please check fields.`);
      }
  };
  
  const handleEditBook = async (event) => {
    event.preventDefault();
    const options1 = {
      method: 'PUT',
      url: 'https://library-management-server.herokuapp.com/api/update-book',
      headers: {'Content-Type': 'application/json'},
      data: { product_id, column_name, new_value }
      
    }
    try {
      const response1 = await axios.request(options1);
      alert(`Product ID ${product_id} updated. `);

    }
    catch(error){
      console.error(error);
      alert(`error updating product.`);
    }

  };

  const handleDeleteBook = async (event) => {
    event.preventDefault();
    const options1 = {
      method: 'PUT',
      url: 'https://library-management-server.herokuapp.com/api/update-product',
      headers: {'Content-Type': 'application/json'},
      data: { product_id, column_name: 'is_deleted', new_value: 'true' }
      
    }
    try {
      const response1 = await axios.request(options1);
      alert(`Product ID ${product_id} deleted. `);

    }
    catch(error){
      console.error(error);
      alert(`error deleting product.`);
    }

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

  <label> Product Name</label>
  <input type="text" value={product_name} onChange={(event) => setProductName(event.target.value)} required /><br />

  <label> Cost: </label>
  <input type="number" id="page-count" name="page-count" value={cost} onChange={(event) => setCost(event.target.value)} required /><br />

  <label> Fine Multiplier:</label>
  <input type="number" id="page-count" name="page-count" value={fine_multiplier} onChange={(event) => setFineMultiplier(event.target.value)} required /><br />

  <input type="submit" value="Add Book" />
</form>


      
      <h2>Edit Book</h2>
      <form onSubmit={handleEditBook}>
        <label>Product ID:</label>
        <input type="text" id="product-id" name="book-product-id" value={product_id} onChange={(event) => setProductID(event.target.value)} required /><br />
        
        <label>Column to Update:</label>
        <select value={column_name} onChange={(event) => setColumnName(event.target.value)}>
                <option value=""></option>
                <option value="author">Author</option>
                <option value="description">Description</option>
                <option value="publisher">Publisher</option>
                <option value="page_count">Page Count</option>
              </select>
        <br/>
        <label> New Value:</label>
        <input type="text" value={new_value} onChange={(event) => setNewValue(event.target.value)} required /><br />
        
        <input type="submit" value="Update Book" />
      </form>
      
      <h2>Delete Book</h2>
      <form onSubmit={handleDeleteBook}>
        <label>Product ID:</label>
        <input type="text" id="book-product-id" name="book-product-id" value={product_id} onChange={(event) => setProductID(event.target.value)} required /><br />
        
        <input type="submit" value="Delete Book" />
      </form>


      <Link to="/products/books/bookslist">
        <button>View Books List</button>

      </Link>
    </div>
  );
};

export default Books;