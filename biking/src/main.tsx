import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./components/homepage/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BikeDetails from "./components/bike details/BikeDetails";
import Layout from "./components/main layout/Layout";
import BikeList from "./components/bike list/BikeList";
import BikeReview from "./components/bike review/BikeReview";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap with Layout
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/checkout/:name", element: <BikeDetails /> },
      { path: "/brand/:brand", element: <BikeList /> },
      { path: "/brand/:brand/checkout/:name", element: <BikeDetails /> },
      { path: "/checkout/review/:name", element: <BikeReview /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
