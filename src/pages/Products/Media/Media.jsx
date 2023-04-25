import { React, useState } from 'react';
import './Media.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Media = () => {

    const product_type_id = 3; //ensures that the type of product is media
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [product_id, setProductID] = useState('');
  const [product_name, setProductName ] = useState('');
  const [file_size, setFileSize ] = useState(0);
  const [is_interactive, setIsInteractive ] = useState(false);
  const [cost, setCost ] = useState(0);
  const [fine_multiplier, setFineMultiplier ] = useState(0);
  const [column_name, setColumnName] = useState('');
  const [new_value, setNewValue] = useState('');


  const handleAddMedia = async (event) => {
    event.preventDefault();
      const options1 = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-product',
        headers: {'Content-Type': 'application/json'},
        data: { product_id, product_type_id, product_name, cost, fine_multiplier }
      }
      const options2 = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-media',
        headers: {'Content-Type': 'application/json'},
        data: { product_id, description, publisher, publication_date, author, is_interactive, file_size }
      }
      try {

        const response1 = await axios.request(options1);
        const response2 = await axios.request(options2);

        alert(`media ${product_name} created. `);

      }
      catch(error){
        console.error(error);
        alert(`error creating media. please check fields.`);
      }
  };
  
  const handleEditMedia = async (event) => {
    event.preventDefault();
    const options1 = {
      method: 'PUT',
      url: 'https://library-management-server.herokuapp.com/api/update-media',
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

  const handleDeleteMedia = async (event) => {
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
      <h1>Media Management</h1>
      
      <h2>Add Media</h2>
<form onSubmit={handleAddMedia}>

<label> Product Name</label>
  <input type="text" value={product_name} onChange={(event) => setProductName(event.target.value)} required /><br />

<label> File Size</label>
  <input type="text" value={file_size} onChange={(event) => setFileSize(event.target.value)} required /><br />

  <label> Is Interactive</label>
        <select value={is_interactive} onChange={(event) => setIsInteractive(event.target.value)}>
                <option value=""></option>
                <option value="true">yes</option>
                <option value="false">no</option>
              </select>
              <br/>
 
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


  <label> Cost: </label>
  <input type="number" id="page-count" name="page-count" value={cost} onChange={(event) => setCost(event.target.value)} required /><br />

  <label> Fine Multiplier:</label>
  <input type="number" id="page-count" name="page-count" value={fine_multiplier} onChange={(event) => setFineMultiplier(event.target.value)} required /><br />

  <input type="submit" value="Add Media" />
</form>


      
      <h2>Edit Media</h2>
      <form onSubmit={handleEditMedia}>
        <label>Product ID:</label>
        <input type="text" id="product-id" name="book-product-id" value={product_id} onChange={(event) => setProductID(event.target.value)} required /><br />
        
        <label>Column to Update:</label>
        <select value={column_name} onChange={(event) => setColumnName(event.target.value)}>
                <option value=""></option>
                <option value="author">Product ID</option>
                <option value="description">Description</option>
                <option value="publisher">Publisher</option>
                <option value="page_count">Page Count</option>
              </select>
        <br/>
        <label> New Value:</label>
        <input type="text" value={new_value} onChange={(event) => setNewValue(event.target.value)} required /><br />
        
        <input type="submit" value="Update Media" />
      </form>
      
      <h2>Delete Media</h2>
      <form onSubmit={handleDeleteMedia}>
        <label>Product ID:</label>
        <input type="text" id="book-product-id" name="book-product-id" value={product_id} onChange={(event) => setProductID(event.target.value)} required /><br />
        
        <input type="submit" value="Delete Media" />
      </form>


      <Link to="/products/media/medialist">
        <button>View Media List</button>

      </Link>
    </div>
  );
};


export default Media;