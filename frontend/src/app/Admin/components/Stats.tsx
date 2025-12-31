export default function Stats() {
  const items = [
    { title: "Total Bookings", value: "1,240", trend: "+12%" },
    { title: "Total Revenue", value: "$84,300", trend: "+8.5%" },
    { title: "Active Technicians", value: "42", trend: "0%" },
    { title: "Today's Jobs", value: "18", trend: "+2" },
  ];

  return (
    <div className="row g-4 mb-4">
      {items.map((i) => (
        <div className="col-md-3" key={i.title}>
          <div className="card admin-card">
            <small className="text-muted">{i.title}</small>
            <h4 className="fw-bold mt-2">{i.value}</h4>
            <span className="trend">{i.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
