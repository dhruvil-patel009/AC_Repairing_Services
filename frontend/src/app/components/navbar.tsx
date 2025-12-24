"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top w-100 position-fixed">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <div
            className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{ width: "40px", height: "40px" }}
          >
            <i className="bi bi-tools text-white fs-5"></i>
          </div>
          <span className="fw-bold text-primary fs-4">ServiceHub</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="#services" className="nav-link px-3">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#products" className="nav-link px-3">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#parts" className="nav-link px-3">
                Parts Shops
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#materials" className="nav-link px-3">
                Materials & Techniques
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
