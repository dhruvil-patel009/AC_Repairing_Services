export default function RecentBookings() {
  return (
    <div className="card admin-card p-4">
      <div className="d-flex justify-content-between mb-3">
        <h6 className="fw-bold">Recent Bookings</h6>
        <span className="text-primary">View All</span>
      </div>

      <table className="table align-middle">
        <thead className="table-light">
          <tr>
            <th>Booking ID</th>
            <th>User</th>
            <th>Service</th>
            <th>Technician</th>
            <th>Status</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#BK-001</td>
            <td>John Doe</td>
            <td>AC Repair</td>
            <td>Mike T.</td>
            <td><span className="badge bg-info-subtle text-info">In Progress</span></td>
            <td className="text-success">Paid</td>
          </tr>
          <tr>
            <td>#BK-002</td>
            <td>Sarah Smith</td>
            <td>Duct Cleaning</td>
            <td className="text-muted">Unassigned</td>
            <td><span className="badge bg-warning-subtle text-warning">Pending</span></td>
            <td className="text-danger">Unpaid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
