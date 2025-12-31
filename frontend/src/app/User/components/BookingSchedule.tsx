"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  CheckCircleFill,
  ChevronLeft,
  ChevronRight,
  CalendarEvent,
  GeoAlt,
  Clock,
  ArrowRight,
  Headset,
} from "react-bootstrap-icons";
import '../styles/bookingconformation.css'

export default function BookingSchedule() {
  return (
    <div className="schedule-page">
      <div className="container py-4">

        {/* Breadcrumb */}
        <nav className="small text-muted mb-3">
          Home <span className="mx-1">›</span> AC Cleaning <span className="mx-1">›</span> Schedule
        </nav>

        {/* Heading */}
        <h3 className="fw-bold mb-1">Select Date &amp; Time</h3>
        <p className="text-muted mb-4">
          Choose a convenient slot for our HVAC experts to visit your property.
        </p>

        {/* Steps */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body d-flex flex-wrap align-items-center gap-4">
            <Step done label="Service Selection" />
            <Step active label="Date & Time" />
            <Step label="Confirmation" />
          </div>
        </div>

        <div className="row g-4">
          {/* LEFT */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">

                {/* Calendar Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0">
                    <CalendarEvent className="me-2 text-primary" />
                    October 2023
                  </h6>
                  <div className="d-flex gap-2">
                    <button className="btn btn-light btn-sm">
                      <ChevronLeft />
                    </button>
                    <button className="btn btn-light btn-sm">
                      <ChevronRight />
                    </button>
                  </div>
                </div>

                <div className="row g-3">
                  {/* Calendar */}
                  <div className="col-md-7">
                    <div className="calendar-grid">
                      {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d=>(
                        <div key={d} className="cal-head">{d}</div>
                      ))}
                      {Array.from({ length: 30 }).map((_, i) => (
                        <div
                          key={i}
                          className={`cal-day ${i === 4 ? "active" : ""}`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="col-md-5">
                    <h6 className="fw-bold small text-muted">MORNING</h6>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <Slot label="08:00 AM" />
                      <Slot label="09:00 AM" />
                      <Slot label="10:00 AM" active />
                      <Slot label="11:00 AM" disabled />
                    </div>

                    <h6 className="fw-bold small text-muted">AFTERNOON</h6>
                    <div className="d-flex flex-wrap gap-2">
                      <Slot label="12:00 PM" />
                      <Slot label="02:00 PM" />
                      <Slot label="04:00 PM" />
                      <Slot label="05:30 PM" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="alert alert-primary small mt-3 mb-0">
              💡 Morning slots are recommended for AC maintenance as it allows
              better temperature readings.
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm mb-3">
              <div className="card-body">
                <h6 className="fw-bold mb-3">Booking Summary</h6>

                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-box">❄️</div>
                  <div>
                    <div className="fw-semibold">AC Deep Cleaning</div>
                    <small className="text-muted">Split Unit • 1 Unit</small>
                  </div>
                </div>

                <SummaryRow icon={<Clock />} label="Date & Time" value="Thu, Oct 5 • 10:00 AM" />
                <SummaryRow icon={<GeoAlt />} label="Location" value="123 Palm Avenue, Metro City" />

                <hr />

                <div className="d-flex justify-content-between small mb-1">
                  <span>Subtotal</span>
                  <span>$45.00</span>
                </div>
                <div className="d-flex justify-content-between small mb-2">
                  <span>Tax & Fees</span>
                  <span>$2.50</span>
                </div>

                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span className="text-primary">$47.50</span>
                </div>

                <button className="btn btn-primary w-100 mt-3">
                  Continue Booking <ArrowRight className="ms-2" />
                </button>
              </div>
            </div>

            {/* Help */}
            <div className="card border-0 shadow-sm">
              <div className="card-body d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <Headset className="text-primary" />
                  <small>Need assistance?</small>
                </div>
                <a href="#" className="small text-primary fw-semibold">
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center small text-muted mt-5">
          © 2023 Metro Cool Services. All rights reserved.
        </footer>
      </div>

      {/* PAGE CSS */}
      <style jsx>{`
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 6px;
          text-align: center;
        }
        .cal-head {
          font-size: 12px;
          font-weight: 600;
          color: #6c757d;
        }
        .cal-day {
          padding: 8px 0;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
        }
        .cal-day:hover {
          background: #f1f5ff;
        }
        .cal-day.active {
          background: #0d6efd;
          color: #fff;
          font-weight: 600;
        }
        .slot {
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid #dee2e6;
          font-size: 13px;
          cursor: pointer;
        }
        .slot.active {
          background: #0d6efd;
          color: #fff;
          border-color: #0d6efd;
        }
        .slot.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f1f5ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}

/* ===== Components ===== */

function Step({ label, active, done }: any) {
  return (
    <div className="d-flex align-items-center gap-2">
      {done ? (
        <CheckCircleFill className="text-success" />
      ) : (
        <span
          className={`step-circle ${active ? "active" : ""}`}
        ></span>
      )}
      <span className={`small fw-semibold ${active ? "text-primary" : "text-muted"}`}>
        {label}
      </span>

      <style jsx>{`
        .step-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #dee2e6;
        }
        .step-circle.active {
          border-color: #0d6efd;
          background: #0d6efd;
        }
      `}</style>
    </div>
  );
}

function Slot({ label, active, disabled }: any) {
  return (
    <div className={`slot ${active ? "active" : ""} ${disabled ? "disabled" : ""}`}>
      {label}
    </div>
  );
}

function SummaryRow({ icon, label, value }: any) {
  return (
    <div className="d-flex align-items-start gap-2 mb-2 small">
      <span className="text-primary">{icon}</span>
      <div>
        <div className="text-muted">{label}</div>
        <div className="fw-semibold">{value}</div>
      </div>
    </div>
  );
}
