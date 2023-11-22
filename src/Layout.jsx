import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";

export default function Layout() {
  const [data, setData] = useState([30, 40, 86, 42, 52, 69, 77, 23, 12, 90]);
  const [barData, setBarData] = useState([30, 40, 86, 42, 52, 69]);
  const [stats, setStats] = useState([
    { value1: "1,194.58", value2: "45, 433.89" },
    { value1: "6,789.02", value2: "24, 536.9" },
    { value1: "4,689.89", value2: "6,858" },
    { value1: "0.00", value2: "0.00" },
    { value1: "7,366.12", value2: "2,525" },
  ]);
  // .toLocaleString("en-IN")
  const dataObj = [
    {
      month: "August",
      in: 10,
      out: 20,
    },
    {
      month: "September",
      in: 20,
      out: 40,
    },
    {
      month: "October",
      in: 30,
      out: 45,
    },
    {
      month: "November",
      in: 40,
      out: 60,
    },
    {
      month: "December",
      in: 50,
      out: 80,
    },
    {
      month: "Januaury",
      in: 60,
      out: 90,
    },
  ];

  const [stackData, setStackData] = useState(dataObj);

  function genrateRandomNumbers() {
    // console.log("clicked");
    let arr = [];
    let barArr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100));

      if (barArr.length < 6) barArr.push(Math.floor(Math.random() * 100));

      if (i < 6) {
        dataObj[i]["in"] = Math.floor(Math.random() * 100);
        dataObj[i]["out"] = Math.floor(Math.random() * 100);
      }

      if (i < 5) {
        stats[i]["value1"] = Number(
          (Math.random() * 100000).toFixed(2)
        ).toLocaleString("en-IN");

        stats[i]["value2"] = Number(
          (Math.random() * 100000).toFixed(2)
        ).toLocaleString("en-IN");
      }
    }
    // console.log(arr)
    setStackData(dataObj);
    setBarData(barArr);
    setData(arr);
    setStats(stats);
  }

  function randomizeDataForChart1() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    setData(arr);
  }
  return (
    <>
      <Header genrateRandomNumbers={genrateRandomNumbers} />
      <Sidebar />
      <Outlet
        context={[data, barData, stackData, stats, randomizeDataForChart1]}
      />
    </>
  );
}
