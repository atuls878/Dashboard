import Paper from "@mui/material/Paper";
import { useRef, useEffect } from "react";
import { select, axisBottom, scaleLinear, scaleBand, stack, max } from "d3";

export default function Chart3({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const colors = {
      out: "#38e54d",
      in: "#79AC78",
    };

    const w = 600;
    const h = 100;
    const svg = select(svgRef.current);

    const stackGenerator = stack().keys(["out", "in"]);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1])),
    ];
    console.log(extent);
    const xScale = scaleBand()
      .domain(data.map((value) => value.month))
      .range([0, w])
      .padding(0.8);

    const yScale = scaleLinear().domain(extent).range([h, 0]);

    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("x", (sequence) => xScale(sequence.data.month))
      .attr("width", xScale.bandwidth())
      .attr("y", (sequence) => yScale(sequence[1]))
      .attr("height", (sequence) => yScale(sequence[0]) - yScale(sequence[1]))


    svg
      .append("g")
      .style("transform", "translate(5px,140px)")
      .style("font-size", "12px")
      .style("color", "grey")
      .call(
        axisBottom(
          scaleBand()
            .domain(data.map((val, i) => val.month))
            .range([0, w])
            .padding(0.8)
        )
          .tickSize(0)
          .ticks(6)
      )
      .call((g) => g.select(".domain").remove());
  }, [data]);

  return (
    <>
      <Paper className="charts">
        <div className="chartHeading">
          <h3>Total cash flow</h3>
          <div id="inOut">
            <div className="circle" style={{backgroundColor:'#79AC78'}}></div>
            <h6>in</h6>
            <div className="circle" style={{backgroundColor:'#38e54d'}}></div>
            <h6>out</h6>
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
