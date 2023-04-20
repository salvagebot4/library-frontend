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

      </Routes>
    </>
  );
}

export default App;
