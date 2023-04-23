import React from 'react';
import './Devices.css';
import { Link } from 'react-router-dom';


const Devices = () => {
  return (
    <div>
      <h1>Device Management</h1>

      <h2>Add Device</h2>
      <form>
        <label htmlFor="device-product-id">Product ID:</label>
        <input type="text" id="device-product-id" name="device-product-id" /><br />

        <label htmlFor="device-manufacturer">Manufacturer:</label>
        <input type="text" id="device-manufacturer" name="device-manufacturer" /><br />

        <input type="submit" value="Add Device" />
      </form>

      <h2>Edit Device</h2>
      <form>
        <label htmlFor="device-product-id">Product ID:</label>
        <input type="text" id="device-product-id" name="device-product-id" /><br />

        <label htmlFor="device-manufacturer">Manufacturer:</label>
        <input type="text" id="device-manufacturer" name="device-manufacturer" /><br />

        <input type="submit" value="Update Device" />
      </form>

      <h2>Delete Device</h2>
      <form>
        <label htmlFor="device-product-id">Product ID:</label>
        <input type="text" id="device-product-id" name="device-product-id" /><br />

        <input type="submit" value="Delete Device" />
      </form>
      <Link to="/deviceslist">
        <button>View Devices List</button>
      </Link>
    </div>
  );
};

export default Devices;