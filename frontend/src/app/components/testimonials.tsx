export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Homeowner",
      image: "/woman-portrait.png",
      rating: 5,
      text: "Excellent service! The electrician was very professional and fixed the issue in no time. Highly recommend!",
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      image: "/thoughtful-man-portrait.png",
      rating: 5,
      text: "Quick, easy, and hassle-free experience. The plumber arrived on time and the pricing was transparent.",
    },
    {
      name: "Amit Patel",
      role: "Apartment Owner",
      image: "/professional-man.jpg",
      rating: 5,
      text: "Very satisfied with the AC servicing service. Professional team and affordable prices. Will definitely use again!",
    },
  ]

  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">What Our Customers Say</h2>
          <p className="text-muted lead">Trusted by thousands of happy customers</p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <p className="text-muted mb-0">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
