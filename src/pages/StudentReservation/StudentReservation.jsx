import React from 'react';
import './StudentReservation.css';

const StudentReservation = () => {
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
    // Handle device reservation form submission
  }
  const handleRoomReservation = (event) => {
    event.preventDefault();
    // Handle room reservation form submission
  }

  return (
    <div> 
      <h1>Student Reservation</h1>
      <div>
      <div className="left-column">  
      <h2>Reserve Book</h2>
      <form className="left-column" onSubmit={handleBookReservation}>
        <label htmlFor="book-name">Book Name:</label>
        <input type="text" id="book-name" name="book-name" required /><br />
        
        <label htmlFor="book-author">Author:</label>
        <input type="text" id="book-author" name="book-author" required /><br />
        
        <label htmlFor="book-publisher">Publisher:</label>
        <input type="text" id="book-publisher" name="book-publisher" required /><br />
        
        <label htmlFor="book-publication-date">Publication Date:</label>
        <input type="date" id="book-publication-date" name="book-publication-date" required /><br />
        
        <label htmlFor="book-page-count">Page Count:</label>
        <input type="number" id="book-page-count" name="book-page-count" required /><br />
        
        <label htmlFor="book-description">Description:</label>
        <textarea id="book-description" name="book-description" required></textarea><br />
        
        <label htmlFor="book-product-id">Product ID:</label>
        <input type="text" id="book-product-id" name="book-product-id" required /><br />
        
        <input type="submit" value="Reserve Book" />
      </form>
      </div>
      <h2>Reserve Media</h2>
      <form className="left-column" onSubmit={handleMediaReservation}>
        <label htmlFor="media-product-id">Product ID:</label>
        <input type="text" id="media-product-id" name="media-product-id" required /><br />
        
        <label htmlFor="media-author">Author:</label>
        <input type="text" id="media-author" name="media-author" required /><br />
        
        <label htmlFor="media-description">Description:</label>
        <textarea id="media-description" name="media-description" required></textarea><br />
        
        <label htmlFor="media-publisher">Publisher:</label>
        <input type="text" id="media-publisher" name="media-publisher" required /><br />
        
        <label htmlFor="media-publication-date">Publication Date:</label>
        <input type="date" id="media-publication-date" name="media-publication-date" required /><br />
        
        <label htmlFor="media-file-size">File Size:</label>
        <input type="text" id="media-file-size" name="media-file-size" required /><br />
        
        <label htmlFor="media-is-interactive">Is Interactive:</label>
        <select id="media-is-interactive" name="media-is-interactive" required>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select><br />
        
        <input type="submit" value="Reserve Media" />
      </form>
      
      <h2>Reserve Device</h2>
<form className="right-column" onSubmit={handleDeviceReservation}>
  <label htmlFor="device-product-id">Product ID:</label>
  <input type="text" id="device-product-id" name="device-product-id" /><br />
  
  <label htmlFor="device-manufacturer">Manufacturer:</label>
  <input type="text" id="device-manufacturer" name="device-manufacturer" /><br />
  
  <label htmlFor="device-description">Description:</label>
  <textarea id="device-description" name="device-description"></textarea><br />
  
  <label htmlFor="device-reservation-date">Reservation Date:</label>
  <input type="date" id="device-reservation-date" name="device-reservation-date" /><br />
  
  <label htmlFor="device-reservation-start-time">Start Time:</label>
  <input type="time" id="device-reservation-start-time" name="device-reservation-start-time" /><br />
  
  <label htmlFor="device-reservation-end-time">End Time:</label>
  <input type="time" id="device-reservation-end-time" name="device-reservation-end-time" /><br />
  
  <input type="submit" value="Reserve Device" />
</form>
<h2>Reserve Room</h2>
<form className="right-column" onSubmit={handleRoomReservation}>
  <label htmlFor="room-name">Room Name:</label>
  <input type="text" id="room-name" name="room-name" required /><br />
  
  <label htmlFor="room-date">Date:</label>
  <input type="date" id="room-date" name="room-date" required /><br />
  
  <label htmlFor="room-start-time">Start Time:</label>
  <input type="time" id="room-start-time" name="room-start-time" min="09:00" max="21:00" required /><br />
  
  <label htmlFor="room-end-time">End Time:</label>
  <input type="time" id="room-end-time" name="room-end-time" min="09:00" max="21:00" required /><br />
  
  <input type="submit" value="Reserve Room" />
</form>

</div>
</div>
);
};

export default StudentReservation; 
