import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import ChartsMenu from "./Components/ChartsMenu";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<ChartsMenu />} />
      <Route path="dashboard" element={<ChartsMenu />} />
      <Route path="account" element={<ChartsMenu />} />
      <Route path="payroll" element={<ChartsMenu />} />
      <Route path="reports" element={<ChartsMenu />} />
      <Route path="advisor" element={<ChartsMenu />} />
      <Route path="contacts" element={<ChartsMenu />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
