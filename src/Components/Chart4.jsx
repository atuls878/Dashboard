import Paper from "@mui/material/Paper";

export default function Chart4({ stats }) {
  return (
    <>
      <Paper className="charts">
        <div className="chartHeading" style={{ padding: "20px" }}>
          <h3>Account watchlist</h3>
        </div>
        <hr />
        <div id="chart4Content">
          <div className="chart4">
            <h6>Account</h6>
            <h5>Sales</h5>
            <h5>Advertising</h5>
            <h5>Inventory</h5>
            <h5>Entertainment</h5>
            <h5>Product</h5>
          </div>
          <div className="chart4">
            <h6>This Month</h6>
            {stats.map((value, index) => (
              <h5 key={index}>{value["value1"]}</h5>
            ))}
          </div>
          <div className="chart4">
            <h6>YTD</h6>
            {stats.map((value, index) => (
              <h5 key={index}>{value["value2"]}</h5>
            ))}
          </div>
        </div>
      </Paper>
    </>
  );
}
