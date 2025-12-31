export default function Performance() {
  return (
    <div className="card p-4">
      <h6 className="fw-bold">Performance</h6>

      <div className="mt-3">
        <div className="d-flex justify-content-between">
          <small>Customer Rating</small>
          <small>4.9 ⭐</small>
        </div>
        <div className="progress mt-1">
          <div className="progress-bar bg-warning" style={{ width: "98%" }} />
        </div>
      </div>

      <div className="mt-3">
        <div className="d-flex justify-content-between">
          <small>Response Time</small>
          <small>Top 10%</small>
        </div>
        <div className="progress mt-1">
          <div className="progress-bar bg-primary" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}
