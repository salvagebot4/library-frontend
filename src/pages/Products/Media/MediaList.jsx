import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MediaList = () => {
  const [medias, setMedia] = useState([]);


  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/products/medias')
      .then((response) => {
        const filteredMedia = response.data.filter(media => !media.is_deleted);
        setMedia(filteredMedia);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Media List</h1>
      <ul>
        {medias.map((media) => (
          <li key={media.product_id}>
            <strong>{media.product_name}</strong> by {media.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaList;
