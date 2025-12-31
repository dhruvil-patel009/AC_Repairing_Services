"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
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

  const phone = searchParams.get("phone");

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(180);
  const [loading, setLoading] = useState(false);

  const isOtpValid = otp.length === 6;

  // 🚫 Direct access protection
  useEffect(() => {
    if (!phone) router.replace("/auth/login");
  }, [phone, router]);


  useEffect(() => {
  const otpSent = sessionStorage.getItem("otp_sent");

  if (otpSent) {
    toast.success("OTP sent successfully");
    sessionStorage.removeItem("otp_sent"); // 🔥 important
  }
}, []);


  // ⏱️ Countdown
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

  // ✅ VERIFY OTP
  const handleVerify = async () => {
    if (!isOtpValid || loading) return;

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, otp }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Invalid OTP");
        return;
      }

      // ✅ Save session (DEV MODE)
      localStorage.setItem("accessToken", data.session.accessToken);
      localStorage.setItem("refreshToken", data.session.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful");

      // 🔀 Role-based redirect
      if (data.user.role === "admin") {
        router.replace("/Admin");
      } else if (data.user.role === "technician") {
        router.replace("/technician");
      } else {
        router.replace("/");
      }
    } catch {
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ⌨️ ENTER KEY SUPPORT
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isOtpValid && !loading) {
      handleVerify();
    }
  };

  return (
    <div className="container-fluid min-vh-100 p-0">
      <div className="row g-0 min-vh-100">

        {/* LEFT IMAGE */}

        <div className="col-lg-6 d-none d-lg-block p-0 position-relative left-panel h-full w-full bg-cover bg-center otp-img"  >

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
              onClick={() => router.replace("/auth/login")}
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
                renderInput={(props, index) => (
                  <input
                    {...props}
                    key={index}
                    className="otp-input"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    onKeyDown={handleKeyDown}
                  />
                )}
              />
            </div>

            {/* TIMER + RESEND */}
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
                  setTimeLeft(180);
                  setOtp("");
                  toast.success("OTP resent successfully");
                  // 🔐 call resend OTP API here
                }}
              >
                <ArrowClockwise className="me-1" />
                Resend Code
              </button>
            </div>

            {/* VERIFY BUTTON */}
            <button
              className={`btn btn-primary w-100 mt-4 verify-btn ${!isOtpValid || loading ? "disabled opacity-50" : ""
                }`}
              disabled={!isOtpValid || loading}
              onClick={handleVerify}
            >
              {loading ? "Verifying..." : "Verify & Login"}
              <ShieldCheck className="ms-2" />
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

          </div>
        </div>

      </div>
    </div>
  );
}
