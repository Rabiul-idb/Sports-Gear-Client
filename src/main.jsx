import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';
import MainLayOut from './Components/MainLayOut/MainLayOut';
import AddItem from './Components/AddItem';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Authentication/login';
import Register from './Components/Authentication/Register';
import AuthContext from './Components/ContextProvider/AuthContext';
import UpdateInfo from './Components/Authentication/UpdateInfo';
import MyEquipments from './Components/PrivateRoute/MyEquipments';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path: "/",
        element:<Homepage></Homepage>,
        loader: () => fetch('http://localhost:5000/allItems'),
      },
      {
        path: "/productDetails/:id",
        element:<ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/productDetails/${params.id}`),
      },
      {
        path: "/addItem",
        element: <AddItem></AddItem>
      },
      {
        path: "/myEquipments/:email",
        element: <MyEquipments></MyEquipments>,
        loader: ({params}) => fetch(`http://localhost:5000/allItems/${params.email}`),

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/user/updateInfo",
        element: <UpdateInfo></UpdateInfo>
      }
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>,
)
