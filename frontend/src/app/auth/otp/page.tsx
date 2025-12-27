"use client";

import { useState } from 'react';
import OtpInput from 'react-otp-input';
import Image from "next/image";
import { ArrowLeft, ShieldCheck, ArrowClockwise, QuestionCircle } from 'react-bootstrap-icons';
import '../../styles/auth.css'

export default function VerifyOtp() {
  const [otp, setOtp] = useState('');

  return (
    <div className="container-fluid min-vh-100 p-0">
      <div className="row g-0 min-vh-100">

        {/* LEFT IMAGE SECTION */}
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

        {/* RIGHT FORM SECTION */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center px-4">
          <div className="verify-card w-100">

            <a href="#" className="back-link mb-4 d-inline-flex align-items-center">
              <ArrowLeft className="me-2" />
              Back to Login
            </a>

            <h2 className="mb-2">Verify Phone Number</h2>
            <p className="text-muted">
              We've sent a 6-digit verification code to <strong>(555) 123-4567</strong>.
            </p>
<div className="change-number-wrapper">
  <a href="#" className="change-number">
    Change number
  </a>
</div>

<label className="form-label enter-code-label">Enter Code</label>


            {/* OTP INPUT */}
           <div className="otp-wrapper">
  <OtpInput
    value={otp}
    onChange={setOtp}
    numInputs={6}
    shouldAutoFocus
    containerClassName="otp-container"
    renderInput={(props, index) => (
      <input
        {...props}
        key={index}
        className="otp-input"
        inputMode="numeric"
        autoComplete="one-time-code"
      />
    )}
  />
</div>




            <div className="d-flex justify-content-between align-items-center mt-3 small text-muted">
              <span>Code expires in <strong>02:59</strong></span>
              <button className="btn btn-link p-0 text-decoration-none">
                <ArrowClockwise className="me-1" />
                Resend Code
              </button>
            </div>

            <button className="btn btn-primary w-100 mt-4 verify-btn">
              <ShieldCheck className="me-2" />
              Verify & Login
            </button>

            <div className="help-box mt-4">
              <QuestionCircle className="me-2" />
              <div>
                <strong>Having trouble?</strong>
                <p className="mb-0">
                  If you didn't receive the code, check your network connection
                  or contact support.
                </p>
              </div>
            </div>

            <p className="recaptcha-text mt-4">
              Protected by reCAPTCHA and subject to the Google
              <a href="#"> Privacy Policy</a> and
              <a href="#"> Terms of Service</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
