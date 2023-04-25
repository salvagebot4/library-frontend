import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import axios from 'axios';


const User = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/userMostActiveReports')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User Reports</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number of Checkouts</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.first_name}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.num_checkouts}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default User;