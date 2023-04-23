import { React, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Users.css';
import axios from 'axios';

//TODO: 
// make a form for password entry

// capture all variables (email and password from form)
// and save them in useState variables to pass through axios request.

// change the dropdown to reflect our schema


const Users = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  

  const handleCreateUser = async (event) => {
    event.preventDefault();
    console.log(email);


      const options = {
        method: 'POST',
        url: 'https://library-management-server.herokuapp.com/api/register-user',
        headers: {'Content-Type': 'application/json'},
        data: { email, password, role, first_name, last_name }
    };


    try {
        const response = await axios.request(options);
        //const responseData = response.data;
        //console.log(responseData[0]);
        alert(`User ${first_name} ${last_name} created`)


    } catch (error) {
      console.log(error);
    }

  };


    return (
        <div>
          <h1>User Management</h1>
          <h2>Create User</h2>
          <form>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required /><br />
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required /><br />
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" value={first_name} onChange={(event) => setFirstName(event.target.value)} required /><br />
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" value={last_name} onChange={(event) => setLastName(event.target.value)} required /><br />
            <label htmlFor="user-type">User Type:</label>
            <select id="user-type" name="user-type" required onChange={(event) => setRole(event.target.value)}>
              <option value="">Select a user type</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
            </select><br />
            <input type="submit" value="Create User" onClick={handleCreateUser} />
          </form>
        </div>
      );
    }
  
export default Users;
