
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import UserData from './components/Home/userData/UserData';
import Update from './components/Update/Update';

const router = createBrowserRouter(
  [
      {
      path: "/",
      element: <Home></Home>,
      loader:()=>fetch("http://localhost:5000/users")
    },
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
    },
    {
      path: "/user",
      element:<UserData></UserData>
    }
    ]
 )


function App() {

  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
