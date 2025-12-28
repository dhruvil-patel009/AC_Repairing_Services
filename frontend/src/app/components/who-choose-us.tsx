export default function WhyChooseUs() {
  const features = [
    {
      icon: "bi-shield-check",
      title: "Verified Professionals",
      description: "All our technicians are background verified",
    },
    {
      icon: "bi-cash-coin",
      title: "Transparent Pricing",
      description: "No hidden charges or extra fees",
    },
    {
      icon: "bi-clock-history",
      title: "Secure Payments",
      description: "100% safe transactions",
    },
    {
      icon: "bi-award",
      title: "On-Time Service",
      description: "Punctual and reliable service",
    },
    {
      icon: "bi-headset",
      title: "Warranty",
      description: "Service warranty available",
    },
  ]

  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Why Choose Us</h2>
          <p className="text-muted lead">Your trust is our priority</p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="d-flex align-items-start gap-3 p-3">
                <div
                  className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className={`${feature.icon} text-primary fs-4`}></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-2">{feature.title}</h6>
                  <p className="text-muted small mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
