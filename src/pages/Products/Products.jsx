import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
//TODO handle submits for Books, Media, and Devices




const Products = () => {
    return (
        <div>
            <h1>Product Management</h1>
            <div className="option-container">
                <h2>Choose Product Type</h2>
                <p>Select the type of product you'd like to manage:</p>
                <Link to="/products/books"><button>Books</button></Link>
                <Link to="/products/media"><button>Media</button></Link>
                <Link to="/products/devices"><button>Devices</button></Link>
            </div>
        </div>
    );
};

export default Products;
