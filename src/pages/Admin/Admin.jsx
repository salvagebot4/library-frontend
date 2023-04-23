import React from 'react';
import './Admin.css';

const Admin = () => {
  return (
    <div>Admin Page
        <div>
          {
            JSON.stringify(localStorage)

          }
        </div>
        <div>
          {
            localStorage.getItem("first_name")
          }
        </div>

    </div>
  )
}

export default Admin