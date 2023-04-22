import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>The Book Nook</h1>
      <p>Welcome to The Book Nook, your one-stop-shop for managing your library data. Please select an option below:</p>

      <div className="option-container">
        <h2>Product Management</h2>
        <p>Manage your products, such as books and media, including adding, editing, and deleting them.</p>
        <Link to="/products"><button>Go to Product Management</button></Link>
      </div>

      <div className="option-container">
        <h2>User Management</h2>
        <p>Create and manage users.</p>
        <Link to="/users"><button>Create a User</button></Link>
      </div>
    </div>
  );
};

export default Home;
