"use client"

import { useState } from "react"
import {
  CheckCircleFill,
  Calendar3,
  Clock,
  GeoAltFill,
  Star,
  Copy,
  CheckLg,
  PrinterFill,
  Download,
  CheckCircle,
  PersonCircle,
  Wrench,
} from "react-bootstrap-icons"
import "../styles/bookingconformation.css"

export default function BookingConfirmation() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("#MC-882910")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="booking-confirmation">
      {/* Success Header */}
      <header className="confirmation-header">
        <div className="success-icon">
          <CheckCircleFill size={64} />
        </div>
        <h1 className="confirmation-title">Your Service is Booked!</h1>
        <p className="confirmation-subtitle">
          We have sent a confirmation email to <strong>user@example.com</strong>
          <br />
          with all the details.
        </p>

        {/* Booking ID */}
        <div className="booking-id-container">
          <span className="booking-id-label">Booking ID:</span>
          <span className="booking-id-value">#MC-882910</span>
          <button className="booking-id-copy" onClick={copyToClipboard} aria-label="Copy booking ID">
            {copied ? <CheckLg size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-lg py-4 py-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {/* Booking Summary Card */}
            <article className="booking-card">
              <div className="card-top">
                <h2 className="card-title">Booking Summary</h2>
                <div className="card-actions">
                  <button className="action-btn" title="Print booking" aria-label="Print booking">
                    <PrinterFill size={18} />
                    <span className="d-none d-sm-inline">Print</span>
                  </button>
                  <button className="action-btn" title="Download receipt" aria-label="Download receipt">
                    <Download size={18} />
                    <span className="d-none d-sm-inline">Receipt</span>
                  </button>
                </div>
              </div>

              {/* Service Provider Info */}
              <section className="service-section">
                <div className="row g-4 align-items-center">
                  <div className="col-12 col-sm-5 col-md-4 text-center text-sm-start">
                    <img
                      src="../assets/AC-Repairing-Product.png"
                      alt="HVAC technician performing AC repair service"
                      className="service-image"
                    />
                  </div>
                  <div className="col-12 col-sm-7 col-md-8">
                    <span className="badge-verified">VERIFIED PROFESSIONAL</span>
                    <h3 className="service-name">Split AC Advanced Service</h3>
                    <p className="provider-name">
                      <span className="provider-icon">👤</span>Provider: <strong>Metro Cool Experts</strong>
                    </p>
                    <div className="rating-group">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} className="star-filled" />
                      ))}
                      <Star size={16} className="star-half" />
                      <span className="rating-value">(4.8/5)</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Date, Time & Location */}
              <section className="details-section">
                <div className="row g-3 g-lg-4">
                  <div className="col-12 col-lg-6">
                    <div className="detail-card">
                      <h4 className="detail-heading">
                        <Calendar3 size={18} className="me-2" />
                        DATE & TIME
                      </h4>
                      <div className="detail-group mt-3">
                        <p className="detail-primary">Oct 24, 2023</p>
                        <p className="detail-secondary">Thursday</p>
                      </div>
                      <div className="detail-group mt-3">
                        <div className="d-flex gap-2">
                          <Clock size={18} className="text-primary flex-shrink-0" />
                          <div>
                            <p className="detail-primary mb-1">10:00 AM - 11:00 AM</p>
                            <p className="detail-secondary">1 Hour Duration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="detail-card">
                      <h4 className="detail-heading">
                        <GeoAltFill size={18} className="me-2 text-danger" />
                        SERVICE LOCATION
                      </h4>
                      <p className="location-address mt-3">123 Metro Avenue, Apt 4B</p>
                      <p className="location-city">New York, NY 10001</p>
                      <a href="#" className="link-primary mt-2 d-inline-block">
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Info */}
              <section className="payment-section">
                <div className="row align-items-center g-3">
                  <div className="col-12 col-md-6">
                    <div className="payment-method">
                      <span className="payment-icon">💳</span>
                      <div>
                        <p className="payment-desc">Visa ending in 4242</p>
                        <p className="payment-status">Payment processed</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="text-md-end">
                      <p className="total-label">Total Amount Paid</p>
                      <p className="total-price">$85.00</p>
                    </div>
                  </div>
                </div>
                
              </section>
              <article className="next-steps-card mt-3">
      <h2 className="card-title">What Happens Next?</h2>

      <div className="steps-wrapper">
        <div className="steps-grid">

          <div className="step">
            <div className="step-indicator active">
              <CheckCircle size={22} />
            </div>
            <p className="step-label active">Booked</p>
          </div>

          <div className="step">
            <div className="step-indicator pending">
              <PersonCircle size={22} />
            </div>
            <p className="step-label">Assigning Pro</p>
          </div>

          <div className="step">
            <div className="step-indicator pending">
              <Wrench size={22} />
            </div>
            <p className="step-label">Service</p>
          </div>

        </div>
      </div>
    </article>
            </article>

            {/* What Happens Next */}
            

            {/* CTA Buttons */}
            <div className="button-group">
              <button className="btn btn-outline-dark btn-lg">Back to Home</button>
              <button className="btn btn-primary btn-lg">
                View My Bookings
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ms-2"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            {/* Support Link */}
            <p className="support-text">
              Need to reschedule?{" "}
              <a href="#" className="link-primary">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
