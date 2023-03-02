import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loaders from "./page/Loaders";
import Tab from "./page/Tab";
import BigSpinner from "./components/BigSpinner";
import App from "./App";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import RoomList from "./page/RoomList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "loaders",
        element: <Loaders />,
      },
      {
        path: "tab",
        element: <Tab />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "room",
        element: <RoomList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} fallbackElement={<BigSpinner />} />
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();
