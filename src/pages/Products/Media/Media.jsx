import React from 'react';
import './Media.css';
import { Link } from 'react-router-dom';

const Media = () => {
    return (
        <div>
            <h1>Media Management</h1>
          
            <h2>Add Media</h2>
            <form>
                <label htmlFor="product-id">Product ID:</label>
                <input type="text" id="product-id" name="product-id" /><br />
              
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" /><br />
              
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea><br />
              
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" id="publisher" name="publisher" /><br />
              
                <label htmlFor="publication-date">Publication Date:</label>
                <input type="date" id="publication-date" name="publication-date" /><br />
              
                <label htmlFor="file-size">File Size:</label>
                <input type="text" id="file-size" name="file-size" /><br />
              
                <label htmlFor="is-interactive">Is Interactive:</label>
                <input type="checkbox" id="is-interactive" name="is-interactive" /><br />
              
                <input type="submit" value="Add Media" />
            </form>
          
            <h2>Edit Media</h2>
            <form>
                <label htmlFor="product-id">Product ID:</label>
                <input type="text" id="product-id" name="product-id" /><br />
              
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" name="author" /><br />
              
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea><br />
              
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" id="publisher" name="publisher" /><br />
              
                <label htmlFor="publication-date">Publication Date:</label>
                <input type="date" id="publication-date" name="publication-date" /><br />
              
                <label htmlFor="file-size">File Size:</label>
                <input type="text" id="file-size" name="file-size" /><br />
              
                <label htmlFor="is-interactive">Is Interactive:</label>
                <input type="checkbox" id="is-interactive" name="is-interactive" /><br />
              
                <input type="submit" value="Update Media" />
            </form>
          
            <h2>Delete Media</h2>
            <form>
                <label htmlFor="product-id">Product ID:</label>
                <input type="text" id="product-id" name="product-id" /><br />
              
                <input type="submit" value="Delete Media" />
            </form>
            <Link to="/products/media/medialist">
        <button>View Media List</button>
      </Link>
    </div>
    );
};

export default Media;
