import Paper from "@mui/material/Paper";
import { useRef, useEffect, useState } from "react";
import { select, axisBottom, scaleLinear, scaleBand } from "d3";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from '@mui/material/styles';

export default function Chart2({ data }) {
  // console.log(data)
  const svgRef = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
    backgroundcolor: "#8DDFCB",
    color:'red'
  });

  function fileUpload() {
    setIsClicked((prev) => !prev);
  }

  useEffect(() => {
    const w = 600;
    const h = 100;
    const svg = select(svgRef.current);

    const xScale = scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.8);

    const yScale = scaleLinear().domain([0, h]).range([h, 0]);

    svg
      .append("g")
      .style("transform", "translate(5px,140px)")
      .style("font-size", "12px")
      .style("color", "grey")
      .call(
        axisBottom(
          scaleBand()
            .domain(
              [
                "Older",
                "Jan 01-08",
                "Jan 09-16",
                "Jan 17-24",
                "Jan 25-31",
                "Future",
              ].map((val, i) => val)
            )
            .range([0, w])
            .padding(0.8)
        )
          .tickSize(0)
          .ticks(6)
      )
      .call((g) => g.select(".domain").remove());

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val))
      .attr("fill", "#38e54d")
      .attr("rx", 5);
  }, [data]);

  return (
    <>
      <Paper className="charts">
        <div className="chartHeading">
          <h3>Invoices owed to you</h3>
          <Button
            variant="contained"
            size="small"
            style={{
              margin: "12px",
              backgroundColor: "#8DDFCB",
              color: "#79AC78",
              fontWeight: "bold",
            }}
            onClick={fileUpload}
          >
            New Sales Invoice
          </Button>
        </div>
        <div>
          <hr />
          <svg id="chart1" ref={svgRef}></svg>
        </div>
      </Paper>
      {isClicked && (
        <div id="fileUpload">
          <Button id="close" onClick={fileUpload}>
            <CloseIcon />
          </Button>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            id="upload"
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
      )}
    </>
  );
}
