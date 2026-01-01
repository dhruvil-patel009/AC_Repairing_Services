"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "../../../../public/assets/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top shadow-sm">
      <div className="container">
        {/* LOGO */}
        <Link
          href="/technician"
          className="navbar-brand d-flex align-items-center fw-bold fs-4"
          style={{marginRight:"0"}}
        >
          <Image className="navlogo" src={logo} alt="logo" />
        </Link>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link href="/User" className="nav-link px-3">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/User/services" className="nav-link px-3">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/User/about" className="nav-link px-3">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/User/contact" className="nav-link px-3">
                Contact
              </Link>
            </li>
          </ul>

          {/* ACTION BUTTONS */}
          <div className="d-flex gap-2">
            <Link
              href="/"
              className="btn btn-primary px-4 py-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}