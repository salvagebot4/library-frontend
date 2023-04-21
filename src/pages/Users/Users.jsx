import React from 'react';
import './Users.css';

const Users = () => {
  return (
    <div>
      <h1>User Management</h1>
      <h2>Create User</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" /><br />

        <label htmlFor="role">Role:</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select><br />

        <label htmlFor="item-limit">Item Limit:</label>
        <input type="date" id="item-limit" name="item-limit" /><br />

        <label htmlFor="day-limit">Day Limit:</label>
        <input type="date" id="day-limit" name="day-limit" /><br />

        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" name="first-name" /><br />

        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" name="last-name" /><br />

        <label htmlFor="enabled">Enabled:</label>
        <input type="checkbox" id="enabled" name="enabled" /><br />

        <input type="submit" value="Create User" />
      </form>
    </div>
  );
}

export default Users;
