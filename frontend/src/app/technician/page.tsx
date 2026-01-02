
import JobCard from "./job/JobCard";


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
            id = "MC-121"
            title="AC Repair & Maintenance" 
            client="Sarah Jenkins" 
            time="15 min ago" 
            address="Downtown Lofts, Apt 4B" 
            schedule="Today, 2:00 PM - 4:00 PM"
            tag="New Request"
          />
          <JobCard
            id = "MC-122" 
            title="AC Repair & Maintenance" 
            client="Sarah Jenkins" 
            time="15 min ago" 
            address="Downtown Lofts, Apt 4B" 
            schedule="Today, 2:00 PM - 4:00 PM"
            tag="New Request"
          />
          <JobCard
            id = "MC-123" 
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

