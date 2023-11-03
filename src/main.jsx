import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import About from "./components/About.jsx";
import Cart from "./components/Cart.jsx";
import CheckOut from "./components/CheckOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
       
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
