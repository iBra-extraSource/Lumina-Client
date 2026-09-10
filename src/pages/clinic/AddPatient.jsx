import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddPatient.css";

function AddPatient() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [procedureInterest, setProcedureInterest] = useState("");
  const [consultationNotes, setConsultationNotes] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!consent) {
      alert("Please confirm patient consent.");
      return;
    }

    try {
      const clinicId = localStorage.getItem("clinicId");

const response = await fetch(
  "http://localhost:5000/api/patients",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clinic_id: clinicId,
      full_name: fullName,
      email: email,
      phone: phone,
      date_of_birth: dateOfBirth,
      gender: gender,
      procedure_interest: procedureInterest,
      consultation_notes: consultationNotes,
    }),
  }
);


      const data = await response.json();

      if (response.ok) {
        alert("Patient added successfully.");
        navigate("/clinic/patients");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

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
          onSubmit={handleSubmit}
        >
          <section className="patient-form-section">
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
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  required
                />
              </div>

              <div className="patient-form-group">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="patient@email.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="patient-form-group">
                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="+962"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="patient-form-group">
                <label>Date of Birth</label>

                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(event) => setDateOfBirth(event.target.value)}
                />
              </div>

              <div className="patient-form-group">
                <label>Gender</label>

                <select
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              </div>

              <div className="patient-form-group">
                <label>Procedure Interest</label>

                <select
                  value={procedureInterest}
                  onChange={(event) =>
                    setProcedureInterest(event.target.value)
                  }
                >
                  <option value="">
                    Select procedure
                  </option>

                  <option value="Rhinoplasty">
                    Rhinoplasty
                  </option>

                  <option value="Lip Fillers">
                    Lip Fillers
                  </option>

                  <option value="Jawline Contouring">
                    Jawline Contouring
                  </option>

                  <option value="Chin Enhancement">
                    Chin Enhancement
                  </option>

                  <option value="Facelift">
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
                value={consultationNotes}
                onChange={(event) =>
                  setConsultationNotes(event.target.value)
                }
              ></textarea>
            </div>
          </section>

          <section className="patient-consent-section">
            <div className="patient-consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />

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