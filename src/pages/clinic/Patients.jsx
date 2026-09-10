import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Patients.css";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  async function getPatients() {
    try {
      const clinicId = localStorage.getItem("clinicId");

      const response = await fetch(
        `http://localhost:5000/api/patients?clinic_id=${clinicId}`
      );

      const data = await response.json();

      if (response.ok) {
        setPatients(data);
      } else {
        alert("Failed to load patients.");
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

  return (
    <div className="patients-page">
      <aside className="patients-sidebar">
        <Link to="/" className="patients-logo">
          Lumina Aesthetics
        </Link>

        <nav className="patients-nav">
          <Link to="/clinic/dashboard">
            Dashboard
          </Link>

          <Link to="/clinic/patients" className="active-link">
            Patients
          </Link>

          <Link to="/clinic/predictions">
            Predictions
          </Link>

          <Link to="/clinic/profile">
            Clinic Profile
          </Link>
        </nav>

        <Link to="/" className="patients-logout">
          Log Out
        </Link>
      </aside>

      <main className="patients-main">
        <div className="patients-header">
          <div>
            <p className="patients-label">
              Patient Management
            </p>

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
            <p>Date Added</p>
            <p>Status</p>
            <p></p>
          </div>

          {patients.length === 0 ? (
            <div className="patient-row">
              <p>No patients found.</p>
            </div>
          ) : (
            patients.map((patient) => (
              <div
                className="patient-row"
                key={patient.id}
              >
                <div className="patient-name">
                  <div className="patient-avatar">
                    {patient.full_name
                      ? patient.full_name.charAt(0).toUpperCase()
                      : "P"}
                  </div>

                  <div>
                    <h3>{patient.full_name}</h3>
                    <p>{patient.email || "No email"}</p>
                  </div>
                </div>

                <p>
                  {patient.procedure_interest || "Not selected"}
                </p>

                <p>
                  {patient.created_at
                    ? new Date(patient.created_at).toLocaleDateString()
                    : "Unknown"}
                </p>

                <p className="patient-status">
                  Active
                </p>

                <Link to={`/clinic/patients/${patient.id}`}>
                  View
                </Link>
              </div>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default Patients;