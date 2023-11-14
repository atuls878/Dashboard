import Paper from "@mui/material/Paper";

export default function Chart4() {
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
            <h5>1,194.25</h5>
            <h5>6789.02</h5>
            <h5>4,689.89</h5>
            <h5>0</h5>
            <h5>7,366.12</h5>
          </div>
          <div className="chart4">
            <h6>YTD</h6>
            <h5>4,57,433.89</h5>
            <h5>24,536.9</h5>
            <h5>6,858</h5>
            <h5>0</h5>
            <h5>2,525</h5>
          </div>
        </div>
      </Paper>
    </>
  );
}
