import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MediaList = () => {
  const [media, setMedia] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/products/medias')
      .then((response) => {
        setMedia(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('https://library-management-server.herokuapp.com/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Media List</h1>
      <ul>
        {media.map((item) => (
          <li key={item.product_id}>
            <strong>{item.product_id}</strong> by {item.manufacturer} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaList;
