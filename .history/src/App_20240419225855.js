import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  RecoilRoot,
 } from 'recoil';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import InverseProtectedRoute from './Components/InverseProtectedRoute/InverseProtectedRoute';

function App() {
  let routes = createBrowserRouter([
    {
      path:'' , element:<Layout/>,children:[   
        {index:true , element: <Register/>},        
        {path:'./login' , element:<Login/>  },
        {path:'./home', element:<Home/>},
      ]
    }
  ])
  return (
    <>
    <RecoilRoot>
    <RouterProvider router={routes}></RouterProvider>
    </RecoilRoot>
    </>
  );
}

export default App;


// {index:true , element:<InverseProtectedRoute> <Register/></InverseProtectedRoute>},        
// {path:'./login' , element:<InverseProtectedRoute><Login/> </InverseProtectedRoute>  },