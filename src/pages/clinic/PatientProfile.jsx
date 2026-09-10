import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./PatientProfile.css";

function PatientProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [patient, setPatient] = useState(null);
  const [editing, setEditing] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [procedureInterest, setProcedureInterest] = useState("");
  const [consultationNotes, setConsultationNotes] = useState("");

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

        setFullName(data.full_name || "");
        setEmail(data.email || "");
        setPhone(data.phone || "");
        setDateOfBirth(
          data.date_of_birth
            ? data.date_of_birth.substring(0, 10)
            : ""
        );
        setGender(data.gender || "");
        setProcedureInterest(data.procedure_interest || "");
        setConsultationNotes(data.consultation_notes || "");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

  async function handleSave() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/patients/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
        alert("Patient updated successfully.");
        setPatient(data.patient);
        setEditing(false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/patients/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Patient deleted successfully.");
        navigate("/clinic/patients");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

  function handleCancel() {
    setFullName(patient.full_name || "");
    setEmail(patient.email || "");
    setPhone(patient.phone || "");
    setDateOfBirth(
      patient.date_of_birth
        ? patient.date_of_birth.substring(0, 10)
        : ""
    );
    setGender(patient.gender || "");
    setProcedureInterest(patient.procedure_interest || "");
    setConsultationNotes(patient.consultation_notes || "");

    setEditing(false);
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

            <h1>
              {editing ? fullName : patient.full_name}
            </h1>

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
                Full Name
              </p>

              {editing ? (
                <input
                  value={fullName}
                  onChange={(event) =>
                    setFullName(event.target.value)
                  }
                />
              ) : (
                <p>{patient.full_name}</p>
              )}
            </div>

            <div>
              <p className="patient-detail-label">
                Email
              </p>

              {editing ? (
                <input
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                />
              ) : (
                <p>{patient.email || "Not provided"}</p>
              )}
            </div>

            <div>
              <p className="patient-detail-label">
                Phone
              </p>

              {editing ? (
                <input
                  value={phone}
                  onChange={(event) =>
                    setPhone(event.target.value)
                  }
                />
              ) : (
                <p>{patient.phone || "Not provided"}</p>
              )}
            </div>

            <div>
              <p className="patient-detail-label">
                Date of Birth
              </p>

              {editing ? (
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(event) =>
                    setDateOfBirth(event.target.value)
                  }
                />
              ) : (
                <p>
                  {patient.date_of_birth
                    ? new Date(
                        patient.date_of_birth
                      ).toLocaleDateString()
                    : "Not provided"}
                </p>
              )}
            </div>

            <div>
              <p className="patient-detail-label">
                Gender
              </p>

              {editing ? (
                <select
                  value={gender}
                  onChange={(event) =>
                    setGender(event.target.value)
                  }
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p>{patient.gender || "Not provided"}</p>
              )}
            </div>

            <div>
              <p className="patient-detail-label">
                Procedure Interest
              </p>

              {editing ? (
                <input
                  value={procedureInterest}
                  onChange={(event) =>
                    setProcedureInterest(event.target.value)
                  }
                />
              ) : (
                <p>
                  {patient.procedure_interest || "Not selected"}
                </p>
              )}
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
          </div>

          <div className="patient-notes-box">
            {editing ? (
              <textarea
                rows="5"
                value={consultationNotes}
                onChange={(event) =>
                  setConsultationNotes(event.target.value)
                }
              />
            ) : (
              <p>
                {patient.consultation_notes ||
                  "No consultation notes have been added yet."}
              </p>
            )}
          </div>
        </section>

        <section className="patient-profile-section">
          <div className="patient-section-header">
            <div>
              <p className="patient-profile-label">
                Patient Management
              </p>

              <h2>Manage patient</h2>
            </div>

            {editing ? (
              <div>
                <button onClick={handleSave}>
                  Save Changes
                </button>

                <button onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <button onClick={() => setEditing(true)}>
                  Edit Patient
                </button>

                <button onClick={handleDelete}>
                  Delete Patient
                </button>
              </div>
            )}
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
            <p>No saved predictions yet.</p>
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