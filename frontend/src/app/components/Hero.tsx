"use client";

const slides = [
  {
    title: "Professional Home Services at Your Doorstep",
    subtitle: "AC Repair • Plumbing • Electrician • Cleaning",
    image: "/mobile-app-mockup.png",
    primaryBtn: "Book a Service",
    secondaryBtn: "View Services",
  },
  {
    title: "Trusted Technicians, Quality Work",
    subtitle: "Verified Professionals • On-Time Service",
    image: "/mobile-app-mockup.png",
    primaryBtn: "Find a Technician",
    secondaryBtn: "How It Works",
  },
  {
    title: "Fast, Affordable & Reliable Services",
    subtitle: "Transparent Pricing • WhatsApp & OTP Support",
    image: "/mobile-app-mockup.png",
    primaryBtn: "Get Started",
    secondaryBtn: "Contact Us",
  },
];

export default function Hero() {
  return (
    <section className="position-relative overflow-hidden">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="15000"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="hero-slide d-flex align-items-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="hero-overlay" />

                <div className="container position-relative text-white">
                  <div className="row">
                    <div className="col-lg-7 col-md-10">
                      <h1 className="hero-title fw-bold mb-4">
                        {slide.title}
                      </h1>
                      <p className="hero-subtitle mb-4">
                        {slide.subtitle}
                      </p>
                      <div className="d-flex gap-3 flex-wrap">
                        <button className="btn btn-primary btn-lg px-4">
                          {slide.primaryBtn}
                        </button>
                        <button className="btn btn-outline-light btn-lg px-4">
                          {slide.secondaryBtn}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
