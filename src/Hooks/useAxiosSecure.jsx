

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';
// import axios from 'axios';

// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:5000', 
// });

// const useAxiosSecure = () => {
//   const { logOut } = useAuth(); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     axiosSecure.interceptors.request.use((config) => {
//       const token = localStorage.getItem('access-token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });

//     axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         if (error.response && (error.response.status === 401 || error.response.status === 403)) {
//           await logOut();
//           navigate('/login');
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [logOut, navigate]);

//   return [axiosSecure];
// };

// export default useAxiosSecure;

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000', 
});

const useAxiosSecure = () => {
  const { logOut } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    // Cleanup function
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
