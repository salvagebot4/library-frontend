import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DevicesList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/products/devices')
      .then((response) => {
        const filteredDevices = response.data.filter(device => !device.is_deleted);
        setDevices(filteredDevices);
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
            <strong>{device.product_id} {`${device.is_deleted}`}</strong> by {device.manufacturer} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevicesList;
