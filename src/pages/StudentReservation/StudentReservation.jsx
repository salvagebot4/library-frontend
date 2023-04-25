import { React, useEffect, useState } from 'react';
import './StudentReservation.css';
import axios from 'axios';


const StudentReservation = () => {
  const [selectedBook, setSelectedBook] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState('');
  const [medias, setMedias] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');
  const [devices, setDevices] = useState([]);


  useEffect(() => {
    axios.get('https://library-management-server.herokuapp.com/api/products/books')
      .then(response => {
        const filteredBooks = response.data.filter(book => !book.is_deleted);
        setBooks(filteredBooks);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get('https://library-management-server.herokuapp.com/api/products/medias')
        .then(response => {
          const filteredMedias = response.data.filter(media => !media.is_deleted);
          setMedias(filteredMedias);
        })
        .catch(error => {
          console.log(error);
        });
    axios.get('https://library-management-server.herokuapp.com/api/products/devices')
        .then(response => {
          const filteredDevices = response.data.filter(device => !device.is_deleted);
          setDevices(filteredDevices);
        })
        .catch(error => {
          console.log(error);
      });
  }, []);

  const handleBookReservation = (event) => {
    event.preventDefault();
    // Handle book reservation form submission
  }
  const handleMediaReservation = (event) => {
    event.preventDefault();
    // Handle media reservation form submission
  }
  const handleDeviceReservation = (event) => {
    event.preventDefault();
    // Handle media reservation form submission
  }

  return (
    <div>
      <h1>Student Reservation</h1>
      <div>
        <div className="left-column">
          <h2>Reserve Book</h2>
          <form className="left-column" onSubmit={handleBookReservation}>
            <label htmlFor="book-name">Book Name:</label>
            <select id="book-name" name="book-name" value={selectedBook} onChange={(event) => setSelectedBook(event.target.value)}>
              <option value="">Select a book</option>
              {books.map((book) => (
                <option key={book.id} value={book.id}>
                  {book.product_name} by {book.author}
                </option>
              ))}
            </select>
            <br />
            <input type="submit" value="Reserve Book" disabled={!selectedBook} />
          </form>
        </div>
        <div className="left-column">
          <h2>Reserve Media</h2>
          <form className="left-column" onSubmit={handleMediaReservation}>
            <label htmlFor="media-name">Media Name:</label>
            <select id="media-name" name="media-name" value={selectedMedia} onChange={(event) => setSelectedMedia(event.target.value)}>
              <option value="">Select media</option>
              {medias.map((media) => (
                <option key={media.id} value={media.id}>
                  {media.product_name} 
                </option>
              ))}
            </select>
            <br />
            <input type="submit" value="Reserve Media" disabled={!selectedMedia} />
          </form>
        </div>
        <div className="right-column">
          <h2>Reserve Device</h2>
          <form className="right-column" onSubmit={handleDeviceReservation}>
          <label htmlFor="device-name">Device Name:</label>
          <select id="device-name" name="device-name" value={selectedDevice} onChange={(event) => setSelectedDevice(event.target.value)}>
          <option value="">Select a device</option>
          {devices.map((device) => (
            <option key={device.id} value={device.id}>
              {device.product_name} {device.product_id} by {device.author}
            </option>
          ))}
          </select>
          <br />
          <input type="submit" value="Reserve Device" disabled={!selectedDevice} />
      </form>
    </div>
  </div>
</div>
);
}

export default StudentReservation;