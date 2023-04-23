import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom';
/*TODO: make a link in a button,create pages and management pages will have their own subpage */



const Admin = () => {
  return (
    <div>
      <div>Admin Page</div>
      <Link to="/products"> <button>Product Management</button> </Link>
      <Link to="/users"><button>User Management</button> </Link>
      <Link to="/products/books"><button>Book Management</button> </Link>
      <Link to="/products/devices"><button>Devices Management</button> </Link>
      <Link to="/products/media"><button>Media Management</button> </Link>
    </div>
  
  )
}

export default Admin;