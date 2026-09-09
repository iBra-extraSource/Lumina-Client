import { Link } from "react-router-dom";
import "./AddPatient.css";

function AddPatient() {
  return (
    <div className="add-patient-page">
      <aside className="add-patient-sidebar">
        <Link to="/" className="add-patient-logo">
          Lumina Aesthetics
        </Link>

        <nav className="add-patient-nav">
          <Link to="/clinic/dashboard">Dashboard</Link>

          <Link to="/clinic/patients" className="active-link">
            Patients
          </Link>

          <Link to="/clinic/predictions">Predictions</Link>

          <Link to="/clinic/profile">
            Clinic Profile
          </Link>
        </nav>

        <Link to="/" className="add-patient-logout">
          Log Out
        </Link>
      </aside>

      <main className="add-patient-main">
        <div className="add-patient-header">
          <div>
            <p className="add-patient-label">
              Patient Management
            </p>

            <h1>Add a new patient.</h1>

            <p>
              Create a patient profile before starting a consultation or
              generating an AI prediction.
            </p>
          </div>

          <Link
            to="/clinic/patients"
            className="back-patients-link"
          >
            Back to Patients
          </Link>
        </div>

<form
  className="add-patient-form"
  onSubmit={(event) => {
    event.preventDefault();
    window.location.href = "/clinic/patients";
  }}
>          <section className="patient-form-section">
            <div className="patient-section-heading">
              <p className="add-patient-label">
                Personal Information
              </p>

              <h2>Patient details</h2>
            </div>

            <div className="patient-form-grid">
              <div className="patient-form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter full name"
                />
              </div>

              <div className="patient-form-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="patient@email.com"
                />
              </div>

              <div className="patient-form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="+962"
                />
              </div>

              <div className="patient-form-group">
                <label>Date of Birth</label>

                <input type="date" />
              </div>

              <div className="patient-form-group">
                <label>Gender</label>

                <select>
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">
                    Prefer not to say
                  </option>
                </select>
              </div>

              <div className="patient-form-group">
                <label>Procedure Interest</label>

                <select>
                  <option value="">
                    Select procedure
                  </option>

                  <option value="rhinoplasty">
                    Rhinoplasty
                  </option>

                  <option value="lip-fillers">
                    Lip Fillers
                  </option>

                  <option value="jawline">
                    Jawline Contouring
                  </option>

                  <option value="chin">
                    Chin Enhancement
                  </option>

                  <option value="facelift">
                    Facelift
                  </option>
                </select>
              </div>
            </div>
          </section>

          <section className="patient-form-section">
            <div className="patient-section-heading">
              <p className="add-patient-label">
                Consultation
              </p>

              <h2>Initial notes</h2>
            </div>

            <div className="patient-form-group">
              <label>Consultation Notes</label>

              <textarea
                rows="6"
                placeholder="Add any relevant notes about the patient or consultation..."
              ></textarea>
            </div>
          </section>

          <section className="patient-consent-section">
            <div className="patient-consent">
              <input type="checkbox" />

              <p>
                The patient has been informed about the use of their
                information and facial images within Lumina Aesthetics.
              </p>
            </div>
          </section>

          <div className="add-patient-actions">
            <Link
              to="/clinic/patients"
              className="cancel-patient-button"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="save-patient-button"
            >
              Save Patient
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddPatient;