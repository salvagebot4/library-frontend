import React from 'react';
import './Items.css';

const Items = () => {
    return (
        <div>
          <h1>Item Management</h1>
          
          <h2>Add Item</h2>
          <form>
              <label htmlFor="item-name">Item Name:</label>
              <input type="text" id="item-name" name="item-name" /><br />
              
              <label htmlFor="item-description">Item Description:</label>
              <textarea id="item-description" name="item-description"></textarea><br />
              
              <label htmlFor="item-price">Item Price:</label>
              <input type="number" id="item-price" name="item-price" /><br />
              
              <input type="submit" value="Add Item" />
          </form>
          
          <h2>Edit Item</h2>
          <form>
              <label htmlFor="item-id">Item ID:</label>
              <input type="number" id="item-id" name="item-id" /><br />
              
              <label htmlFor="item-name">Item Name:</label>
              <input type="text" id="item-name" name="item-name" /><br />
              
              <label htmlFor="item-description">Item Description:</label>
              <textarea id="item-description" name="item-description"></textarea><br />
              
              <label htmlFor="item-price">Item Price:</label>
              <input type="number" id="item-price" name="item-price" /><br />
              
              <input type="submit" value="Update Item" />
          </form>
          
          <h2>Delete Item</h2>
          <form>
              <label htmlFor="item-id">Item ID:</label>
              <input type="number" id="item-id" name="item-id" /><br />
              
              <input type="submit" value="Delete Item" />
          </form>
        </div>
    );
};

export default Items;
