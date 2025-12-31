export default function Charts() {
  return (
    <div className="row g-4 mb-4">
      <div className="col-md-6">
        <div className="card p-4">
          <h6 className="fw-bold">Weekly Bookings</h6>
          <div className="chart-placeholder" />
        </div>
      </div>

      <div className="col-md-6">
        <div className="card p-4">
          <h6 className="fw-bold">Weekly Earnings</h6>
          <div className="chart-placeholder" />
        </div>
      </div>
    </div>
  );
}
