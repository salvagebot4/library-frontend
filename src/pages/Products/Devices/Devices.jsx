import { React, useState } from 'react';
//import './Devices.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import BooksList from './BooksList';

//to do list
// set equal to zero (useState = (0) for cost / fine_mult, name is empty string
// add variable for fine_multiplier, product_name, and cost
// add forms for fine_multiplier, product_name, and cost
// test forms with console.log()


const Devices = () => {
  const product_type_id = 2; //ensures that the type of product is a device
  const [manufacturer, setManufacturer] = useState('');
  const [product_id, setProductID] = useState('');
  const [product_name, setProductName ] = useState('');
  const [cost, setCost ] = useState(0);
  const [fine_multiplier, setFineMultiplier ] = useState(0);
  const column_name = "manufacturer";
  const [new_value, setNewValue] = useState('');

  const handleAddDevice = async (event) => {
    event.preventDefault();
      const options1 = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-product',
        headers: {'Content-Type': 'application/json'},
        data: { product_id, product_type_id, product_name, cost, fine_multiplier }
      }
      const options2 = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-device',
        headers: {'Content-Type': 'application/json'},
        data: { product_id, manufacturer }
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
        alert(`device ${product_name} created. `);

      }
      catch(error){
        console.error(error);
        alert(`error creating device. please check fields.`);
      }
  };

  const handleEditDevice = async (event) => {
    event.preventDefault();
    const options1 = {
      method: 'PUT',
      url: 'https://library-management-server.herokuapp.com/api/update-device',
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

  const handleDeleteDevice = async (event) => {
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
      <h1>Device Management</h1>
      
      <h2>Add Device</h2>
<form onSubmit={handleAddDevice}>
  <label> Manufacturer:</label>
  <textarea id="description" name="description" value={manufacturer} onChange={(event) => setManufacturer(event.target.value)} required ></textarea><br />

  <label>Product ID:</label>
  <input type="text" id="product-id" name="product-id" value={product_id} onChange={(event) => setProductID(event.target.value)} required /><br />

  <label> Product Name</label>
  <input type="text" value={product_name} onChange={(event) => setProductName(event.target.value)} required /><br />

  <label> Cost: </label>
  <input type="number" id="page-count" name="page-count" value={cost} onChange={(event) => setCost(event.target.value)} required /><br />

  <label> Fine Multiplier:</label>
  <input type="number" id="page-count" name="page-count" value={fine_multiplier} onChange={(event) => setFineMultiplier(event.target.value)} required /><br />

  <input type="submit" value="Add Devices" />
</form>


      <h2>Edit Device</h2>
      <form onSubmit={handleEditDevice}>
        <label>Product ID:</label>
        <input type="text" id="product-id" name="book-product-id" value={product_id} onChange={(event) => setProductID(event.target.value)} required /><br />
        
        <label> New Manufacturer:</label>
        <input type="text" value={new_value} onChange={(event) => setNewValue(event.target.value)} required /><br />
        
        <input type="submit" value="Update Device" />
      </form>
      
      <h2>Delete Device</h2>
      <form onSubmit={handleDeleteDevice}>
        <label>Product ID:</label>
        <input type="text" id="book-product-id" name="book-product-id" value={product_id} onChange={(event) => setProductID(event.target.value)} required /><br />
        
        <input type="submit" value="Delete Device" />
      </form>


      <Link to="/products/devices/deviceslist">
        <button>View Devices List</button>

      </Link>
    </div>
  );
};

export default Devices;