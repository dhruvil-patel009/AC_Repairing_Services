export default function Products() {
  const products = [
    {
      image: "/smart-led-bulb-product.jpg",
      name: "Smart LED Bulb",
      price: "₹399",
    },
    {
      image: "/cordless-drill-tool.jpg",
      name: "Cordless Drill",
      price: "₹2,499",
    },
    {
      image: "/water-filter-system.jpg",
      name: "Water Filter",
      price: "₹4,999",
    },
    {
      image: "/tool-kit-set.jpg",
      name: "Tool Kit",
      price: "₹1,299",
    },
  ]

  return (
    <section id="products" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Popular Products</h2>
          <p className="text-muted lead">Quality products at great prices</p>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-sm-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={product.image || "/placeholder.svg"}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title fw-bold mb-2">{product.name}</h6>
                  <p className="text-primary fw-bold fs-5 mb-3">{product.price}</p>
                  <button className="btn btn-primary btn-sm w-100">
                    <i className="bi bi-cart-plus me-2"></i>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
