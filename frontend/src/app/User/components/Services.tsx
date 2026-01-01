"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "react-bootstrap-icons";
import "../styles/services.css";

const services = [
  {
    title: "Room Air-Conditioner",
    description:
      "Comprehensive service for standalone room units to ensure optimal cooling and efficiency.",
    image: "/assets/AC-Repairing-Product.png",
    link: "#",
  },
  {
    title: "Split AC + Window AC",
    description:
      "Expert care for both split and window AC models, covering all technical aspects and maintenance.",
    image: "/assets/AC-Repairing-Product.png",
    link: "#",
  },
  {
    title: "Installations",
    description:
      "Professional mounting, unmounting, and setup services with safety assurance.",
    image: "/assets/AC-Repairing-Product.png",
    link: "#",
  },
  {
    title: "AC Services",
    description:
      "Routine maintenance, filter cleaning, and master service checks for longevity.",
    image: "/assets/AC-Repairing-Product.png",
    link: "#",
  },
  {
    title: "Repair + Gas Charging",
    description:
      "Fixing cooling issues, leakages, component replacements, and gas refilling.",
    image: "/assets/AC-Repairing-Product.png",
    link: "#",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page py-5">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb custom-breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">Services</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-5">
          <h1 className="services-title">AC Services</h1>
          <p className="services-subtitle">
            Premium cooling solutions for your home. Select a service below to
            view details and book an expert technician.
          </p>
        </div>

        {/* Grid */}
        <div className="row gx-4 gy-5">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="service-card h-100">
                {/* Image */}
                <div className="image-wrap">
                  <img src={service.image} alt={service.title} />

                  <span className="arrow-circle">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                {/* Content */}
                <div className="card-content px-3 py-3">
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>

                  <Link href={service.link} className="details-link">
                    View Details <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
