import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ClinicDashboard.css";

function ClinicDashboard() {
  const [patients, setPatients] = useState([]);
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    getDashboardData();
  }, []);

  async function getDashboardData() {
    try {
      const clinicId = localStorage.getItem("clinicId");

      if (!clinicId) {
        return;
      }

      const patientsResponse = await fetch(
        `http://localhost:5000/api/patients?clinic_id=${clinicId}`
      );

      const predictionsResponse = await fetch(
        `http://localhost:5000/api/predictions?clinic_id=${clinicId}`
      );

      const patientsData = await patientsResponse.json();
      const predictionsData = await predictionsResponse.json();

      if (patientsResponse.ok) {
        setPatients(patientsData);
      }

      if (predictionsResponse.ok) {
        setPredictions(predictionsData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const recentPatients = patients.slice(0, 2);

  const consultationsThisMonth = predictions.filter((prediction) => {
    const predictionDate = new Date(prediction.created_at);
    const now = new Date();

    return (
      predictionDate.getMonth() === now.getMonth() &&
      predictionDate.getFullYear() === now.getFullYear()
    );
  }).length;

  function getInitials(name) {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  return (
    <div className="clinic-dashboard">
      <aside className="clinic-sidebar">
        <Link to="/" className="clinic-dashboard-logo">
          Lumina Aesthetics
        </Link>

        <nav className="clinic-dashboard-nav">
          <Link
            to="/clinic/dashboard"
            className="active-link"
          >
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

        <Link
          to="/"
          className="clinic-dashboard-logout"
        >
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
            to="/clinic/patients/add"
            className="clinic-dashboard-button"
          >
            Add Patient
          </Link>
        </div>

        <section className="clinic-stats">
          <div className="clinic-stat-card">
            <p>Total Patients</p>
            <h2>{patients.length}</h2>
          </div>

          <div className="clinic-stat-card">
            <p>Predictions Generated</p>
            <h2>{predictions.length}</h2>
          </div>

          <div className="clinic-stat-card">
            <p>Consultations This Month</p>
            <h2>{consultationsThisMonth}</h2>
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
            {recentPatients.length === 0 ? (
              <p>No patients yet.</p>
            ) : (
              recentPatients.map((patient) => (
                <div
                  className="clinic-patient-row"
                  key={patient.id}
                >
                  <div className="clinic-patient-avatar">
                    {getInitials(patient.full_name)}
                  </div>

                  <div className="clinic-patient-info">
                    <h3>{patient.full_name}</h3>

                    <p>
                      {patient.procedure_interest ||
                        "No procedure selected"}
                    </p>
                  </div>

                  <p className="clinic-patient-date">
                    {new Date(
                      patient.created_at
                    ).toLocaleDateString()}
                  </p>

                  <Link
                    to={`/clinic/patients/${patient.id}`}
                  >
                    View
                  </Link>
                </div>
              ))
            )}
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