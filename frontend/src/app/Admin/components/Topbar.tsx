export default function Topbar({ onToggle }: { onToggle: () => void }) {
  return (
    <header className="admin-topbar">
      <div className="d-flex align-items-center gap-3">
        <button className="btn toggle-btn" onClick={onToggle}>☰</button>
        <input
          className="form-control top-search"
          placeholder="Search bookings, technicians, services..."
        />
      </div>

      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell"></i>
        <div className="avatar-circle">A</div>
        <div className="lh-sm">
          <div className="fw-semibold">Alex Morgan</div>
          <small className="text-muted">Super Admin</small>
        </div>
      </div>
    </header>
  );
}
