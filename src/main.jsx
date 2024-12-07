import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Components/HomePage/Homepage";
import MainLayOut from "./Components/MainLayOut/MainLayOut";
import AddItem from "./Components/PrivateRoute/AddItem";
import ProductDetails from "./Components/PrivateRoute/ProductDetails";
import Login from "./Components/Authentication/login";
import Register from "./Components/Authentication/Register";
import AuthContext from "./Components/ContextProvider/AuthContext";
import UpdateInfo from "./Components/Authentication/UpdateInfo";
import MyEquipments from "./Components/PrivateRoute/MyEquipments";
import UpdateEquipment from "./Components/PrivateRoute/UpdateEquipment";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Error from "./Components/Error";
import Products from "./Components/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("http://localhost:5000/allItems"),
      },
      {
        path: "/allEquipments",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/allItems"),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productDetails/${params.id}`),
      },
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myEquipments/:email",
        element: (
          <PrivateRoute>
            <MyEquipments></MyEquipments>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allItems/${params.email}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/user/updateInfo",
        element: (
          <PrivateRoute>
            <UpdateInfo></UpdateInfo>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateEquipment/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/updateEquipment/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>
);
