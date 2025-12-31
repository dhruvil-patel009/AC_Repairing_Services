import ActiveUpcoming from "../components/jobs/ActiveUpcoming";
import NewOpportunities from "../components/jobs/NewOpportunities";
import RecentHistory from "../components/jobs/RecentHistory";
import Navbar from "../components/Navbar";


export default function JobsPage() {
  return (
    <>
      <Navbar />

      <main className="container-fluid px-4 py-4">
        {/* Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1">Job Dashboard</h4>
            <p className="text-muted mb-0">
              Welcome back. You have <span className="text-primary fw-semibold">2 new requests</span> waiting.
            </p>
          </div>

          <div className="d-flex gap-2 mt-3 mt-md-0">
            <button className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-funnel me-1"></i> Filter
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              <i className="bi bi-calendar me-1"></i> Calendar
            </button>
          </div>
        </div>

        <NewOpportunities />
        <ActiveUpcoming />
        <RecentHistory />
      </main>
    </>
  );
}
