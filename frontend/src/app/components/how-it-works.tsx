export default function HowItWorks() {
  const steps = [
    {
      icon: "bi-search",
      number: "1",
      title: "Choose Service or Product",
      description: "Browse through our wide range of services and products",
    },
    {
      icon: "bi-cart-check",
      number: "2",
      title: "Book / Order Easily",
      description: "Simple booking process with instant confirmation",
    },
    {
      icon: "bi-truck",
      number: "3",
      title: "Technician Arrives / Product Delivered",
      description: "Professional service at your doorstep",
    },
  ]

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">How It Works</h2>
          <p className="text-muted lead">Simple, Fast, and Reliable</p>
        </div>

        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-md-4">
              <div className="text-center">
                <div className="position-relative d-inline-block mb-4">
                  <div
                    className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <i className={`${step.icon} text-white fs-1`}></i>
                  </div>
                  {/* <div
                    className="position-absolute top-0 end-0 bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                    style={{ width: "32px", height: "32px", transform: "translate(25%, -25%)" }}
                  >
                    {step.number}
                  </div> */}
                </div>
                <h5 className="fw-bold mb-3">{step.title}</h5>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
