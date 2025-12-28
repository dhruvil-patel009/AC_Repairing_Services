'use client';

import { useRouter } from 'next/navigation';
import '../styles/verification-modal.css';

interface Props {
  open: boolean;
}

export default function VerificationPendingModal({ open }: Props) {
  const router = useRouter();

  if (!open) return null;

  const handleOk = () => {
    router.push('/auth/login'); // 👈 redirect to login page
  };

  return (
    <div className="vp-overlay">
      <div className="vp-modal">

        <div className="vp-icon">
          🛡️
          <span className="vp-badge">PENDING</span>
        </div>

        <h3>Verification in Progress</h3>

        <p className="vp-text">
          Thank you for registering. Your technician profile is currently
          under review by our administrative team to ensure quality standards
          and safety.
        </p>

        <div className="vp-info">
          <strong>What happens next?</strong>
          <p>
            You will receive an automated notification via <b>SMS</b> and
            <b> Email</b> once your documents are approved.
          </p>
        </div>

        {/* ✅ SINGLE OK BUTTON */}
        <button className="vp-btn" onClick={handleOk}>
          OK
        </button>

      </div>
    </div>
  );
}
