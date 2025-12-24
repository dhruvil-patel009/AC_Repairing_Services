"use client"

export default function Services() {
  const services = [
    {
      icon: "bi-fan",
      title: "AC Repair",
      price: "₹499",
      description: "Professional AC repair and maintenance services",
    },
    {
      icon: "bi-droplet",
      title: "Car Wash",
      price: "₹299",
      description: "Premium car washing and detailing",
    },
    {
      icon: "bi-wrench-adjustable",
      title: "Plumbing",
      price: "₹399",
      description: "Expert plumbing repair and installation",
    },
    {
      icon: "bi-lightning-charge",
      title: "Electrician",
      price: "₹249",
      description: "Certified electrical repair services",
    },
    {
      icon: "bi-house",
      title: "Home Cleaning",
      price: "₹599",
      description: "Deep cleaning for your entire home",
    },
    {
      icon: "bi-tools",
      title: "Appliances Repair",
      price: "₹449",
      description: "Fix all types of home appliances",
    },
  ]

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our Services</h2>
          <p className="text-muted lead">Expert professionals for all your home needs</p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-lift" style={{ transition: "transform 0.3s" }}>
                <div className="card-body text-center p-4">
                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className={`${service.icon} text-primary fs-1`}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-2">{service.title}</h5>
                  <p className="text-primary fw-bold fs-5 mb-2">Starting From {service.price}</p>
                  <p className="text-muted small mb-3">{service.description}</p>
                  <button className="btn btn-outline-primary btn-sm rounded-pill px-4">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
      `}</style>
    </section>
  )
}
