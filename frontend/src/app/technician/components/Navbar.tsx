"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItem = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <li className="nav-item">
        <Link
          href={href}
          className={`nav-link fw-semibold ${
            isActive ? "text-primary border-bottom border-primary" : "text-muted"
          }`}
          style={{ paddingBottom: "6px" }}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <nav className="navbar bg-white shadow-sm px-5 py-3">
      {/* Logo */}
      <Link href="/" className="navbar-brand fw-bold">
        ❄ Metro Cool
      </Link>

      {/* Navigation */}
      <ul className="nav gap-4">
        {navItem("/", "Home")}
        {navItem("/technician/jobs", "Jobs")}
        {navItem("/", "Earnings")}
        {navItem("/", "Profile")}
      </ul>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell fs-5"></i>

        <div className="d-flex align-items-center gap-2">
          <div className="avatar">A</div>
          <div className="lh-sm">
            <div className="fw-semibold">Alex Johnson</div>
            <small className="text-muted">TECHNICIAN</small>
          </div>
        </div>
      </div>
    </nav>
  );
}
