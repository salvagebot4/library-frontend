import { Outlet, Navigate } from 'react-router-dom';

const UserRoute = () => {
  
    const role = localStorage.getItem('role');
    //console.log(role);
  
    if (role === 'student' || role === 'faculty')
    {
      return <Outlet />; //returns to child property page
    } else {
      return <Navigate to="/" />;
    }
  };
  
export default UserRoute;