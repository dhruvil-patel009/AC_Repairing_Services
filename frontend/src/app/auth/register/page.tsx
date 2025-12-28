'use client';

import {
  PersonPlus,
  Pencil,
  Person,
  Telephone,
  Envelope,
  Clipboard
} from 'react-bootstrap-icons';
import '../../styles/auth.css'

export default function Register() {
  return (
    <div className="register-page">
      {/* HEADER */}
      {/* <header className="border-bottom bg-white">
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <div className="fw-bold d-flex align-items-center gap-2">
            <span className="logo-circle">X</span>
            HVAC Marketplace
          </div>
          <div>
            <a href="#" className="me-3 text-decoration-none text-muted">
              Find a Tech
            </a>
            <button className="btn btn-primary btn-sm">Sign In</button>
          </div>
        </div>
      </header> */}

      {/* FORM CARD */}
      <div className="container my-5">
        <div className="card register-card mx-auto">
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <span className="badge bg-light text-primary mb-2">
                Customer Registration
              </span>
              <h3 className="fw-bold">Create your Account</h3>
              <p className="text-muted">
                Join the marketplace for premium HVAC solutions and seamless
                service management.
              </p>
            </div>

            {/* PROFILE PHOTO */}
            <div className="profile-upload mb-5 text-center">
              <div className="avatar mx-auto">
                <Person size={26} />
                <span className="edit-icon">
                  <Pencil size={12} />
                </span>
              </div>
              <p className="mt-2 fw-semibold mb-0">Profile Photo</p>
              <small className="text-muted">
                Upload or drag and drop (Optional)
              </small>
            </div>

            {/* PERSONAL INFO */}
            <h6 className="section-title">
              <Clipboard size={16} /> Personal Information
            </h6>

            <hr></hr>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-600">First Name *</label>
                <input className="form-control" placeholder="John" />
              </div>
              {/* <div className="col-md-2">
                <label className="form-label">M.I.</label>
                <input className="form-control text-center" placeholder="-" />
              </div> */}
              <div className="col-md-6">
                <label className="form-label fw-600">Last Name *</label>
                <input className="form-control" placeholder="Doe" />
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <h6 className="section-title">
              <PersonPlus size={16} /> Contact Details
            </h6>

            <hr></hr>

            <div className="row g-3 mb-4">
              {/* PHONE */}
              <div className="col-md-6">
                <label className="form-label fw-600">Phone Number *</label>
                <div className="position-relative">
                  <Telephone className="input-inside-icon" />
                  <input
                    type="text"
                    className="form-control ps-5"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="col-md-6">
                <label className="form-label">Email Address *</label>
                <div className="position-relative">
                  <Envelope className="input-inside-icon" />
                  <input
                    type="email"
                    className="form-control ps-5"
                    placeholder="john.doe@example.com"
                  />
                </div>
              </div>
            </div>

            {/* TERMS */}
            <div className="terms-box mb-4">
              <div className="form-check">
                <input className="form-check-input text-center ml-2" type="checkbox" />
                <label className="form-check-label">
                  I agree to the <b>Terms</b> and <b>Privacy Policy</b>
                </label>
              </div>
              <small className="text-muted d-block mt-1">
                By checking this box, you confirm that you have read and agree
                to our Terms of Service and Privacy Policy.
              </small>
            </div>

            {/* BUTTON */}
            <button className="btn btn-primary w-100 py-2 fw-semibold">
              Create Account
            </button>

            <p className="text-center mt-3 mb-0">
              Already have an account?{" "}
              <a href="#" className="fw-semibold text-decoration-none">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
