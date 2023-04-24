import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/products/books')
      .then((response) => {
        setBooks(response.data);
        //console.log(books);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('https://library-management-server.herokuapp.com/api/products')
      .then((response) => {
        setProducts(response.data);
        //console.log(books);
        //console.log(products);
        for(const obj of books){
            console.log(obj.product_id)
            
        }


      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Books List</h1>
      <ul>
        {books.map((book) => (
          <li>
            <strong>{book.product_name}</strong> by {book.author} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
