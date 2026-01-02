import React from 'react';

export default function JobDetailsPage() {
  return (
    <div className="bg-light min-vh-100 pb-5">
      {/* Breadcrumb / Top Bar */}
      <div className="container py-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-muted">Jobs</a></li>
            <li className="breadcrumb-item active fw-bold" aria-current="page">Job #MC-8821</li>
          </ol>
        </nav>
      </div>

      <div className="container">
        <div className="row g-4">
          
          {/* Main Content Column */}
          <div className="col-12 col-lg-8">
            <header className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-1">
                <h1 className="h3 fw-bold mb-0">AC Repair - Unit 4</h1>
                <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-2">PENDING ACCEPTANCE</span>
              </div>
              <p className="text-muted">Residential HVAC repair focusing on compressor diagnostics.</p>
            </header>

            {/* Job Description Card */}
            <div className="card border-0 shadow-sm mb-4 p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary-subtle text-primary p-2 rounded-3 me-3">
                    <i className="bi bi-file-text fs-4"></i>
                </div>
                <h5 className="mb-0 fw-bold">Job Description</h5>
              </div>
              <p className="text-secondary small leading-relaxed">
                The client reported that the AC unit in the master bedroom (Unit 4) is making a loud rattling noise when the compressor kicks in. 
                It seems to be cooling, but the airflow is weaker than usual. Please inspect the fan motor and mounts.
              </p>
              
              <div className="bg-light border-start border-primary border-4 p-3 rounded-end">
                <h6 className="fw-bold small text-primary mb-1">ACCESS INSTRUCTIONS</h6>
                <p className="mb-0 small">Gate code is <strong>#1234</strong>. Use the side entrance. The dog is friendly but keep the gate closed.</p>
              </div>
            </div>

            {/* Tools & Parts Grid */}
            <div className="row g-4 mb-4">
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow-sm p-4 h-100">
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="fw-bold"><i className="bi bi-tools me-2"></i>Required Tools</h6>
                    <span className="badge bg-light text-muted">3 items</span>
                  </div>
                  <ul className="list-group list-group-flush border-top-0">
                    <li className="list-group-item border-0 px-0 d-flex align-items-center small">
                      <i className="bi bi-check2-circle text-success me-2"></i> Manifold Gauge Set
                    </li>
                    <li className="list-group-item border-0 px-0 d-flex align-items-center small">
                      <i className="bi bi-check2-circle text-success me-2"></i> Vacuum Pump
                    </li>
                    <li className="list-group-item border-0 px-0 d-flex align-items-center small">
                      <i className="bi bi-check2-circle text-success me-2"></i> Standard HVAC Toolkit
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="col-12 col-md-6">
                <div className="card border-0 shadow-sm p-4 h-100">
                  <div className="d-flex justify-content-between mb-3">
                    <h6 className="fw-bold"><i className="bi bi-box-seam me-2"></i>Potential Parts</h6>
                    <button className="btn btn-sm btn-outline-secondary py-0 px-2" style={{fontSize: '10px'}}>Stock Check</button>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2 p-2 bg-light rounded">
                    <span className="small">Capacitor <br/><small className="text-muted">45+5 MFD</small></span>
                    <span className="badge bg-success-subtle text-success">In Stock</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-2 bg-light rounded">
                    <span className="small">Fan Blade <br/><small className="text-muted">22" Pitch</small></span>
                    <span className="badge bg-warning-subtle text-warning">Low Stock</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photos Section */}
            <div className="card border-0 shadow-sm p-4">
              <h6 className="fw-bold mb-3"><i className="bi bi-images me-2"></i>Client Photos</h6>
              <div className="row g-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="col-4 col-md-3">
                    <div className="bg-secondary-subtle rounded ratio ratio-1x1 d-flex align-items-center justify-content-center border overflow-hidden">
                      <span className="text-muted small text-center px-1">Unit Photo {i}</span>
                    </div>
                  </div>
                ))}
                <div className="col-4 col-md-3">
                  <div className="border border-dashed rounded ratio ratio-1x1 d-flex flex-column align-items-center justify-content-center text-primary cursor-pointer">
                    <i className="bi bi-plus-lg"></i>
                    <span className="small">Add New</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="col-12 col-lg-4">
            {/* Payout Card */}
            <div className="card border-0 shadow-sm mb-4 p-4 overflow-hidden">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="small text-muted fw-bold">EST. PAYOUT</span>
                    <span className="badge bg-success-subtle text-success"><i className="bi bi-graph-up me-1"></i>High Value</span>
                </div>
                <h2 className="fw-bold mb-3">$145.00 <span className="fs-6 text-muted fw-normal">USD</span></h2>
                <div className="row g-2 mb-4">
                    <div className="col-6 text-center border-end">
                        <small className="text-muted d-block">Est. Duration</small>
                        <span className="fw-bold small">1h 30m</span>
                    </div>
                    <div className="col-6 text-center">
                        <small className="text-muted d-block">Job Type</small>
                        <span className="fw-bold small">Repair</span>
                    </div>
                </div>
                <button className="btn btn-primary w-100 py-3 fw-bold mb-2">Accept Job <i className="bi bi-arrow-right ms-2"></i></button>
                <button className="btn btn-outline-secondary w-100 py-3 fw-bold">Decline</button>
                <p className="text-center text-muted mt-3 small mb-0">Expires in 55 minutes</p>
            </div>

            {/* Schedule Card */}
            <div className="card border-0 shadow-sm mb-4 p-3 d-flex flex-row align-items-center gap-3">
                <div className="bg-warning-subtle text-warning p-2 rounded text-center" style={{minWidth: '60px'}}>
                    <div className="small fw-bold border-bottom border-warning-subtle mb-1">OCT</div>
                    <div className="h4 mb-0 fw-bold">24</div>
                </div>
                <div>
                    <h6 className="mb-0 fw-bold">Tomorrow</h6>
                    <p className="mb-0 small text-muted">08:00 AM - 10:30 AM</p>
                </div>
            </div>

            {/* Customer Map Card */}
            <div className="card border-0 shadow-sm overflow-hidden">
                <div className="bg-secondary-subtle" style={{height: '150px'}}>
                    <div className="h-100 d-flex align-items-center justify-content-center text-muted">[Map Preview]</div>
                </div>
                <div className="p-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="rounded-circle bg-secondary" style={{width: '45px', height: '45px'}}></div>
                        <div>
                            <h6 className="mb-0 fw-bold">Sarah Jenkins</h6>
                            <p className="mb-0 small text-muted">Homeowner • 12 jobs</p>
                        </div>
                    </div>
                    <p className="small text-muted mb-4"><i className="bi bi-geo-alt me-2"></i>1402 Highland Ave, LA</p>
                    <div className="row g-2">
                        <div className="col-6">
                            <button className="btn btn-light w-100 btn-sm fw-bold"><i className="bi bi-telephone me-2"></i>Call</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-light w-100 btn-sm fw-bold"><i className="bi bi-chat-left-dots me-2"></i>Message</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}