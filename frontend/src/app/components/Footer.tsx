"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="bi bi-tools text-white"></i>
              </div>
              <span className="fw-bold fs-4">ServiceHub</span>
            </div>
            <p className="text-light opacity-75 mb-3">
              Your trusted partner for all home services. Professional, reliable, and affordable.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white opacity-75 hover-opacity-100" aria-label="Facebook">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100" aria-label="Twitter">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100" aria-label="Instagram">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-white opacity-75 hover-opacity-100" aria-label="LinkedIn">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#services" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#products" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  AC Repair
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  Plumbing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  Electrician
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  Cleaning
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <i className="bi bi-geo-alt me-2 mt-1"></i>
                <span className="text-light opacity-75">123 Service Street, Mumbai, India</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-envelope me-2"></i>
                <a
                  href="mailto:support@servicehub.com"
                  className="text-light opacity-75 text-decoration-none hover-opacity-100"
                >
                  support@servicehub.com
                </a>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:+911234567890" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-top border-secondary">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="text-light opacity-75 mb-0">© 2025 ServiceHub. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <Link href="/privacy" className="text-light opacity-75 text-decoration-none hover-opacity-100 me-3">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-opacity-100:hover {
          opacity: 1 !important;
        }
      `}</style>
    </footer>
  )
}
