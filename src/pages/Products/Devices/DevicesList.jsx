import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DevicesList = () => {
  const [devices, setDevices] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/products/devices')
      .then((response) => {
        setDevices(response.data);
        // Move the loop inside the `then` block for the first `axios.get`
        for (const obj of response.data) {
          console.log(obj.product_id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Devices List</h1>
      <ul>
        {devices.map((device) => (
          <li>
            <strong>{device.product_id}</strong> by {device.manufacturer} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevicesList;
