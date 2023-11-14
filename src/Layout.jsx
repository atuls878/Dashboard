import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import './App.css'

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet/>
    </>
  );
}
