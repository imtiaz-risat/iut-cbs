import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Team from "../src/pages/Team";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intern from "./pages/Intern";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/intern",
    element: <Intern />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
