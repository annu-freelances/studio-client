import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../utils/axios'

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await instance.get("/me", { withCredentials: true });
      } catch (error) {
        navigate('/admin/login');
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default ProtectedRoutes;
