import Navbar from "./components/Navbar";
import NextJob from "./components/NextJob";
import RecentActivity from "./components/RecentActivity";
import Stats from "./components/Stats";
import Performance from "./components/Performance";
import './styles/styles.css'

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="container px-4 py-4">
        <h4 className="fw-bold">Dashboard Overview</h4>
        <p className="text-muted">Good morning, Alex! You have 5 new updates today.</p>

        <Stats />

        <div className="row mt-4 g-4">
          <div className="col-lg-8">
            <RecentActivity />
          </div>
          <div className="col-lg-4">
            <Performance />
            <div className="mt-4">
              <NextJob />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
