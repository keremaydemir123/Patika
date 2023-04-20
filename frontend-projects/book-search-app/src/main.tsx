import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import BooksProvider from "./context/BooksProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/book/:id",
    element: <DetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
  </React.StrictMode>
);
