'use client';

import {
  PersonPlus,
  Pencil,
  Person,
  Telephone,
  Envelope,
  Clipboard
} from 'react-bootstrap-icons';
import { useRouter } from "next/navigation";
import '../../styles/auth.css'
import { useState } from 'react';
import { toast } from "react-toastify";


export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Handle text inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Handle image select
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  // 🔹 Submit register
  const handleSubmit = async () => {
    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("role", "user");
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("phone", form.phone);
      formData.append("email", form.email);

      if (imageFile) {
        formData.append("profileImage", imageFile); // 👈 MUST MATCH
      }

      const res =await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`, {
        method: "POST",
        body: formData
      });



      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Registration failed");
        return;
      }

      toast.success("Registered successfully ✅");
      router.push("/auth/login");
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      {/* FORM CARD */}
      <div className="container my-5">
        <div className="card register-card mx-auto">
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <span className="badge bg-light text-primary mb-2">
                Customer Registration
              </span>
              <h3 className="fw-bold">Create your Account</h3>
              <p className="text-muted">
                Join the marketplace for premium HVAC solutions and seamless
                service management.
              </p>
            </div>

            {/* PROFILE PHOTO */}
            <div className="upload-box mb-5 text-center">
              <label className="upload-area">
                {imagePreview ? (
                  <img src={imagePreview} className="avatar-img" />
                ) : (
                  <div className="avatar-placeholder">
                    <Person size={28} />
                  </div>
                )}

                <span className="edit-badge">
                  <Pencil size={12} />
                </span>

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </label>

              <p className="fw-semibold mt-3 mb-1">Profile Photo</p>
              <small className="text-muted">
                Click to upload or drag and drop (Optional)
              </small>
            </div>

            {/* PERSONAL INFORMATION */}
            <div className="form-section">
              <h3 className="fs-5 fw-bold text-dark mb-4 d-flex align-items-center gap-2">

                <span className="material-symbols-outlined text-primary" style={{ fontSize: "26px" }}>badge</span>
                Personal Information

              </h3>

              <div className="row g-3 mt-2">
                <div className="col-md-4">
                  <label className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="firstName"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Middle Name</label>
                  <input className="form-control" />
                </div>

                <div className="col-md-4">
                  <label className="form-label">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    name="lastName"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="form-section mt-4">
              <h3 className="fs-5 fw-bold text-dark mt-2 mb-4 d-flex align-items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "26px" }}>contact_mail</span>
                Contact Details
              </h3>


              <div className="row g-3 mt-2">
                <div className="col-md-6">
                  <label className="form-label">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <div className="input-wrapper">
                    <Telephone />
                    <input
                      className="form-control"
                      placeholder="(555) 123-4567"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <div className="input-wrapper">
                    <Envelope />
                    <input
                      className="form-control"
                      placeholder="john.doe@example.com"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* TERMS */}
            <p className="terms-text mt-4">
              By registering, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>

            {/* BUTTON */}
            <button
              className="btn btn-primary w-100 mt-3"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="signin-text mt-3">
              Already have an account?{" "}
              <span onClick={() => router.replace("/auth/login")}>Sign in</span>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}
