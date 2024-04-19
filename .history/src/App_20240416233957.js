import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';

function App() {
  let routes = createBrowserRouter([
    {
      path:'' , element:<Layout/>,children:[
        {path:'home', element:<Home/>},
        {path:'register' , element:}

      ]
    }
  ])
  return (
    <></>
  );
}

export default App;
