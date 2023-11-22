import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import Chart4 from "./Chart4";
import Chart3 from "./Chart3";
import { useOutletContext } from "react-router-dom";

export default function ChartsMenu() {
  const [chart1Data, chart2Data, chart3Data,stats ,randomizeDataForChart1] = useOutletContext();

  return (
    <div id="chartsMenu">
      <div className="row1">
        <Chart1
          data={chart1Data}
          randomizeDataForChart1={randomizeDataForChart1}
        />
        <Chart2 data={chart2Data} />
      </div>
      <div className="row2">
        <Chart3 data={chart3Data} />
        <Chart4 stats={stats}/>
      </div>
    </div>
  );
}
