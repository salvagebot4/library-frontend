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
        <Route exact path="/login" element={<Pages.Login />} />

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
