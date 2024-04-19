import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
  let routes = createBrowserRouter([
    {
      path:'' , element:<Layout/>,children:[{
        path:'home'
      }]
    }
  ])
  return (
    <></>
  );
}

export default App;
