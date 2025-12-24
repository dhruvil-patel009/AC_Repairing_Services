export default function MobileApp() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">Book Services Anytime, Anywhere</h2>
            <p className="lead mb-4">Download our mobile app for a seamless experience</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#" className="btn btn-light btn-lg px-4">
                <i className="bi bi-apple me-2"></i>
                App Store
              </a>
              <a href="#" className="btn btn-outline-light btn-lg px-4">
                <i className="bi bi-google-play me-2"></i>
                Google Play
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="position-relative d-inline-block">
              <img
                src="/mobile-app-mockup.png"
                alt="ServiceHub mobile app"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
