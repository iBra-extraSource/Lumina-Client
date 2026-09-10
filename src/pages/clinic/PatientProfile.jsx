import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PatientProfile.css";

function PatientProfile() {
  const { id } = useParams();

  const [patient, setPatient] = useState(null);

  useEffect(() => {
    getPatient();
  }, [id]);

  async function getPatient() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/patients/${id}`
      );

      const data = await response.json();

      if (response.ok) {
        setPatient(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

  if (!patient) {
    return (
      <div className="patient-profile-page">
        <main className="patient-profile-main">
          <p>Loading patient...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="patient-profile-page">
      <aside className="patient-profile-sidebar">
        <Link to="/" className="patient-profile-logo">
          Lumina Aesthetics
        </Link>

        <nav className="patient-profile-nav">
          <Link to="/clinic/dashboard">
            Dashboard
          </Link>

          <Link
            to="/clinic/patients"
            className="active-link"
          >
            Patients
          </Link>

          <Link to="/clinic/predictions">
            Predictions
          </Link>

          <Link to="/clinic/profile">
            Clinic Profile
          </Link>
        </nav>

        <Link
          to="/"
          className="patient-profile-logout"
        >
          Log Out
        </Link>
      </aside>

      <main className="patient-profile-main">
        <div className="patient-profile-header">
          <div>
            <p className="patient-profile-label">
              Patient Profile
            </p>

            <h1>{patient.full_name}</h1>

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
            {patient.full_name
              ? patient.full_name.charAt(0).toUpperCase()
              : "P"}
          </div>

          <div className="patient-profile-details">
            <div>
              <p className="patient-detail-label">
                Email
              </p>

              <p>
                {patient.email || "Not provided"}
              </p>
            </div>

            <div>
              <p className="patient-detail-label">
                Phone
              </p>

              <p>
                {patient.phone || "Not provided"}
              </p>
            </div>

            <div>
              <p className="patient-detail-label">
                Date of Birth
              </p>

              <p>
                {patient.date_of_birth
                  ? new Date(
                      patient.date_of_birth
                    ).toLocaleDateString()
                  : "Not provided"}
              </p>
            </div>

            <div>
              <p className="patient-detail-label">
                Gender
              </p>

              <p>
                {patient.gender || "Not provided"}
              </p>
            </div>

            <div>
              <p className="patient-detail-label">
                Procedure Interest
              </p>

              <p>
                {patient.procedure_interest ||
                  "Not selected"}
              </p>
            </div>

            <div>
              <p className="patient-detail-label">
                Date Added
              </p>

              <p>
                {patient.created_at
                  ? new Date(
                      patient.created_at
                    ).toLocaleDateString()
                  : "Unknown"}
              </p>
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

            <button>
              Edit Notes
            </button>
          </div>

          <div className="patient-notes-box">
            <p>
              {patient.consultation_notes ||
                "No consultation notes have been added yet."}
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
            <p>
              No saved predictions yet.
            </p>
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