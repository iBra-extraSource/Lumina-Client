import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ClinicProfile.css";

function ClinicProfile() {
  const [clinic, setClinic] = useState(null);

  useEffect(() => {
    getClinic();
  }, []);

  async function getClinic() {
    try {
      const clinicId = localStorage.getItem("clinicId");

      const response = await fetch(
        `http://localhost:5000/api/clinics/${clinicId}`
      );

      const data = await response.json();

      if (response.ok) {
        setClinic(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

  if (!clinic) {
    return (
      <div className="clinic-profile-page">
        <main className="clinic-profile-main">
          <p>Loading clinic...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="clinic-profile-page">
      <aside className="clinic-profile-sidebar">
        <Link to="/" className="clinic-profile-logo">
          Lumina Aesthetics
        </Link>

        <nav className="clinic-profile-nav">
          <Link to="/clinic/dashboard">
            Dashboard
          </Link>

          <Link to="/clinic/patients">
            Patients
          </Link>

          <Link to="/clinic/predictions">
            Predictions
          </Link>

          <Link
            to="/clinic/profile"
            className="active-link"
          >
            Clinic Profile
          </Link>
        </nav>

        <Link to="/" className="clinic-profile-logout">
          Log Out
        </Link>
      </aside>

      <main className="clinic-profile-main">
        <div className="clinic-profile-header">
          <div>
            <p className="clinic-profile-label">
              Clinic Profile
            </p>

            <h1>{clinic.clinic_name}</h1>

            <p>
              Manage your clinic details, doctor information, and account
              settings.
            </p>
          </div>

          <button className="clinic-profile-edit-button">
            Edit Profile
          </button>
        </div>

        <section className="clinic-profile-card">
          <div className="clinic-profile-image">
            {clinic.clinic_name
              ? clinic.clinic_name.charAt(0).toUpperCase()
              : "C"}
          </div>

          <div className="clinic-profile-details">
            <div>
              <p className="clinic-detail-label">
                Clinic Name
              </p>

              <p>{clinic.clinic_name}</p>
            </div>

            <div>
              <p className="clinic-detail-label">
                Doctor Name
              </p>

              <p>{clinic.doctor_name}</p>
            </div>

            <div>
              <p className="clinic-detail-label">
                Email
              </p>

              <p>{clinic.email}</p>
            </div>

            <div>
              <p className="clinic-detail-label">
                Phone
              </p>

              <p>
                {clinic.phone || "Not provided"}
              </p>
            </div>

            <div>
              <p className="clinic-detail-label">
                Specialization
              </p>

              <p>
                {clinic.specialization || "Not provided"}
              </p>
            </div>

            <div>
              <p className="clinic-detail-label">
                Location
              </p>

              <p>
                {clinic.address || "Not provided"}
              </p>
            </div>
          </div>
        </section>

        <section className="clinic-profile-section">
          <div>
            <p className="clinic-profile-label">
              Account
            </p>

            <h2>Account settings</h2>
          </div>

          <div className="clinic-profile-actions">
            <button>
              Change Password
            </button>

            <button className="clinic-danger-button">
              Delete Account
            </button>
          </div>
        </section>

        <section className="clinic-profile-section">
          <div>
            <p className="clinic-profile-label">
              Subscription
            </p>

            <h2>Clinic plan</h2>
          </div>

          <div className="clinic-plan-card">
            <div>
              <h3>Professional Plan</h3>

              <p>
                Access patient management, AI predictions,
                prediction history, and clinic tools.
              </p>
            </div>

            <p className="clinic-plan-status">
              Active
            </p>
          </div>
        </section>

        <section className="clinic-profile-note">
          <h3>Privacy and clinical responsibility</h3>

          <p>
            Patient information and facial images should only be used with
            appropriate consent. AI-generated results are consultation support
            tools and do not guarantee treatment outcomes.
          </p>
        </section>
      </main>
    </div>
  );
}

export default ClinicProfile;