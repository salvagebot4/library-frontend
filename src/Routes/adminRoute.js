import { Outlet, Navigate } from 'react-router-dom';

const AdminRoute = () => {
  
    const role = localStorage.getItem('role');
    //console.log(role);
  
    if (role === 'admin')
    {
      return <Outlet />; //returns to child property page
    } else {
      return <Navigate to="/" />;
    }
  };
  
export default AdminRoute;