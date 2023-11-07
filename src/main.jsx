import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, Form, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";

import Cart from "./components/Cart.jsx";

import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Formdemo from "./components/Formdemo.jsx";
// import About from "./components/About.jsx";
// lazy load about component on route change
const About = React.lazy(() => import("./components/About.jsx"));



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/about",
        // element: <About />, // without lazy laod
        element: (
          <React.Suspense fallback={<h3>Loading about page</h3>}>
            <About />
          </React.Suspense>
        ),
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/post",
        element: <Formdemo />,
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
