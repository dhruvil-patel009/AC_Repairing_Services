'use client';

import {
  Telephone,
  Envelope,
  Person,
  Camera,
  CreditCard,
  Tag
} from 'react-bootstrap-icons';
import { toast, ToastContainer } from 'react-toastify';
import '../../styles/auth.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import VerificationPendingModal from '@/app/components/VerificationPendingModal';


export default function TechnicianRegistration() {

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();


  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    experienceYears: '',
    promoCode: ''
  });

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [aadhaarPan, setAadhaarPan] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [aadhaarPreview, setAadhaarPreview] = useState<string | null>(null);


  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setProfilePhoto(file);
    setProfilePreview(URL.createObjectURL(file));
  };

  const handleAadhaarPanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setAadhaarPan(file);
    setAadhaarPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      toast.warning('Please fill all required fields');
      return;
    }

    if (!profilePhoto || !aadhaarPan) {
      toast.warning('Please upload profile photo and Aadhaar/PAN');
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append('role', 'technician');
      formData.append('firstName', form.firstName);
      formData.append('middleName', form.middleName);
      formData.append('lastName', form.lastName);
      formData.append('phone', form.phone);
      formData.append('email', form.email);
      formData.append('experienceYears', form.experienceYears);
      formData.append('promoCode', form.promoCode);
      formData.append('profile_photo', profilePhoto);
      formData.append('aadhaar_pan', aadhaarPan);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        {
          method: 'POST',
          body: formData
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || 'Registration failed');
        return;
      }

      setShowModal(true);


      toast.success('🎉 Registration successful! Waiting for admin approval');
    } catch (err) {
      toast.error('Server error. Please try again later');
    } finally {
      setLoading(false);
    }
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    router.push('/login'); // 👈 login page
  };


  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container-fluid min-vh-100 bg-light d-flex align-items-center justify-content-center py-4">
        <div className="row w-100 max-width">

          {/* LEFT INFO PANEL */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="network-card">

              {/* IMAGE CARD */}
              <div className="network-image">
                <div className="overlay-content">
                  <h2>Join Our Network</h2>
                  <p>
                    Connect with thousands of customers looking for HVAC experts like you.
                  </p>
                </div>
              </div>

              {/* FEATURES */}
              <div className="network-features">

                <div className="feature-item">
                  <div className="feature-icon">
                    💳
                  </div>
                  <div>
                    <h6>Automated Settlements</h6>
                    <p>Get paid instantly upon job completion with our automated financial system.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    ✔️
                  </div>
                  <div>
                    <h6>Verified Technician Badge</h6>
                    <p>Build trust with clients by displaying your verified status.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    📊
                  </div>
                  <div>
                    <h6>Tiered Benefits</h6>
                    <p>Unlock lower commission rates as you complete more jobs.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>



          {/* RIGHT FORM */}
          <div className="col-lg-8">
            <div className="form-card bg-white">
              <h3 className="fw-bold">Technician Registration</h3>
              <p className="text-muted mb-4">
                Fill in your details to start receiving service requests.
              </p>

              <h6 className="section-title">PERSONAL DETAILS</h6>

              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">First Name</label>
                  <input className="form-control" name="firstName" onChange={handleChange} placeholder="John" />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Middle Name</label>
                  <input className="form-control" name="middleName" onChange={handleChange} />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Last Name</label>
                  <input className="form-control" name="lastName" onChange={handleChange} placeholder="Doe" />
                </div>

                <div className="col-md-6 position-relative">
                  <Telephone className="input-icon" />
                  <label className="form-label">Phone Number</label>
                  <input className="form-control ps-5" name="phone" onChange={handleChange} placeholder="(555) 000-0000" />
                </div>

                <div className="col-md-6 position-relative">
                  <Envelope className="input-icon" />
                  <label className="form-label">Email Address</label>
                  <input className="form-control ps-5" name="email" onChange={handleChange} placeholder="john@example.com" />
                </div>
              </div>

              <h6 className="section-title mt-4">PROFESSIONAL INFO</h6>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Years of Experience</label>
                  <select className="form-select" name="experienceYears" onChange={handleChange}>
                    <option value="">Select years</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>

                <div className="col-md-6"></div>

                <div className="upload-box" onClick={() => document.getElementById('profilePhoto')?.click()}>
                  {profilePreview ? (
                    <img
                      src={profilePreview}
                      alt="Profile Preview"
                      className="img-fluid rounded"
                      style={{ maxHeight: 120 }}
                    />
                  ) : (
                    <>
                      <Camera size={24} />
                      <p>Click to upload</p>
                      <small>JPG, PNG (Max 2MB)</small>
                    </>
                  )}
                </div>

                <input
                  type="file"
                  id="profilePhoto"
                  accept="image/*"
                  hidden
                  onChange={handleProfilePhotoChange}
                />


                <div className="upload-box" onClick={() => document.getElementById('aadhaarPan')?.click()}>
                  {aadhaarPreview ? (
                    <p className="text-success fw-semibold">
                      ✅ File Selected
                    </p>
                  ) : (
                    <>
                      <CreditCard size={24} />
                      <p>Click to upload</p>
                      <small>PDF, JPG (Max 5MB)</small>
                    </>
                  )}
                </div>

                <input
                  type="file"
                  id="aadhaarPan"
                  accept="image/*,application/pdf"
                  hidden
                  onChange={handleAadhaarPanChange}
                />


                <div className="col-md-12 position-relative">
                  <Tag className="input-icon" />
                  <label className="form-label">
                    Promo Code <span className="text-muted">(Optional)</span>
                  </label>
                  <input className="form-control ps-5" name="promoCode"
                    onChange={handleChange} placeholder="Enter code" />
                </div>
              </div>

              <button
                className="btn btn-primary w-100 mt-4"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? 'Submitting...' : 'Complete Registration'}
              </button>

              <p className="text-center text-muted small mt-2">
                🔒 Your data is securely encrypted and stored.
              </p>
            </div>
          </div>
        </div>
        <VerificationPendingModal
          open={showModal}
        />

      </div></>
  );
}
