"use client";

import Image from "next/image";
import { Telephone, ArrowRight, Person, Wrench } from "react-bootstrap-icons";

export default function Page() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100">
        {/* LEFT IMAGE */}
        {/* LEFT IMAGE */}
        <div className="col-lg-6 d-none d-lg-block p-0 position-relative left-panel">
          <Image
            src="/assets/repairing-services.png"
            alt="HVAC Service"
            fill
            priority
            className="object-fit-cover"
          />

          {/* LOGO TOP */}
          <div className="position-absolute top-0 start-0 p-4 text-white fw-bold">
            HVAC Marketplace
          </div>

          {/* TEXT BOTTOM */}
          <div
            className="position-absolute start-0 ps-5 text-white"
            style={{ maxWidth: "505px",bottom:'20px' }}
          >
            <h2 className="fw-bold mb-3">
              Professional HVAC solutions
              <br /> for every season.
            </h2>
            <p className="opacity-75 mb-0">
              Connect with certified technicians, manage service requests, and
              handle payments all in one place.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-white">
          <div className="login-wrapper w-100" style={{ maxWidth: "380px" }}>
            <h1 className="welcome-title">Welcome back</h1>
            <p className="welcome-sub">
              Enter your mobile number to log in or create an account.
            </p>

            <label className="form-label fw-medium mt-3">Phone Number</label>

            <div className="input-group input-group-lg mb-4">
              <span className="input-group-text bg-white border-end-0">
                <Telephone />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="(555) 000-0000"
              />
            </div>

           {/* ===== NEW TO HVAC MARKETPLACE SECTION ===== */}
<div style={{ marginTop: '32px' }}>

  {/* Divider */}
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px',
      color: '#94a3b8',
      fontSize: '13px'
    }}
  >
    <div style={{ flex: 1, height: '1px', background: '#e6edf5' }} />
    <span>New to HVAC Marketplace?</span>
    <div style={{ flex: 1, height: '1px', background: '#e6edf5' }} />
  </div>

  {/* Cards */}
  <div className="row g-4">
    <div className="col-6">
      <div
        style={{
          border: '1px solid #e6edf5',
          borderRadius: '14px',
          padding: '24px 16px',
          textAlign: 'center',
          background: '#ffffff'
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#eef4fb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px'
          }}
        >
          <Person />
        </div>

        <div style={{ fontWeight: 600, fontSize: '14px' }}>
          Join as User
        </div>
        <div style={{ fontSize: '12px', color: '#7b8794' }}>
          Book services
        </div>
      </div>
    </div>

    <div className="col-6">
      <div
        style={{
          border: '1px solid #e6edf5',
          borderRadius: '14px',
          padding: '24px 16px',
          textAlign: 'center',
          background: '#ffffff'
        }}
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#eef4fb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px'
          }}
        >
          <Wrench />
        </div>

        <div style={{ fontWeight: 600, fontSize: '14px' }}>
          Join as Technician
        </div>
        <div style={{ fontSize: '12px', color: '#7b8794' }}>
          Offer services
        </div>
      </div>
    </div>
  </div>

  {/* Terms */}
  <p
    style={{
      marginTop: '28px',
      fontSize: '12px',
      color: '#9ca3af',
      textAlign: 'center',
      lineHeight: 1.5
    }}
  >
    By continuing, you agree to our
    <span style={{ color: '#0d3b66', cursor: 'pointer' }}>
      {' '}Terms of Service
    </span>{' '}
    and
    <span style={{ color: '#0d3b66', cursor: 'pointer' }}>
      {' '}Privacy Policy
    </span>.
  </p>

</div>


          </div>
        </div>
      </div>
    </div>
  );
}
