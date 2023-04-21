import React from 'react';
import './Users.css';

const Users = () => {
    return (
        <div>
          <h1>User Management</h1>
          <h2>Create User</h2>
          <form>
            <label htmlFor="user-name">User Name:</label>
            <input type="text" id="user-name" name="user-name" /><br />
            <label htmlFor="user-type">User Type:</label>
            <select id="user-type" name="user-type">
              <option value="regular">Regular</option>
              <option value="staff">Staff</option>
            </select><br />
            <input type="submit" value="Create User" />
          </form>
        </div>
      );
    }
  
export default Users;