
import { Calendar, Plus, MapPin } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-vh-100">
      {/* <BootstrapNav /> */}

      <main className="container py-5">
        <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <h1 className="display-6 fw-bold mb-2">Dashboard Overview</h1>
            <p className="text-muted lead fs-6">
              Good morning, <span className="fw-bold text-dark">Alex!</span> You have
              <span className="fw-bold text-primary mx-1">5 new</span> updates today.
            </p>
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-white shadow-sm border-0 d-flex align-items-center gap-2 py-2 px-3">
              <Calendar className="text-muted" size={18} />
              <span className="fw-semibold">This Week</span>
            </button>
            <button className="btn btn-primary shadow-sm d-flex align-items-center gap-2 py-2 px-4">
              <Plus size={20} />
              Log Activity
            </button>
          </div>
        </header>

        {/* <BootstrapStats /> */}

        <div className="row g-4 mt-4">
          {/* Recent Activity Table */}
          <div className="col-12 col-lg-8">
            <div className="card p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Recent Activity</h5>
                <a href="#" className="text-decoration-none small fw-bold">
                  View All ›
                </a>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless align-middle">
                  <thead className="text-muted small border-bottom">
                    <tr>
                      <th className="pb-3">JOB ID</th>
                      <th className="pb-3">CUSTOMER</th>
                      <th className="pb-3">LOCATION</th>
                      <th className="pb-3">DATE</th>
                      <th className="pb-3 text-end">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="badge bg-light text-muted fw-normal">#JC-1024</span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="bg-light rounded-circle d-flex align-items-center justify-content-center fw-bold"
                            style={{ width: "32px", height: "32px", fontSize: "12px" }}
                          >
                            SJ
                          </div>
                          <span className="fw-bold">Sarah Jenkins</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-muted d-flex align-items-center gap-1">
                          <MapPin size={14} /> Downtown Metro
                        </div>
                      </td>
                      <td className="text-muted">Oct 24, 2023</td>
                      <td className="text-end">
                        <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2">
                          • Completed
                        </span>
                      </td>
                    </tr>
                    {/* Additional rows would go here */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-4">
            <div className="card p-4 mb-4">
              <h6 className="text-muted fw-bold small mb-4 text-uppercase">Performance</h6>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted small">Customer Rating</span>
                  <span className="fw-bold small">
                    4.9 <span className="text-warning">★</span>
                  </span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-warning" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted small">Response Time</span>
                  <span className="fw-bold small">Top 10%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>

            <div className="card bg-primary text-white p-4">
              <h6 className="opacity-75 small mb-4 fw-bold text-uppercase">Next Job</h6>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-white bg-opacity-25 rounded p-3">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <div className="fw-bold">Central Hospital</div>
                  <div className="opacity-75 smaller">HVAC Maintenance - Unit 4</div>
                </div>
              </div>
              <button className="btn btn-light w-100 fw-bold py-2">Start Navigation</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
