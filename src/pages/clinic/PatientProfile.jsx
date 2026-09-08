import { Link } from "react-router-dom";
import "./PatientProfile.css";

function PatientProfile() {
  return (
    <div className="patient-profile-page">
      <aside className="patient-profile-sidebar">
        <Link to="/" className="patient-profile-logo">
          Lumina Aesthetics
        </Link>

        <nav className="patient-profile-nav">
          <Link to="/clinic/dashboard">Dashboard</Link>

          <Link to="/clinic/patients" className="active-link">
            Patients
          </Link>

          <Link to="/clinic/predictions">Predictions</Link>

          <Link to="/clinic/profile">
            Clinic Profile
          </Link>
        </nav>

        <Link to="/" className="patient-profile-logout">
          Log Out
        </Link>
      </aside>

      <main className="patient-profile-main">
        <div className="patient-profile-header">
          <div>
            <p className="patient-profile-label">
              Patient Profile
            </p>

            <h1>Sample Patient</h1>

            <p>
              Review patient information, consultation notes, and previous
              AI predictions.
            </p>
          </div>

          <Link
            to="/clinic/patients"
            className="patient-profile-back"
          >
            Back to Patients
          </Link>
        </div>

        <section className="patient-info-card">
          <div className="patient-profile-avatar">
            SA
          </div>

          <div className="patient-profile-details">
            <div>
              <p className="patient-detail-label">Email</p>
              <p>patient@email.com</p>
            </div>

            <div>
              <p className="patient-detail-label">Phone</p>
              <p>+962 7X XXX XXXX</p>
            </div>

            <div>
              <p className="patient-detail-label">Date of Birth</p>
              <p>January 1, 2000</p>
            </div>

            <div>
              <p className="patient-detail-label">Gender</p>
              <p>Female</p>
            </div>

            <div>
              <p className="patient-detail-label">Procedure Interest</p>
              <p>Rhinoplasty</p>
            </div>

            <div>
              <p className="patient-detail-label">Last Visit</p>
              <p>September 8, 2026</p>
            </div>
          </div>
        </section>

        <section className="patient-profile-section">
          <div className="patient-section-header">
            <div>
              <p className="patient-profile-label">
                Consultation
              </p>

              <h2>Consultation notes</h2>
            </div>

            <button>Edit Notes</button>
          </div>

          <div className="patient-notes-box">
            <p>
              Patient is interested in rhinoplasty and would like to
              understand possible changes to the nose shape before making
              a decision.
            </p>
          </div>
        </section>

        <section className="patient-profile-section">
          <div className="patient-section-header">
            <div>
              <p className="patient-profile-label">
                AI Predictions
              </p>

              <h2>Prediction history</h2>
            </div>

            <Link
              to="/clinic/predictions/new"
              className="new-prediction-button"
            >
              New Prediction
            </Link>
          </div>

          <div className="patient-prediction-list">
            <div className="patient-prediction-row">
              <div className="patient-prediction-image">
                Preview
              </div>

              <div>
                <h3>Rhinoplasty</h3>
                <p>September 8, 2026</p>
              </div>

              <button>View</button>
            </div>

            <div className="patient-prediction-row">
              <div className="patient-prediction-image">
                Preview
              </div>

              <div>
                <h3>Rhinoplasty</h3>
                <p>September 2, 2026</p>
              </div>

              <button>View</button>
            </div>
          </div>
        </section>

        <section className="patient-profile-note">
          <h3>Clinical reminder</h3>

          <p>
            AI-generated predictions are visual consultation tools only and
            should not be presented as guaranteed medical or surgical outcomes.
          </p>
        </section>
      </main>
    </div>
  );
}

export default PatientProfile;