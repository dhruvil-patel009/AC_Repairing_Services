export default function Stats() {
  return (
    <div className="row g-4 mt-3">
      <div className="col-md-3">
        <div className="card stat-card dark-card p-4">
          <small>Total Earnings</small>
          <h3 className="fw-bold mt-2">$2,450.00</h3>
          <small className="text-success">+12.5% this week</small>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card p-4">
          <small>Completed Jobs</small>
          <h3 className="fw-bold mt-2">12</h3>
          <small className="text-success">+2 vs last week</small>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card p-4">
          <small>Pending Actions</small>
          <h3 className="fw-bold mt-2">3</h3>
          <div className="progress mt-2">
            <div className="progress-bar bg-warning" style={{ width: "60%" }} />
          </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className="card stat-card p-4">
          <small>New Requests</small>
          <h3 className="fw-bold mt-2">5</h3>
        </div>
      </div>
    </div>
  );
}
