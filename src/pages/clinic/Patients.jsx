import { Link } from "react-router-dom";
import "./Patients.css";

function Patients() {
  return (
    <div className="patients-page">
      <aside className="patients-sidebar">
        <Link to="/" className="patients-logo">
          Lumina Aesthetics
        </Link>

        <nav className="patients-nav">
          <Link to="/clinic/dashboard">Dashboard</Link>

          <Link to="/clinic/patients" className="active-link">
            Patients
          </Link>

          <Link to="/clinic/predictions">Predictions</Link>
          <Link to="/clinic/profile">Clinic Profile</Link>
        </nav>

        <Link to="/" className="patients-logout">
          Log Out
        </Link>
      </aside>

      <main className="patients-main">
        <div className="patients-header">
          <div>
            <p className="patients-label">Patient Management</p>

            <h1>Your patients.</h1>

            <p>
              View patient profiles, manage consultation details, and start
              new AI predictions.
            </p>
          </div>

          <Link
            to="/clinic/patients/add"
            className="patients-add-button"
          >
            Add Patient
          </Link>
        </div>

        <section className="patients-controls">
          <input
            type="text"
            placeholder="Search patients..."
          />

          <select>
            <option>All patients</option>
            <option>Recent</option>
            <option>With predictions</option>
          </select>
        </section>

        <section className="patients-table-card">
          <div className="patients-table-header">
            <p>Patient</p>
            <p>Procedure</p>
            <p>Last Visit</p>
            <p>Status</p>
            <p></p>
          </div>

          <div className="patient-row">
            <div className="patient-name">
              <div className="patient-avatar">
                SA
              </div>

              <div>
                <h3>Sample Patient</h3>
                <p>patient@email.com</p>
              </div>
            </div>

            <p>Rhinoplasty</p>
            <p>Sep 8, 2026</p>

            <p className="patient-status">
              Active
            </p>

            <Link to="/clinic/patients/1">
              View
            </Link>
          </div>

          <div className="patient-row">
            <div className="patient-name">
              <div className="patient-avatar">
                MA
              </div>

              <div>
                <h3>Example Patient</h3>
                <p>example@email.com</p>
              </div>
            </div>

            <p>Jawline Contouring</p>
            <p>Sep 6, 2026</p>

            <p className="patient-status">
              Active
            </p>

            <Link to="/clinic/patients/2">
              View
            </Link>
          </div>

          <div className="patient-row">
            <div className="patient-name">
              <div className="patient-avatar">
                LA
              </div>

              <div>
                <h3>Demo Patient</h3>
                <p>demo@email.com</p>
              </div>
            </div>

            <p>Chin Enhancement</p>
            <p>Sep 1, 2026</p>

            <p className="patient-status">
              Active
            </p>

            <Link to="/clinic/patients/3">
              View
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Patients;