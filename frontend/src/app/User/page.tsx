"use client"
import {
  
  Grid3x3Gap,
  Wrench,
  PersonGear,
  Lightning,
  Headset,
  ArrowRight,
  ShieldCheck,
  Tree,
  Stars,
  Gear,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  ArrowRepeat,
  EmojiSmile,
  CalendarCheck,
  Search,
  CartPlus,
  StarFill,
  ArrowLeft,
} from "react-bootstrap-icons"
import './styles/landingpage.css'
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

export default function UserLandingPage() {
    const router = useRouter();
  
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="badge bg-primary-light text-primary px-3 py-2 mb-4 d-inline-flex align-items-center rounded-pill"
                style={{ backgroundColor: "#e0f2fe" }}
              >
                <ShieldCheck className="me-2" />
                Certified Cooling Experts
              </div>
              <h1 className="display-3 fw-bold mb-4">
                Mastering the Art of <br />
                <span className="text-primary">Cool Comfort</span>
              </h1>
              <p className="lead text-muted mb-5 pe-lg-5">
                Experience premium HVAC services with our engineering-first approach. We ensure perfect climate control
                for your home.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary-custom text-white">Book Service</button>
                <button className="btn btn-outline-custom">Our Plans</button>
              </div>

              {/* Carousel Indicators Placeholder */}
              <div className="mt-5 pt-5 d-flex gap-2">
                <span className="bg-primary rounded-pill" style={{ width: "40px", height: "6px" }}></span>
                <span className="bg-secondary opacity-25 rounded-pill" style={{ width: "12px", height: "6px" }}></span>
                <span className="bg-secondary opacity-25 rounded-pill" style={{ width: "12px", height: "6px" }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-white border-top border-bottom">
        <div className="container py-lg-5">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <h2 className="fw-bold h1 mb-3">Our Services</h2>
              <p className="text-muted mb-0">
                Professional cooling solutions tailored to your needs. Fast, reliable, and affordable.
              </p>
            </div>
            <a href="#" className="text-primary text-decoration-none fw-semibold">
              View all services <ChevronRight className="small" />
            </a>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="service-icon mb-4 rounded-3 text-primary d-flex align-items-center justify-content-center">
                  <Wrench />
                </div>
                <h4 className="fw-bold mb-3">AC Repair</h4>
                <p className="text-muted mb-4 small">
                  Fast diagnosis and repair for all major brands. We fix cooling issues, leaks, and noises quickly.
                </p>
                <a
                  href="#"
                  className="mt-auto d-flex justify-content-between align-items-center p-3 bg-light rounded-3 text-decoration-none text-dark fw-medium small"
                >
                  Learn More <ChevronRight className="small" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="service-icon mb-4 rounded-3 text-primary d-flex align-items-center justify-content-center">
                  <Gear />
                </div>
                <h4 className="fw-bold mb-3">Installation</h4>
                <p className="text-muted mb-4 small">
                  Professional installation for split and window units ensuring maximum efficiency and neatness.
                </p>
                <a
                  href="#"
                  className="mt-auto d-flex justify-content-between align-items-center p-3 bg-light rounded-3 text-decoration-none text-dark fw-medium small"
                >
                  Learn More <ChevronRight className="small" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="service-icon mb-4 rounded-3 text-primary d-flex align-items-center justify-content-center">
                  <ArrowRepeat />
                </div>
                <h4 className="fw-bold mb-3">Maintenance AMC</h4>
                <p className="text-muted mb-4 small">
                  Annual maintenance contracts to keep your AC running smooth all year round. Prevent breakdowns.
                </p>
                <a
                  href="#"
                  className="mt-auto d-flex justify-content-between align-items-center p-3 bg-light rounded-3 text-decoration-none text-dark fw-medium small"
                >
                  Learn More <ChevronRight className="small" />
                </a>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="service-icon mb-4 rounded-3 text-primary d-flex align-items-center justify-content-center">
                  <Wrench />
                </div>
                <h4 className="fw-bold mb-3">AC Repair</h4>
                <p className="text-muted mb-4 small">
                  Fast diagnosis and repair for all major brands. We fix cooling issues, leaks, and noises quickly.
                </p>
                <a
                  href="#"
                  className="mt-auto d-flex justify-content-between align-items-center p-3 bg-light rounded-3 text-decoration-none text-dark fw-medium small"
                >
                  Learn More <ChevronRight className="small" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="service-icon mb-4 rounded-3 text-primary d-flex align-items-center justify-content-center">
                  <Gear />
                </div>
                <h4 className="fw-bold mb-3">Installation</h4>
                <p className="text-muted mb-4 small">
                  Professional installation for split and window units ensuring maximum efficiency and neatness.
                </p>
                <a
                  href="#"
                  className="mt-auto d-flex justify-content-between align-items-center p-3 bg-light rounded-3 text-decoration-none text-dark fw-medium small"
                >
                  Learn More <ChevronRight className="small" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                <div className="service-icon mb-4 rounded-3 text-primary d-flex align-items-center justify-content-center">
                  <ArrowRepeat />
                </div>
                <h4 className="fw-bold mb-3">Maintenance AMC</h4>
                <p className="text-muted mb-4 small">
                  Annual maintenance contracts to keep your AC running smooth all year round. Prevent breakdowns.
                </p>
                <a
                  href="#"
                  className="mt-auto d-flex justify-content-between align-items-center p-3 bg-light rounded-3 text-decoration-none text-dark fw-medium small"
                >
                  Learn More <ChevronRight className="small" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works  */}
      <section id="how-it-works" className="py-5 bg-white">
        <div className="container text-center mb-5 mt-4">
          <h2 className="fw-bold h1 mb-3">How It Works</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Get your AC fixed or installed in three simple steps. We make it hassle-free.
          </p>
        </div>
        <div className="container position-relative py-4">
          <div className="work-connector d-none d-lg-block"></div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="text-center position-relative">
                <div className="work-icon mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center">
                  <Search className="text-primary fs-4" />
                </div>
                <h5 className="fw-bold mb-3 mt-2">1. Choose Service</h5>
                <p className="text-muted mb-0 mx-auto" style={{ maxWidth: "280px", fontSize: "0.95rem" }}>
                  Select from our wide range of repair, installation, or maintenance services.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center position-relative">
                <div className="work-icon mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center">
                  <CalendarCheck className="text-primary fs-4" />
                </div>
                <h5 className="fw-bold mb-3 mt-2">2. Schedule Slot</h5>
                <p className="text-muted mb-0 mx-auto" style={{ maxWidth: "280px", fontSize: "0.95rem" }}>
                  Pick a convenient date and time. Our technicians are punctual.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center position-relative">
                <div className="work-icon mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center">
                  <EmojiSmile className="text-primary fs-4" />
                </div>
                <h5 className="fw-bold mb-3 mt-2">3. Relax & Cool</h5>
                <p className="text-muted mb-0 mx-auto" style={{ maxWidth: "280px", fontSize: "0.95rem" }}>
                  Sit back while our experts handle the rest. Enjoy the cool air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-5">
        <div className="container text-center mb-5">
          <h2 className="fw-bold h1 mb-2">Featured Products</h2>
          <p className="text-muted">Top-rated air conditioners for your home comfort.</p>
        </div>
        <div className="container">
          <div className="row g-4">
            {[
              {
                name: "FrostCool Inverter AC",
                price: "$499",
                rating: "4.8 (124)",
                badge: "1.5 Ton",
                img: "/split-ac.jpg",
              },
              {
                name: "EcoBreeze Window Unit",
                price: "$349",
                rating: "4.5 (89)",
                badge: "1.0 Ton",
                img: "/window-ac.jpg",
              },
              {
                name: "SmartFlow Pro 5000",
                price: "$699",
                rating: "4.9 (310)",
                badge: "Best Seller",
                img: "/premium-ac.jpg",
              },
              {
                name: "FlexiCool Portable",
                price: "$299",
                rating: "4.2 (45)",
                badge: "Portable",
                img: "/portable-ac.jpg",
              },
            ].map((p, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="card product-card border-0 shadow-sm rounded-4 h-100">
                  <div className="position-relative">
                    <span className="badge bg-light text-dark position-absolute top-0 end-0 m-3 z-1 small">
                      {p.badge}
                    </span>
                    <div className="product-img-bg rounded-3 p-4 d-flex align-items-center justify-content-center">
                      <img src={p.img || "/placeholder.svg"} alt={p.name} className="img-fluid" />
                    </div>
                  </div>
                  <div className="card-body px-4 pb-4 pt-3">
                    <h5 className="fw-bold mb-1 h6">{p.name}</h5>
                    <div className="d-flex align-items-center mb-3 small text-muted">
                      <StarFill className="text-warning me-1" /> {p.rating}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary h5 mb-0">{p.price}</span>
                      <button className="btn btn-primary-soft btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center">
                        <CartPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-outline-dark px-4 py-2 fw-semibold">View All Products</button>
          </div>
        </div>
      </section>


 <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-5">
            <div>
              <h2 className="fw-bold h1 mb-2">Customer Stories</h2>
              <p className="text-muted mb-0">Don't just take our word for it.</p>
            </div>
            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-dark rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px" }}
              >
                <ArrowLeft />
              </button>
              <button
                className="btn btn-outline-dark rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px" }}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                name: "Sarah Jenkins",
                role: "Homeowner",
                text: "Absolutely fantastic service! The technician arrived on time, was very polite, and fixed my leaking AC in under an hour. Highly recommended for anyone in the metro area.",
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                text: "I bought two FrostCool Inverter ACs from Metro Cool. The installation was seamless and the pricing was better than other local stores. Great experience!",
              },
              {
                name: "Emily Rodriguez",
                role: "Architect",
                text: "The annual maintenance contract is a lifesaver. They schedule the visits proactively and my ACs have never run better. Professional and trustworthy team.",
                rating: 4,
              },
            ].map((t, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm p-4 rounded-4">
                  <div className="text-warning mb-3 small d-flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <StarFill key={s} className={s > (t.rating || 5) ? "text-muted opacity-25" : ""} />
                    ))}
                  </div>
                  <p className="text-dark-emphasis mb-4 flex-grow-1">"{t.text}"</p>
                  <div className="d-flex align-items-center">
                    <img
                      src={`/abstract-profile.png?height=40&width=40&query=profile+${i}`}
                      className="rounded-circle me-3"
                      alt={t.name}
                    />
                    <div>
                      <h6 className="fw-bold mb-0 small">{t.name}</h6>
                      <p className="text-muted small mb-0">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* About Section */}
      <section className="py-5 bg-light-soft">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="text-primary fw-bold text-uppercase mb-3">About Us</p>
              <h2 className="display-4 fw-bold mb-4">The MetroCool Story</h2>
              <p className="text-muted mb-4 lead">
                Founded on the principles of engineering excellence and customer respect, Metro Cool has grown from a
                small neighborhood repair shop to the city's most trusted HVAC partner.
              </p>
              <p className="text-muted mb-5">
                We believe that home service shouldn't be a hassle. That's why we've built our entire process around
                transparency, punctuality, and technical precision.
              </p>
              <a href="#" className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2">
                Read full story <ArrowRight />
              </a>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                {features.map((feature, index) => (
                  <div className="d-flex gap-4 mb-5" key={index}>
                    <div className="about-feature-icon flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="h5 fw-bold mb-2">{feature.title}</h4>
                      <p className="text-muted mb-0">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-5 mb-5">
        <div className="container">
          <div className="cta-box bg-primary p-5 rounded-4 text-center text-white position-relative overflow-hidden">
            <div className="cta-pattern"></div>
            <h2 className="display-5 fw-bold mb-3 position-relative">Ready to beat the heat?</h2>
            <p className="mb-5 opacity-75 position-relative mx-auto" style={{ maxWidth: "600px" }}>
              Book your service today or browse our latest collection of energy-efficient air conditioners.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 position-relative">
              <button className="btn btn-light btn-lg px-4 text-primary fw-bold">Book a Service</button>
              <button className="btn btn-outline-light btn-lg px-4 fw-bold">View Products</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-auto">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <a className="navbar-brand d-flex align-items-center fw-bold fs-4 mb-4" href="#">
                {/* <Snowflake className="text-primary me-2" /> */}
                Metro Cool
              </a>
              <p className="text-muted mb-4 pe-lg-5">
                Your trusted partner for all cooling solutions. We bring comfort to your home with expert services.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="social-icon">
                  <Facebook />
                </a>
                <a href="#" className="social-icon">
                  <Twitter />
                </a>
                <a href="#" className="social-icon">
                  <Instagram />
                </a>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="fw-bold mb-4">Services</h5>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">AC Repair</li>
                <li className="mb-2">Installation</li>
                <li className="mb-2">Annual Maintenance</li>
                <li className="mb-2">Gas Refill</li>
              </ul>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <h5 className="fw-bold mb-4">Quick Links</h5>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">About Us</li>
                <li className="mb-2">Contact</li>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Terms of Service</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="fw-bold mb-4">Newsletter</h5>
              <p className="text-muted mb-4">Subscribe to get special offers and updates.</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control py-2" placeholder="Your email address" />
                <button className="btn btn-primary px-4" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr className="my-5 opacity-10" />
          <div className="text-center text-muted small pb-4">© 2025 Metro Cool Services. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "Room Air-Conditioner",
    description: "Complete diagnostic and service for standard room AC units ensuring optimal cooling efficiency.",
    icon: <Grid3x3Gap size={24} />,
  },
  {
    title: "Split AC + Window AC",
    description: "Specialized care for both split systems and window units. We handle the complexities of both types.",
    icon: <Grid3x3Gap size={24} />,
  },
  {
    title: "Installations",
    description:
      "Professional mounting, sealing, and setup. We ensure your new unit is installed for maximum longevity.",
    icon: <Wrench size={24} />,
  },
  {
    title: "AC Services",
    description: "Annual maintenance contracts and routine checkups to keep your air quality high and bills low.",
    icon: <PersonGear size={24} />,
  },
  {
    title: "Repair + Gas Charging",
    description: "Fixing leaks, refilling refrigerants, and repairing components to restore cooling power instantly.",
    icon: <Lightning size={24} />,
  },
  {
    title: "Need something else?",
    description: "Contact our support team for custom requests.",
    icon: <Headset size={24} />,
    isSpecial: true,
  },
]

const features = [
  {
    title: "Deep Roots",
    description: "Over two decades of serving our local community with unwavering dedication and trust.",
    icon: <Tree size={20} />,
  },
  {
    title: "Zero Mess Promise",
    description:
      "We respect your home. Our technicians wear shoe covers and clean up every speck of dust before leaving.",
    icon: <Stars size={20} />,
  },
  {
    title: "Engineering Mindset",
    description:
      "We don't just swap parts; we diagnose with data. Our team is trained to solve root causes, not just symptoms.",
    icon: <Gear size={20} />,
  },
]
