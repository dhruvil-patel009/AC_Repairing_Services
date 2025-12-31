"use client"

import { useState } from "react"
import {
  StarFill,
  Cart3,
  BagCheckFill,
  Truck,
  CheckCircleFill,
  Search,
  Cart,
  Person,
  List,
  Heart,
  ChevronRight,
} from "react-bootstrap-icons"

// --- Components ---

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3">
    <div className="container">
      <a className="navbar-brand d-flex align-items-center fw-bold fs-4 text-primary" href="#">
        <div
          className="bg-primary rounded-circle me-2 d-flex align-items-center justify-content-center"
          style={{ width: "32px", height: "32px" }}
        >
          <span className="text-white fs-6">M</span>
        </div>
        Metro Cool
      </a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <List />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          {["Services", "Products", "Bookings", "Support"].map((item) => (
            <li className="nav-item" key={item}>
              <a className="nav-link px-3 text-dark fw-medium" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="d-flex align-items-center gap-3">
          <div className="position-relative d-none d-md-block">
            <input
              type="text"
              className="form-control ps-5 bg-light border-0 rounded-pill"
              placeholder="Search products..."
              style={{ width: "280px", height: "45px" }}
            />
            <Search className="position-absolute top-50 translate-middle-y ms-3 text-muted" size={16} />
          </div>
          <button className="btn btn-link text-dark p-2 position-relative">
            <Cart size={22} />
          </button>
          <button className="btn btn-link text-dark p-2">
            <Person size={22} />
          </button>
          <div className="bg-light p-1 rounded-3">
            <div
              className="rounded-3"
              style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(45deg, #FFC1CC, #FFE4E1)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

const ProductDetail = () => {
  const [selectedCapacity, setSelectedCapacity] = useState("1.5 Ton")
  const [activeTab, setActiveTab] = useState("Description")

  return (
    <div className="container py-4">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item">
            <a href="#" className="text-decoration-none text-muted">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#" className="text-decoration-none text-muted">
              Cooling
            </a>
          </li>
          <li className="breadcrumb-item active text-dark fw-medium" aria-current="page">
            Air Conditioners
          </li>
        </ol>
      </nav>

      <div className="row g-5">
        <div className="col-lg-7">
          <div
            className="rounded-4 overflow-hidden mb-4 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#e0f2f1", minHeight: "500px" }}
          >
            <img
              src="/assets/otpscreen.png"
              alt="Metro Cool Inverter Split AC"
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="row gx-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-3">
                <div
                  className={`rounded-3 overflow-hidden cursor-pointer border-2 h-100 d-flex align-items-center justify-content-center p-2 ${i === 1 ? "border border-primary bg-white shadow-sm" : "border border-light-subtle bg-light opacity-75"}`}
                  style={{ minHeight: "80px" }}
                >
                  <img
                    src={`/ac-view-.jpg?height=80&width=80&query=ac-view-${i}`}
                    className="img-fluid opacity-75"
                    alt={`View ${i}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-3">
            <div className="border-bottom d-flex gap-4 mb-4">
              {["Description", "Specifications", "Reviews (124)"].map((tab) => (
                <button
                  key={tab}
                  className={`btn border-0 px-0 py-3 position-relative fw-medium ${activeTab === tab ? "text-primary" : "text-muted"}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {activeTab === tab && (
                    <div
                      className="position-absolute bottom-0 start-0 w-100 bg-primary"
                      style={{ height: "3px", borderRadius: "3px 3px 0 0" }}
                    ></div>
                  )}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <h5 className="fw-bold mb-3 text-dark">Efficient Cooling for Modern Homes</h5>
              <p className="text-muted lh-lg mb-4">
                Experience superior comfort with the Metro Cool Inverter Split AC. Designed with advanced inverter
                technology, it adjusts power consumption precisely to maintain your desired temperature, saving you up
                to 45% on energy bills. The sleek design blends seamlessly into any modern interior, while the
                whisper-quiet operation ensures your sleep is never disturbed.
              </p>
              <ul className="list-unstyled">
                {[
                  { label: "Dual Inverter Compressor", value: "Faster cooling and longer durability." },
                  { label: "Smart Connectivity", value: "Control from anywhere via the Metro Cool app." },
                  { label: "Anti-Viral Filter", value: "Ensures the air you breathe is clean and healthy." },
                ].map((item, idx) => (
                  <li key={idx} className="mb-3 d-flex align-items-start">
                    <span className="text-primary fw-bold me-2">•</span>
                    <span className="text-muted">
                      <strong className="text-dark me-1">{item.label}:</strong> {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card border-0 rounded-4 shadow-sm p-4 p-xl-5 bg-white sticky-top" style={{ top: "100px" }}>
            <div className="d-flex gap-2 mb-3">
              <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill small fw-semibold">
                IN STOCK
              </span>
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill small fw-semibold">
                BEST SELLER
              </span>
            </div>

            <h1 className="fw-bold h2 mb-3 text-dark">Metro Cool Inverter Split AC - 1.5 Ton</h1>

            <div className="d-flex align-items-center gap-2 mb-4">
              <div className="d-flex text-primary">
                {[1, 2, 3, 4, 5].map((s) => (
                  <StarFill key={s} className="me-1" size={14} />
                ))}
              </div>
              <span className="small text-muted fw-medium">(124 reviews)</span>
            </div>

            <div className="d-flex align-items-baseline gap-3 mb-4">
              <span className="h1 fw-bold text-primary mb-0">$450.00</span>
              <span className="text-muted text-decoration-line-through fs-5">$599.00</span>
              <span className="badge bg-success-subtle text-success ms-auto rounded-pill px-3 py-2 fw-semibold">
                Save 25%
              </span>
            </div>

            <div className="mb-4">
              <label className="small fw-bold text-muted mb-3 text-uppercase letter-spacing-1">Capacity</label>
              <div className="d-flex gap-3">
                {["1.0 Ton", "1.5 Ton", "2.0 Ton"].map((cap) => (
                  <button
                    key={cap}
                    className={`btn flex-grow-1 py-2 border rounded-3 fw-medium ${selectedCapacity === cap ? "btn-primary border-primary shadow-sm" : "btn-outline-light text-dark bg-white border-light-subtle"}`}
                    onClick={() => setSelectedCapacity(cap)}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>

            <div className="card bg-light border-0 rounded-4 p-3 mb-4">
              <div className="form-check d-flex align-items-start gap-3 ps-0">
                <div className="ms-3 pt-1">
                  <input
                    className="form-check-input border-secondary custom-checkbox"
                    type="checkbox"
                    id="installation"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                  />
                </div>
                <label className="form-check-label w-100 pe-3" htmlFor="installation">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-bold text-dark">Professional Installation</span>
                    <span className="fw-bold text-dark">+$50.00</span>
                  </div>
                  <p className="small text-muted mb-0 lh-base" style={{ fontSize: "0.85rem" }}>
                    Includes unboxing, mounting, and demo by certified Metro Cool experts.
                  </p>
                </label>
              </div>
            </div>

            <div className="d-grid gap-3 mb-4">
              <button className="btn btn-primary btn-lg fw-bold d-flex align-items-center justify-content-center gap-2 rounded-4 py-3 shadow-sm hover-up">
                <BagCheckFill size={20} /> Purchase Now
              </button>
              <button className="btn btn-outline-dark btn-lg fw-bold d-flex align-items-center justify-content-center gap-2 rounded-4 py-3">
                <Cart3 size={20} /> Add to Cart
              </button>
            </div>

            <div className="row g-3">
              <div className="col-6">
                <div className="d-flex align-items-center gap-3 p-2">
                  <div className="bg-primary-subtle text-primary rounded-circle p-2 d-flex">
                    <CheckCircleFill size={18} />
                  </div>
                  <div>
                    <div className="fw-bold text-dark x-small">WARRANTY</div>
                    <div className="text-muted small">5 Years Comp.</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center gap-3 p-2">
                  <div className="bg-primary-subtle text-primary rounded-circle p-2 d-flex">
                    <Truck size={20} />
                  </div>
                  <div>
                    <div className="fw-bold text-dark x-small">DELIVERY</div>
                    <div className="text-muted small">Free Express</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ReviewsSection = () => (
  <div className="container py-5">
    <div className="row">
        <div className="col-7">
            <div className="bg-white p-4 p-xl-5 rounded-4 shadow-sm">
      <h4 className="fw-bold mb-5 text-dark">Customer Reviews</h4>

      <div className="row g-5 mb-5 align-items-center">
        <div className="col-lg-4 text-center border-end border-light">
          <div className="display-3 fw-bold mb-1 text-dark">4.8</div>
          <div className="text-muted mb-3 fs-5">out of 5</div>
          <div className="text-primary mb-3 d-flex justify-content-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <StarFill key={s} size={22} />
            ))}
          </div>
          <div className="text-muted fw-medium">Based on 124 reviews</div>
        </div>

        <div className="col-lg-8 ps-lg-5">
          {[5, 4, 3, 2, 1].map((stars) => {
            const percentages: Record<number, number> = { 5: 70, 4: 20, 3: 5, 2: 3, 1: 2 }
            const pct = percentages[stars]
            return (
              <div key={stars} className="d-flex align-items-center gap-3 mb-3">
                <span className="text-muted fw-bold" style={{ width: "20px" }}>
                  {stars}
                </span>
                <div className="progress flex-grow-1" style={{ height: "8px", backgroundColor: "#f0f7ff" }}>
                  <div className="progress-bar bg-primary rounded-pill shadow-none" style={{ width: `${pct}%` }}></div>
                </div>
                <span className="text-muted fw-medium text-end" style={{ width: "40px" }}>
                  {pct}%
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="row g-4 mt-2">
        {[
          {
            name: "Marcus Johnson",
            avatar: "MJ",
            color: "bg-warning-subtle text-warning-emphasis",
            time: "2 days ago",
            text: "Absolutely love this AC unit. The installation service from Metro Cool was prompt and professional. The unit itself is incredibly quiet, I sometimes forget it's even on.",
          },
          {
            name: "Sarah Jenkins",
            avatar: "SJ",
            color: "bg-info-subtle text-info-emphasis",
            time: "1 week ago",
            text: "Great value for money. Cooling is fast. The only downside is the remote feels a bit plasticky, but the app works perfectly so I use that mostly.",
          },
        ].map((rev, idx) => (
          <div key={idx} className="col-12">
            <div className="p-4 bg-light rounded-4 border-0">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${rev.color}`}
                    style={{ width: "50px", height: "50px", fontSize: "1.1rem" }}
                  >
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="fw-bold text-dark mb-1">{rev.name}</div>
                    <div className="text-primary d-flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <StarFill key={s} size={12} />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="small text-muted">{rev.time}</span>
              </div>
              <p className="text-muted mb-0 lh-lg">{rev.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-outline-secondary col-12 px-5 py-3 fw-bold rounded-3 bg-white border-light-subtle text-dark shadow-sm">
          Load more reviews
        </button>
      </div>
    </div>
        </div>
    </div>
    
  </div>
)

const RelatedProducts = () => {
  const products = [
    { title: "Metro Frost Portable Cooler", price: 120, rating: 4.5, badge: null, color: "#F5F5F5" },
    { title: "PureAir Smart Purifier", price: 199, oldPrice: 250, rating: 4.9, badge: "SALE", color: "#E0F2F1" },
    { title: "AeroSilent Ceiling Fan", price: 89, rating: 4.2, badge: null, color: "#F9F4F0" },
    { title: "Wall Heater Pro", price: 145, rating: 4.7, badge: null, color: "#FFF9E6" },
  ]

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4 mt-2">
        <h4 className="fw-bold text-dark">You might also like</h4>
        <a href="#" className="text-primary text-decoration-none fw-bold d-flex align-items-center gap-1">
          View all <ChevronRight size={14} />
        </a>
      </div>

      <div className="row g-4">
        {products.map((p, i) => (
          <div key={i} className="col-6 col-lg-3">
            <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm hover-lift bg-white">
              <div
                className="position-relative d-flex align-items-center justify-content-center"
                style={{ height: "240px", backgroundColor: p.color }}
              >
                {p.badge && (
                  <span className="badge bg-danger position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2 fw-bold shadow-sm">
                    {p.badge}
                  </span>
                )}
                <button className="btn btn-white btn-sm rounded-circle position-absolute top-0 end-0 m-3 shadow-sm d-flex align-items-center justify-content-center p-2 border-0">
                  <Heart size={16} className="text-muted" />
                </button>
                <img
                //   src={`/.jpg?height=180&width=180&query=${p.title}`}
                src="/assets/AC-Repairing-Product.png"
                  className="img-fluid"
                  alt={p.title}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="card-body mt-4 p-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h6 className="card-title mb-0 fw-bold text-dark">{p.title}</h6>
                  <div className="d-flex align-items-center gap-1 bg-light px-2 py-1 rounded-pill">
                    <StarFill size={10} className="text-primary" />
                    <span className="small text-dark fw-bold" style={{ fontSize: "0.75rem" }}>
                      {p.rating}
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 mt-3">
                  <span className="fw-bold text-primary h5 mb-0">${p.price.toFixed(2)}</span>
                  {p.oldPrice && (
                    <span className="text-muted text-decoration-line-through small">${p.oldPrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const Footer = () => (
  <footer className="bg-white py-5 border-top mt-5">
    <div className="container">
      <div className="row align-items-center g-4">
        <div className="col-md-4 text-center text-md-start">
          <a
            className="navbar-brand d-flex align-items-center fw-bold text-primary justify-content-center justify-content-md-start"
            href="#"
          >
            <div
              className="bg-primary rounded-circle me-2 d-flex align-items-center justify-content-center"
              style={{ width: "24px", height: "24px" }}
            >
              <span className="text-white fw-bold" style={{ fontSize: "12px" }}>
                M
              </span>
            </div>
            Metro Cool
          </a>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-center gap-4">
            {["Privacy Policy", "Terms of Service", "Support"].map((link) => (
              <a key={link} href="#" className="text-muted text-decoration-none small fw-medium">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="col-md-4 text-center text-md-end">
          <span className="text-muted small fw-medium">© 2023 Metro Cool Inc. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
)

// --- Main Page ---

export default function ProductDetailUser() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <main className="pb-5">
        <ProductDetail />
        <ReviewsSection />
        <RelatedProducts />
      </main>
      <Footer />

      <style jsx global>{`
        body {
          font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
          color: #333;
        }
        .text-primary { color: #007bff !important; }
        .bg-primary { background-color: #007bff !important; }
        .btn-primary { 
          background-color: #007bff !important; 
          border-color: #007bff !important;
        }
        .bg-primary-subtle { background-color: #e6f2ff !important; }
        .letter-spacing-1 { letter-spacing: 0.05em; }
        .x-small { font-size: 0.65rem; }
        .cursor-pointer { cursor: pointer; }
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .hover-up {
          transition: filter 0.2s ease;
        }
        .hover-up:hover {
          filter: brightness(1.05);
        }
        .custom-checkbox:checked {
          background-color: #007bff;
          border-color: #007bff;
        }
        .breadcrumb-item + .breadcrumb-item::before {
          content: "/";
          color: #adb5bd;
        }
      `}</style>
    </div>
  )
}
