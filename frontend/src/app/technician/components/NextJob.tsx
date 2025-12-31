export default function NextJob() {
  return (
    <div className="card p-4 text-white" style={{ background: "#1d4ed8" }}>
      <small className="opacity-75">NEXT JOB</small>
      <h5 className="fw-bold mt-2">Central Hospital</h5>
      <small>HVAC Maintenance – Unit 4</small>

      <div className="d-flex gap-3 mt-3">
        <small>🕑 2:00 PM Today</small>
        <small>📍 4.2 mi away</small>
      </div>

      <button className="btn btn-light fw-semibold mt-4">
        Start Navigation
      </button>
    </div>
  );
}
