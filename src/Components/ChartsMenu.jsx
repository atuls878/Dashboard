import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart4 from "./Chart4";
import Chart3 from "./Chart3";
import { useState } from "react";

export default function ChartsMenu() {
  const [data, setData] = useState([30, 40, 86, 42, 52, 69, 77, 23, 12, 90]);
  const [barData, setBarData] = useState([30, 40, 86, 42, 52, 69]);

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
    let arr = [],
      barArr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 100));

      if (barArr.length < 6) barArr.push(Math.floor(Math.random() * 100));

      if (i < 6) {
        dataObj[i]["in"] = Math.floor(Math.random() * 100);
        dataObj[i]["out"] = Math.floor(Math.random() * 100);
      }
    }
    // console.log(arr);
    setStackData(dataObj);
    setBarData(barArr);
    setData(arr);
  }

  return (
    <div id="chartsMenu">
      <div className="row1">
        <Chart1 data={data} genrateRandomNumbers={genrateRandomNumbers} />
        <Chart2 data={barData} />
      </div>
      <div className="row2">
        <Chart3 data={stackData} />
        <Chart4 />
      </div>
    </div>
  );
}
