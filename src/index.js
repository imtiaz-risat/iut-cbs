import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Team from "../src/pages/Team";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Intern from "./pages/Intern";
import Biznation from "./pages/Biznation";
import CareerExpo from "./pages/CareerExpo";
import NeoTalk from "./pages/NeoTalk";
import HallOfFame from "./pages/HallOfFame";
import Publication from "./pages/Publication";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/biznation",
    element: <Biznation />,
  },
  {
    path: "/career-expo",
    element: <CareerExpo />,
  },
  {
    path: "/intern",
    element: <Intern />,
  },
  {
    path: "/neotalk",
    element: <NeoTalk />,
  },
  {
    path: "/hall-of-fame",
    element: <HallOfFame />,
  },
  {
    path: "/publication",
    element: <Publication />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
