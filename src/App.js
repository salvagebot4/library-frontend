import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import * as Components from './components';
import AdminRoute from './Routes/adminRoute';
import UserRoute from './Routes/userRoute';
import './App.css';


function App() {

  return (
    <>
      <Components.Navbar />
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Pages.Home/>}/>
        <Route exact path="/about" element={<Pages.About/>}/>

        <Route exact path="/products" element={<Pages.Products/>}/>
        {/* <Route exact path="/users" element={<Pages.Users/>}/> */}
        <Route exact path="/products/books" element={<Pages.Books/>}/>
        <Route exact path="/products/books/bookslist" element={<Pages.BooksList />} />
        <Route exact path="/products/media" element={<Pages.Media/>}/>
        <Route exact path="/products/media/medialist" element={<Pages.MediaList/>}/>
        <Route exact path="/products/devices" element={<Pages.Devices/>}/>
        <Route exact path="/products/devices/deviceslist" element={<Pages.DevicesList/>}/>


        <Route exact path="/login" element={<Pages.Login />} />
        <Route exact path="/StudentReservation" element={<Pages.StudentReservation />} />
        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route element={<Pages.Home />} path="/" exact />
          <Route element={<Pages.Admin />} path="/admin" />
        </Route>

        {/* User Routes */}
        <Route element={<UserRoute />}>
          <Route element={<Pages.Home />} path="/" exact />
          <Route element={<Pages.User />} path="/user" />
        </Route>

      </Routes>
    </>
  );
}

export default App;
