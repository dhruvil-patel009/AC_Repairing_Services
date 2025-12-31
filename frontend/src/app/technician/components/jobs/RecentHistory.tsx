export default function RecentHistory() {
  return (
    <section>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold mb-0">Recent History</h6>
        <span className="text-primary">View All →</span>
      </div>

      <div className="card p-3">
        <table className="table align-middle mb-0">
          <tbody>
            <tr>
              <td>
                <strong>Heater Maintenance</strong>
                <div className="text-muted small">
                  Tech Corp Office • 789 Pine St
                </div>
              </td>
              <td className="text-muted">Yesterday, 3:00 PM</td>
              <td>
                <span className="badge bg-success-subtle text-success">
                  Completed
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Faucet Replacement</strong>
                <div className="text-muted small">
                  James Wilson • 221B Baker St
                </div>
              </td>
              <td className="text-muted">Oct 20, 2023</td>
              <td>
                <span className="badge bg-success-subtle text-success">
                  Completed
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Smart Thermostat Setup</strong>
                <div className="text-muted small">
                  Linda Carter • 500 Ocean Blvd
                </div>
              </td>
              <td className="text-muted">Oct 18, 2023</td>
              <td>
                <span className="badge bg-success-subtle text-success">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
