import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Pages.Home/>}/>
        <Route exact path="/about" element={<Pages.About/>}/>
        <Route exact path="/products" element={<Pages.Products/>}/>
        <Route exact path="/users" element={<Pages.Users/>}/>
        <Route exact path="/products/books" element={<Pages.Books/>}/>
        <Route exact path="/products/media" element={<Pages.Media/>}/>
        <Route exact path="/products/devices" element={<Pages.Devices/>}/>
      </Routes>
    </>
  );
}

export default App;