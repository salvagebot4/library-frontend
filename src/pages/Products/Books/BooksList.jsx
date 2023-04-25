import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/products/books')
      .then((response) => {
        const filteredBooks = response.data.filter(book => !book.is_deleted);
        setBooks(filteredBooks);

        //console.log(books);
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
            <strong>{book.product_name} {book.product_id}</strong> by {book.author} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
