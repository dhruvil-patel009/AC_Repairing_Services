export default function RecentActivity() {
  return (
    <div className="card p-4">
      <div className="d-flex justify-content-between mb-3">
        <h6 className="fw-bold">Recent Activity</h6>
        <span className="text-primary">View All</span>
      </div>

      <table className="table align-middle">
        <thead>
          <tr className="text-muted">
            <th>Job ID</th>
            <th>Customer</th>
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#JC-1024</td>
            <td>Sarah Jenkins</td>
            <td>Downtown Metro</td>
            <td>Oct 24, 2023</td>
            <td><span className="badge bg-success">Completed</span></td>
          </tr>
          <tr>
            <td>#JC-1025</td>
            <td>Mike Ross</td>
            <td>Suburbs Area B</td>
            <td>Oct 25, 2023</td>
            <td><span className="badge bg-primary">In Progress</span></td>
          </tr>
          <tr>
            <td>#JC-1026</td>
            <td>Lara Croft</td>
            <td>Uptown Office</td>
            <td>Oct 26, 2023</td>
            <td><span className="badge bg-warning">Pending</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
