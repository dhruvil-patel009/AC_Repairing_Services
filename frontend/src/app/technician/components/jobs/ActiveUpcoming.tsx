export default function ActiveUpcoming() {
  return (
    <section className="mb-5">
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="badge bg-success-subtle text-success p-2">
          <i className="bi bi-calendar-check"></i>
        </span>
        <h6 className="fw-bold mb-0">Active & Upcoming</h6>
      </div>

      <div className="row g-4">
        {/* Accepted */}
        <div className="col-lg-6">
          <div className="card p-4 h-100">
            <span className="badge bg-success mb-2 w-fit">ACCEPTED</span>
            <h6 className="fw-bold mb-1">Refrigerator Repair</h6>
            <small className="text-muted">Sarah Smith</small>

            <div className="mt-3 text-success">
              🕑 Today, 4:30 PM
            </div>
            <small className="text-muted">📍 456 Oak Ln, Apt 4B</small>

            <button className="btn btn-success w-100 mt-3">
              Start Job
            </button>
          </div>
        </div>

        {/* Pending */}
        <div className="col-lg-6">
          <div className="card p-4 h-100">
            <span className="badge bg-warning mb-2 w-fit">PENDING</span>
            <h6 className="fw-bold mb-1">Washer Leak Fix</h6>
            <small className="text-muted">Mike Ross</small>

            <div className="mt-3 text-warning">
              🕑 Wed, Oct 24, 9:00 AM
            </div>
            <small className="text-muted">📍 990 Lake Dr, Villa 2</small>

            <button className="btn btn-outline-secondary w-100 mt-3">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
