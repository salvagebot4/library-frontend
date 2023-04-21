import React from 'react';
import './Products.css';

const Products = () => {
    return (
        <div>
          <h1>Product Management</h1>
          
          <h2>Add Product</h2>
          <form>
              <label htmlFor="product-name">Product Name:</label>
              <input type="text" id="product-name" name="product-name" /><br />
              
              <label htmlFor="product-type">Product Type:</label>
              <input type="text" id="product-type" name="product-type" /><br />
              
              <label htmlFor="product-cost">Product Cost:</label>
              <input type="number" id="product-cost" name="product-cost" /><br />
              
              <input type="submit" value="Add Product" />
          </form>
          
          <h2>Edit Product</h2>
          <form>
              <label htmlFor="product-id">Product ID:</label>
              <input type="number" id="product-id" name="product-id" /><br />
              
              <label htmlFor="product-name">Product Name:</label>
              <input type="text" id="product-name" name="product-name" /><br />
              
              <label htmlFor="product-type">Product Type:</label>
              <input type="text" id="product-type" name="product-type" /><br />
              
              <label htmlFor="product-cost">Product Cost:</label>
              <input type="number" id="product-cost" name="product-cost" /><br />
              
              <input type="submit" value="Update Product" />
          </form>
          
          <h2>Delete Product</h2>
          <form>
              <label htmlFor="product-id">Product ID:</label>
              <input type="number" id="product-id" name="product-id" /><br />
              
              <input type="submit" value="Delete Product" />
          </form>
        </div>
    );
};

export default Products;