import Paper from "@mui/material/Paper";
import { useRef, useEffect } from "react";
import { select, line, curveCardinal, axisBottom, scaleLinear } from "d3";
import Dropdown from "./Dropdown";

export default function Chart1({ data, genrateRandomNumbers }) {
  const svgRef = useRef();
  
  useEffect(() => {
    // console.log(svgRef);
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 550]);

    const yScale = scaleLinear().domain([0, 99]).range([100, 0]);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y((value) => yScale(value))
      .curve(curveCardinal);

    svg
      .append("g")
      .style("transform", "translate(5px,140px)")
      .style("font-size", "12px")
      .style("color", "grey")
      .call(axisBottom(xScale).tickSize(0).ticks(10))
      .call((g) => g.select(".domain").remove());

    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "#79AC78")
      .attr("stroke-width", "2px");
  }, [data]);

  return (
    <>
      <Paper className="charts">
        <div className="chartHeading">
          <h3>Checking Account</h3>
          <div>
            <Dropdown
              genrateRandomNumbers={genrateRandomNumbers}
              array={["Option1", "Option2"]}
              heading="Manage"
              
            />
            <Dropdown
              genrateRandomNumbers={genrateRandomNumbers}
              array={["Januaury", "February"]}
              heading="Januaury"
              
            />
          </div>
        </div>
        <div>
          <hr />
          <svg id="chart1" ref={svgRef}></svg>
        </div>
      </Paper>
    </>
  );
}
