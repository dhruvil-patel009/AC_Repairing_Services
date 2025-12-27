"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import OtpInput from "react-otp-input";
import Image from "next/image";
import {
  ArrowLeft,
  ShieldCheck,
  ArrowClockwise,
  QuestionCircle,
} from "react-bootstrap-icons";
import "../../styles/auth.css";

export default function VerifyOtp() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ✅ get phone from query
  const phone = searchParams.get("phone");

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes


  useEffect(() => {
  if (timeLeft <= 0) return;

  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft]);


const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};


  // ❗ if someone opens OTP page directly
  if (!phone) {
    router.replace("/");
    return null;
  }

  const handleVerify = () => {
    if (otp.length !== 6) {
      alert("Please enter 6-digit OTP");
      return;
    }

    // 🔐 API call goes here
    console.log("Phone:", phone);
    console.log("OTP:", otp);

    // ✅ redirect after success
    router.push("/dashboard"); // or role-based page
  };

  return (
    <div className="container-fluid min-vh-100 p-0">
      <div className="row g-0 min-vh-100">

        {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 d-none d-lg-block p-0 position-relative left-panel h-full w-full bg-cover bg-center left-img"  >

          {/* LOGO TOP */}
          <div className="position-absolute top-0 start-0 p-5 z-10">
            <div className="logo-box d-flex align-items-center gap-3">
              <div className="size-10 bg-white/20 backdrop-blur-md rounded flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">hvac</span>
              </div>
              <span className="text-white fw-semibold text-xl font-bold tracking-tight">HVAC Marketplace</span>
            </div>
          </div>

          {/* TEXT BOTTOM */}
          <div className="position-absolute start-0 bottom-0 p-5 text-white z-10" style={{ maxWidth: "800px" }}>
            <h1 className="display-5 fw-bold mb-4">Professional HVAC solutions for every season.</h1>
            <p className="fs-5 opacity-90 mb-0 leading-relaxed">
              Connect with certified technicians, manage service requests, and handle payments all in one place.
            </p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center px-4">
          <div className="verify-card w-100">

            {/* BACK */}
            <button
              type="button"

  onClick={() => router.replace("login")}
              className="back-link mb-4 d-inline-flex align-items-center btn btn-link p-0"
            >
              <ArrowLeft className="me-2" />
              Back to Login
            </button>

            <h2 className="mb-2">Verify Phone Number</h2>
            <p className="text-muted">
              We've sent a 6-digit verification code to{" "}
              <strong>{phone}</strong>.
            </p>

            <div className="change-number-wrapper">
              <button
                className="change-number btn btn-link p-0"
                onClick={() => router.push("/")}
              >
                Change number
              </button>
            </div>

            <label className="form-label enter-code-label">
              Enter Code
            </label>

            {/* OTP INPUT */}
            <div className="otp-wrapper">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                shouldAutoFocus
                // containerClassName="otp-container"
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
  <span>
    Code expires in{" "}
    <strong>
      {timeLeft > 0 ? formatTime(timeLeft) : "00:00"}
    </strong>
  </span>

  <button
    type="button"
    className="btn btn-link p-0 text-decoration-none"
    disabled={timeLeft > 0}
    onClick={() => {
      setTimeLeft(180); // reset timer
      setOtp("");
      // 🔐 call resend OTP API here
    }}
  >
    <ArrowClockwise className="me-1" />
    Resend Code
  </button>
</div>


            <button
              className="btn btn-primary w-100 mt-4 verify-btn"
              onClick={handleVerify}
            >
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
