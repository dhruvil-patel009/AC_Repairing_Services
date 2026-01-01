// src/app/technician/page.tsx
export default function TechnicianDashboard() {
  const stats = [
    { title: "Total Earnings", value: "$2,450", trend: "+12% last week", icon: "bi-currency-dollar", color: "text-primary" },
    { title: "Completed Jobs", value: "42", trend: "+4 this week", icon: "bi-check-circle", color: "text-success" },
    { title: "Pending Jobs", value: "5", trend: "Action Required", icon: "bi-three-dots", color: "text-warning" },
    { title: "New Requests", value: "3", trend: "High Priority", icon: "bi-bell", color: "text-danger" },
  ];

  return (
    <div className="bg-light min-vh-100">


      <div className="container p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Dashboard Overview</h2>
          <span className="text-muted">Welcome back, Alex</span>
        </div>

        {/* Stats Row */}
        <div className="row g-3 mb-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm p-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-muted mb-1 small">{stat.title}</p>
                    <h3 className="fw-bold">{stat.value}</h3>
                    <p className={`small mb-0 ${idx === 3 ? 'badge bg-light text-primary' : 'text-success'}`}>
                        {stat.trend}
                    </p>
                  </div>
                  <i className={`bi ${stat.icon} fs-4 ${stat.color}`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4 border-0">
          <li className="nav-item">
            <a className="nav-link active fw-bold" href="#">New Jobs <span className="badge bg-primary ms-1">3</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Accepted Jobs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" href="#">Completed Jobs</a>
          </li>
        </ul>

        {/* Job Cards Grid */}
        <div className="row g-4">
          <JobCard 
            title="AC Repair & Maintenance" 
            client="Sarah Jenkins" 
            time="15 min ago" 
            address="Downtown Lofts, Apt 4B" 
            schedule="Today, 2:00 PM - 4:00 PM"
            tag="New Request"
          />
          <JobCard 
            title="AC Repair & Maintenance" 
            client="Sarah Jenkins" 
            time="15 min ago" 
            address="Downtown Lofts, Apt 4B" 
            schedule="Today, 2:00 PM - 4:00 PM"
            tag="New Request"
          />
          <JobCard 
            title="Commercial Plumbing Check" 
            client="TechFlow Inc." 
            time="45 min ago" 
            address="1200 Innovation Drive, Floor 3" 
            schedule="Tomorrow, 9:00 AM"
            tag="New Request"
          />
        </div>
      </div>
    </div>
  );
}

function JobCard({ title, client, time, address, schedule, tag }: any) {
  return (
    <div className="col-12 col-xl-6">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body d-flex flex-column flex-md-row gap-3">
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between">
                <span className="badge bg-primary-subtle text-primary mb-2">{tag}</span>
                <small className="text-muted d-flex align-middle"><span className="material-symbols-outlined text-text-secondary text-[16px]">schedule</span>{time}</small>
            </div>
            <h5 className="fw-bold">{title}</h5>
            <p className="mb-2 small"><i className="bi bi-person me-2"></i>{client}</p>
            <p className="mb-2 small text-muted d-flex align-middle"><span className="material-symbols-outlined text-text-secondary text-[18px]">location_on</span>{address}</p>
            <p className="mb-3 small text-muted d-flex align-middle"><span className="material-symbols-outlined text-text-secondary text-[18px]">calendar_clock</span>
{schedule}</p>
<div className="d-flex align-items-center gap-4">
            <button className="btn btn-primary w-75 fw-bold">View Details</button>
            <div className="more-btn">
                        <span className="material-symbols-outlined text-text-secondary text-[18px]">more_vert</span>
            </div>
</div>

          </div>
          <div className="bg-light rounded d-none d-sm-block" style={{ width: '200px', height: '200px', objectFit: 'cover' }}>
            <div className="h-100 d-flex align-items-center justify-content-center text-muted">Image</div>
          </div>
        </div>
      </div>
    </div>
  );
}