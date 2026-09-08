import { Link } from "react-router-dom";
import "./ClinicDashboard.css";

function ClinicDashboard() {
  return (
    <div className="clinic-dashboard">
      <aside className="clinic-sidebar">
        <Link to="/" className="clinic-dashboard-logo">
          Lumina Aesthetics
        </Link>

        <nav className="clinic-dashboard-nav">
          <Link to="/clinic/dashboard" className="active-link">
            Dashboard
          </Link>

          <Link to="/clinic/patients">
            Patients
          </Link>

          <Link to="/clinic/predictions">
            Predictions
          </Link>

          <Link to="/clinic/profile">
            Clinic Profile
          </Link>
        </nav>

        <Link to="/" className="clinic-dashboard-logout">
          Log Out
        </Link>
      </aside>

      <main className="clinic-dashboard-main">
        <div className="clinic-dashboard-header">
          <div>
            <p className="clinic-dashboard-label">
              Clinic Dashboard
            </p>

            <h1>Welcome back.</h1>

            <p>
              Manage patients, review AI predictions, and continue
              consultations from one place.
            </p>
          </div>

          <Link
            to="/clinic/patients"
            className="clinic-dashboard-button"
          >
            Add Patient
          </Link>
        </div>

        <section className="clinic-stats">
          <div className="clinic-stat-card">
            <p>Total Patients</p>
            <h2>24</h2>
          </div>

          <div className="clinic-stat-card">
            <p>Predictions Generated</p>
            <h2>38</h2>
          </div>

          <div className="clinic-stat-card">
            <p>Consultations This Month</p>
            <h2>12</h2>
          </div>
        </section>

        <section className="clinic-dashboard-section">
          <div className="clinic-section-header">
            <div>
              <p className="clinic-dashboard-label">
                Recent Patients
              </p>

              <h2>Latest activity</h2>
            </div>

            <Link to="/clinic/patients">
              View all
            </Link>
          </div>

          <div className="clinic-patient-list">
            <div className="clinic-patient-row">
              <div className="clinic-patient-avatar">
                SA
              </div>

              <div className="clinic-patient-info">
                <h3>Sample Patient</h3>
                <p>Rhinoplasty consultation</p>
              </div>

              <p className="clinic-patient-date">
                Sep 8, 2026
              </p>

              <button>View</button>
            </div>

            <div className="clinic-patient-row">
              <div className="clinic-patient-avatar">
                MA
              </div>

              <div className="clinic-patient-info">
                <h3>Example Patient</h3>
                <p>Jawline consultation</p>
              </div>

              <p className="clinic-patient-date">
                Sep 6, 2026
              </p>

              <button>View</button>
            </div>
          </div>
        </section>

        <section className="clinic-dashboard-note">
          <h3>Clinical reminder</h3>

          <p>
            AI-generated previews should be used as consultation support
            only and should not be presented as guaranteed treatment outcomes.
          </p>
        </section>
      </main>
    </div>
  );
}

export default ClinicDashboard;