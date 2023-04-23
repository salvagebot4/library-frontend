import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DevicesList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/products/devices')
      .then((response) => {
        setDevices(response.data);
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
