// components/serviceDetails.tsx

"use client"
import Image from "next/image"
import { StarFill, Clock, CheckCircleFill, ShieldCheck, Headset } from "react-bootstrap-icons"

export default function ServiceDetails() {
  return (
    <main className="pb-5">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center fw-bold fs-4" href="#">
            <span className="text-primary me-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#0D6EFD" />
                <path
                  d="M10 16L14 20L22 12"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Metro Cool
          </a>
          <div className="d-none d-md-flex mx-auto gap-4">
            <a href="#" className="nav-link text-dark fw-medium">
              Services
            </a>
            <a href="#" className="nav-link text-dark fw-medium">
              Bookings
            </a>
            <a href="#" className="nav-link text-dark fw-medium">
              Support
            </a>
          </div>
          <button className="btn btn-primary px-4 fw-medium rounded-2">Login</button>
        </div>
      </nav>

      <div className="container mt-4">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small text-secondary">
            <li className="breadcrumb-item">
              <a href="#" className="text-decoration-none text-secondary">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-decoration-none text-secondary">
                Services
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-decoration-none text-secondary">
                Cooling
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Split AC Service
            </li>
          </ol>
        </nav>

        <div className="row g-4">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="rounded-4 overflow-hidden mb-4 shadow-sm border">
              <Image
                src="/assets/otpscreen.png"
                alt="AC Technician Servicing Unit"
                width={800}
                height={400}
                className="img-fluid w-100 object-fit-cover"
                style={{ maxHeight: "400px" }}
              />
            </div>

            <h1 className="fw-bold mb-2">Split AC Power Jet Service</h1>

            <div className="d-flex align-items-center gap-3 mb-4 text-secondary small">
              <span className="d-flex align-items-center">
                <StarFill className="text-success me-1" size={14} />
                <span className="fw-bold text-dark me-1">4.8</span>
                <span className="text-decoration-underline ms-1">1.2k reviews</span>
              </span>
              <span>•</span>
              <span className="d-flex align-items-center">
                <Clock className="me-1" size={14} />
                60 mins
              </span>
            </div>

            <p className="text-muted mb-5 leading-relaxed">
              Comprehensive high-pressure cleaning for indoor and outdoor units to improve cooling efficiency and air
              quality. Our technicians use advanced jet pumps to remove deep-seated dust and allergens. Recommended for
              ACs not serviced in the last 6 months.
            </p>

            {/* What's Included */}
            <div className="mb-5">
              <h4 className="fw-bold mb-4">What's Included</h4>
              <div className="row g-3">
                {[
                  { title: "Pre-service Inspection", desc: "Detailed check of cooling coil & gas pressure." },
                  { title: "Jet Pump Cleaning", desc: "Deep cleaning of indoor & outdoor units." },
                  { title: "Filter & Tray Cleaning", desc: "Anti-bacterial wash for filters." },
                  { title: "Post-service Cleanup", desc: "Area cleanup to ensure no mess is left." },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6">
                    <div className="d-flex p-3 rounded-3 border bg-white h-100 shadow-sm">
                      <CheckCircleFill className="text-success mt-1 me-3 flex-shrink-0" size={20} />
                      <div>
                        <div className="fw-bold small">{item.title}</div>
                        <div className="text-muted x-small" style={{ fontSize: "0.8rem" }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhance Your Service */}
            <div className="mb-5">
              <h4 className="fw-bold mb-4">Enhance Your Service</h4>
              <div className="vstack gap-3">
                {[
                  {
                    title: "Gas Top-up",
                    desc: "Refill up to 10 PSI if gas levels are low.",
                    price: "+$20.00",
                    img: "/gas-cylinder.png",
                  },
                  {
                    title: "Anti-rust Coating",
                    desc: "Protective spray for outdoor unit coil.",
                    price: "+$12.00",
                    img: "/spray-can.jpg",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="d-flex align-items-center p-3 rounded-4 border bg-white shadow-sm">
                    <div
                      className="rounded-3 overflow-hidden me-3 border flex-shrink-0"
                      style={{ width: "64px", height: "64px" }}
                    >
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-fit-cover w-100 h-100"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-bold">{item.title}</div>
                      <div className="text-muted small">{item.desc}</div>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <span className="fw-bold">{item.price}</span>
                      <div className="form-check">
                        <input
                          className="form-check-input border-2"
                          type="checkbox"
                          style={{ width: "1.5rem", height: "1.5rem" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h4 className="fw-bold mb-4">Frequently Asked Questions</h4>
              <div className="accordion border rounded-4 overflow-hidden" id="faqAccordion">
                <div className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-white text-dark py-4 fw-medium shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Does this service include gas filling?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted pt-0 pb-4">
                      No, gas filling is an additional service. You can select the "Gas Top-up" option above if needed.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed bg-white text-dark py-4 fw-medium shadow-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      What if my AC has a breakdown?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted pt-0 pb-4">
                      This service is for maintenance. If your AC is not cooling or has a technical fault, we recommend
                      booking a repair service first.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="position-sticky" style={{ top: "2rem" }}>
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
                <div className="card-body p-4">
                  <div className="text-secondary small mb-1">Total Price</div>
                  <div className="d-flex align-items-baseline gap-2 mb-2">
                    <span className="fs-1 fw-bold">$49.00</span>
                    <span className="text-muted text-decoration-line-through fs-5">$65.00</span>
                  </div>
                  <div className="text-success small fw-medium mb-4">You save 25% today</div>

                  <hr className="my-4 opacity-10" />

                  <div className="vstack gap-3 mb-4">
                    <div className="d-flex justify-content-between small">
                      <span className="text-muted">Service Duration</span>
                      <span className="fw-bold text-dark">~60 Mins</span>
                    </div>
                    <div className="d-flex justify-content-between small">
                      <span className="text-muted">Technicians</span>
                      <span className="fw-bold text-dark">1 Expert</span>
                    </div>
                    <div className="d-flex justify-content-between small">
                      <span className="text-muted">Visiting Charges</span>
                      <span className="text-success fw-bold">FREE</span>
                    </div>
                  </div>

                  <button className="btn btn-primary w-100 py-3 fw-bold rounded-3 mb-3 fs-5 shadow-sm">
                    Book This Service
                  </button>

                  <div className="row g-2">
                    <div className="col-6">
                      <div
                        className="d-flex align-items-center justify-content-center gap-2 py-2 px-1 bg-light rounded-2 small text-primary fw-medium border border-primary-subtle"
                        style={{ fontSize: "0.75rem" }}
                      >
                        <CheckCircleFill size={14} />
                        30 Day Warranty
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                        className="d-flex align-items-center justify-content-center gap-2 py-2 px-1 bg-light rounded-2 small text-primary fw-medium border border-primary-subtle"
                        style={{ fontSize: "0.75rem" }}
                      >
                        <ShieldCheck size={14} />
                        Secure Payment
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help Card */}
              <div className="card border-0 bg-primary bg-opacity-10 rounded-4">
                <div className="card-body d-flex align-items-center p-3 border border-primary-subtle rounded-4">
                  <div className="bg-white p-2 rounded-circle shadow-sm me-3 text-primary">
                    <Headset size={24} />
                  </div>
                  <div className="small">
                    <div className="fw-bold">Need Help?</div>
                    <div className="text-muted">
                      Call our support team at <span className="text-primary fw-bold">800-METRO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
