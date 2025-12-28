'use client';

import {
  Telephone,
  Envelope,
  Person,
  Camera,
  CreditCard,
  Tag
} from 'react-bootstrap-icons';
import '../../styles/auth.css';

export default function TechnicianRegistration() {
  return (
    <div className="container-fluid min-vh-100 bg-light d-flex align-items-center justify-content-center py-4">
      <div className="row w-100 max-width">

        {/* LEFT INFO PANEL */}
        <div className="col-lg-4 d-none d-lg-block">
  <div className="network-card">

    {/* IMAGE CARD */}
    <div className="network-image">
      <div className="overlay-content">
        <h2>Join Our Network</h2>
        <p>
          Connect with thousands of customers looking for HVAC experts like you.
        </p>
      </div>
    </div>

    {/* FEATURES */}
    <div className="network-features">

      <div className="feature-item">
        <div className="feature-icon">
          💳
        </div>
        <div>
          <h6>Automated Settlements</h6>
          <p>Get paid instantly upon job completion with our automated financial system.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">
          ✔️
        </div>
        <div>
          <h6>Verified Technician Badge</h6>
          <p>Build trust with clients by displaying your verified status.</p>
        </div>
      </div>

      <div className="feature-item">
        <div className="feature-icon">
          📊
        </div>
        <div>
          <h6>Tiered Benefits</h6>
          <p>Unlock lower commission rates as you complete more jobs.</p>
        </div>
      </div>

    </div>
  </div>
        </div>



        {/* RIGHT FORM */}
        <div className="col-lg-8">
          <div className="form-card bg-white">
            <h3 className="fw-bold">Technician Registration</h3>
            <p className="text-muted mb-4">
              Fill in your details to start receiving service requests.
            </p>

            <h6 className="section-title">PERSONAL DETAILS</h6>

            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label">First Name</label>
                <input className="form-control" placeholder="John" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Middle Name</label>
                <input className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label">Last Name</label>
                <input className="form-control" placeholder="Doe" />
              </div>

              <div className="col-md-6 position-relative">
                <Telephone className="input-icon" />
                <label className="form-label">Phone Number</label>
                <input className="form-control ps-5" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="col-md-6 position-relative">
                <Envelope className="input-icon" />
                <label className="form-label">Email Address</label>
                <input className="form-control ps-5" placeholder="john@example.com" />
              </div>
            </div>

            <h6 className="section-title mt-4">PROFESSIONAL INFO</h6>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Years of Experience</label>
                <select className="form-select">
                  <option>Select years</option>
                  <option>1-3 Years</option>
                  <option>3-5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>

              <div className="col-md-6"></div>

              <div className="col-md-6">
                <label className="form-label">Profile Photo</label>
                <div className="upload-box">
                  <Camera size={24} />
                  <p>Click to upload</p>
                  <small>JPG, PNG (Max 2MB)</small>
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Aadhaar / PAN Card</label>
                <div className="upload-box">
                  <CreditCard size={24} />
                  <p>Click to upload</p>
                  <small>PDF, JPG (Max 5MB)</small>
                </div>
              </div>

              <div className="col-md-12 position-relative">
                <Tag className="input-icon" />
                <label className="form-label">
                  Promo Code <span className="text-muted">(Optional)</span>
                </label>
                <input className="form-control ps-5" placeholder="Enter code" />
              </div>
            </div>

            <button className="btn btn-primary w-100 mt-4">
              Complete Registration
            </button>

            <p className="text-center text-muted small mt-2">
              🔒 Your data is securely encrypted and stored.
            </p>
          </div>
        </div>
      </div>      
    </div>
  );
}
