import { React, useState } from 'react';
import './Devices.css';
import {Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Devices = () => {
  //POST ROUTE
  const [product_id, setProductID] = useState('');
  //PUT ROUTE
  const [manufacturer, setManufacturer] = useState('');
  const [is_deleted, setDeleted] = useState('');
  const handleCreateDevice= async (event) => {
    event.preventDefault();
  

      const options = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/add-device',
        headers: {'Content-Type': 'application/json'},
        data: { product_id, manufacturer , is_deleted}
    };


    try {
        const response = await axios.request(options);
        //const responseData = response.data;
        //console.log(responseData[0]);
        alert(`Device ${product_id} ${manufacturer} ${is_deleted}  created`)


    } catch (error) {
      console.log(error);
    }

  };
  const handleEditDevice = async (event) => {
    event.preventDefault();

    const options = {
      method: 'PUT',
      url: 'https://library-management-server.herokuapp.com/api/update-device',
      headers: { 'Content-Type': 'application/json' },
      data: {  product_id: product_id, manufacturer: manufacturer , is_deleted: is_deleted}
    };
try {
        const response = await axios.request(options);
        //const responseData = response.data;
        //console.log(responseData[0]);
        alert(`Book  ${product_id} ${is_deleted} ${manufacturer}   updated`)


    } catch (error) {
      console.log(error);
    }
};
  return (
    <div>
    <h1>Device Management</h1>

    <h2>Add Device</h2>
    <Form onSubmit={handleCreateDevice}>
      <Form.Group controlId="device-product-id">
        <Form.Label>Product ID:</Form.Label>
        <Form.Control type="text" placeholder="Enter product ID" onChange={(e) => setProductID(e.target.value)} />
      </Form.Group>
      
      <Form.Group controlId="device-manufacturer">
        <Form.Label>Manufacturer:</Form.Label>
        <Form.Control type="text" placeholder="Enter manufacturer name" onChange={(e) => setManufacturer(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add Device
      </Button>
    </Form>

    <h2>Edit Device</h2>
    <Form onSubmit={handleEditDevice}>
      <Form.Group controlId="device-product-id">
        <Form.Label>Product ID:</Form.Label>
        <Form.Control type="text" placeholder="Enter product ID" onChange={(e) => setProductID(e.target.value)} />
      </Form.Group>
      
      <Form.Group controlId="device-manufacturer">
        <Form.Label>Manufacturer:</Form.Label>
        <Form.Control type="text" placeholder="Enter manufacturer name" onChange={(e) => setManufacturer(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="device-is-deleted">
  <Form.Label>Deleted:</Form.Label>
  <Form.Control as="select" onChange={(e) => setDeleted(e.target.value)} drop="down">
    <option value="false">No</option>
    <option value="true">Yes</option>
  </Form.Control>
</Form.Group>
      <Button variant="primary" type="submit">
        Update Device
      </Button>
    </Form>
    <Link to="/deviceslist">
        <button>View Devices List</button>
      </Link>


</div>
  );
};

export default Devices;