"use client";

import { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "../../styles/auth.css";

export default function Page() {

  const [phone, setPhone] = useState<string>("");
  const [loading, setLoading] = useState(false);


  const router = useRouter();

  // digits only (no spaces)
  const phoneDigits = phone.replace(/\D/g, "");
  const isValidPhone = phoneDigits.length === 10;

  // ✅ format: 123 456 7890 (10 digits total)
  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    const part1 = digits.slice(0, 3);
    const part2 = digits.slice(3, 6);
    const part3 = digits.slice(6, 10);

    return [part1, part2, part3].filter(Boolean).join(" ");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };




  const handleLogin = async () => {
    const digits = phone.replace(/\D/g, "");

    if (digits.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);


      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login-phone`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: phoneDigits }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to send OTP");
        return;
      }

      // DEV MODE OTP (OPTIONAL)
      console.log("OTP:", data.otp);


      //  ✅ store one-time flag
sessionStorage.setItem("otp_sent", "true");
      // ✅ correct redirect
      router.push(`/auth/otp?phone=${phoneDigits}`);
    } catch (err) {
      toast.error("Server error. Please try again.");
    }
  };

  // ENTER KEY SUPPORT
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isValidPhone && !loading) {
      handleLogin();
    }
  };




  return (
    <div className="container-fluid min-vh-100">
      <div className="row min-vh-100">
        {/* LEFT IMAGE */}

        <div className="col-lg-6 d-none d-lg-block p-0 position-relative left-panel h-full w-full bg-cover bg-center login-img"  >

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

        {/* RIGHT CONTENT */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-white p-4">
          <div className="login-wrapper w-100" style={{ maxWidth: "max-content" }}>
            <h1 className="fw-bold mb-2 right-title" style={{ fontSize: "32px" }}>
              Welcome back
            </h1>
            <p className="text-muted mb-5">Enter your mobile number to log in or create an account.</p>

            <div className="mb-4">
              <label className="form-label fw-semibold mb-2" style={{ fontSize: "14px" }}>
                Phone Number
              </label>

              <div
                className="input-group input-group-lg border rounded-3 overflow-hidden"
                style={{
                  border: "1px solid #e2e8f0",
                  backgroundColor: "#fff",
                }}

              >
                <span
                  className="input-group-text border-0 d-flex align-items-center"
                  style={{
                    backgroundColor: "#d3d3d394",
                    paddingLeft: "16px",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#94a3b8", fontSize: "20px" }}
                  >
                    call
                  </span>
                </span>

                <input
                  type="tel"
                  inputMode="numeric"
                  className="form-control border-0 ps-3"
                  placeholder="123 456 7890"
                  value={phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handleKeyDown}
                  style={{
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>


            <button
              className={`login-btn mb-5 w-100 d-flex align-items-center justify-content-center gap-2 ${!isValidPhone || loading ? "disabled opacity-50" : ""
                }`}
              disabled={!isValidPhone || loading}
              onClick={handleLogin}
            >
              {loading ? "Sending OTP..." : "Login Securely"}
              <ArrowRight size={18} />
            </button>


            {/* DIVIDER */}


            <div className="d-flex align-items-center py-2 mb-5 justify-content-center">
              <div className="flex-grow-1 border-top"></div>

              <span className="mx-3 text-muted small fw-medium">
                New to HVAC Marketplace?
              </span>

              <div className="flex-grow-1 border-top"></div>
            </div>

            {/* JOIN CARDS */}
            <div className="row g-4 mb-5">
              <div className="col-6" onClick={() => router.replace("/auth/register")}>
                <div className="join-card">
                  <div className="icon-circle">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>person</span>
                  </div>
                  <div className="fw-bold mb-1" style={{ fontSize: "15px" }}>
                    Join as User
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    Book services
                  </div>
                </div>
              </div>

              <div className="col-6" onClick={() => router.replace("/auth/technician-registration")}>
                <div className="join-card">
                  <div className="icon-circle">
                    <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>engineering</span>                  </div>
                  <div className="fw-bold mb-1" style={{ fontSize: "15px" }}>
                    Join as Technician
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    Offer services
                  </div>
                </div>
              </div>
            </div>

            {/* TERMS */}
            <p className="text-center text-muted-foreground mb-0" style={{ fontSize: "12px", lineHeight: "1.6" }}>
              By continuing, you agree to our{" "}
              <span className="text-primary fw-medium cursor-pointer" style={{ color: "#0d3b66" }}>
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-primary fw-medium cursor-pointer" style={{ color: "#0d3b66" }}>
                Privacy Policy
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
