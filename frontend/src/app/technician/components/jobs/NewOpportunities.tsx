export default function NewOpportunities() {
  return (
    <section className="mb-5">
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="badge bg-primary-subtle text-primary p-2">
          <i className="bi bi-lightning-charge"></i>
        </span>
        <h6 className="fw-bold mb-0">New Opportunities</h6>
      </div>

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-lg-6">
          <div className="card p-3 h-100">
            <div className="row g-3 align-items-center">
              <div className="col-4">
                <img
                  src="/hvac.png"
                  className="img-fluid rounded"
                  alt="HVAC"
                />
              </div>

              <div className="col-8">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-bold">Central AC Maintenance</h6>
                  <h6 className="fw-bold">$120</h6>
                </div>

                <small className="text-muted d-block mb-1">
                  📍 123 Maple Ave, Springfield, IL
                </small>
                <small className="text-muted d-block mb-2">
                  🕑 Today, 2:00 PM
                </small>

                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm w-50">
                    Details
                  </button>
                  <button className="btn btn-dark btn-sm w-50">
                    Accept Job →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-6">
          <div className="card p-3 h-100">
            <div className="row g-3 align-items-center">
              <div className="col-4">
                <img
                  src="/electrical.png"
                  className="img-fluid rounded"
                  alt="Electrical"
                />
              </div>

              <div className="col-8">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-bold">Home Wiring Inspection</h6>
                  <h6 className="fw-bold">$85</h6>
                </div>

                <small className="text-muted d-block mb-1">
                  📍 78 Elm St, Shelbyville, IL
                </small>
                <small className="text-muted d-block mb-2">
                  🕑 Tomorrow, 10:00 AM
                </small>

                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm w-50">
                    Details
                  </button>
                  <button className="btn btn-dark btn-sm w-50">
                    Accept Job →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
