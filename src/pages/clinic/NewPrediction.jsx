import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NewPrediction.css";

function NewPrediction() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [patient, setPatient] = useState("");
  const [procedure, setProcedure] = useState("");
  const [doctorNotes, setDoctorNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

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

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (file) {
      setImageFile(file);

      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  }

  async function handleGenerate() {
    if (!patient) {
      alert("Please select a patient.");
      return;
    }

    if (!imageFile) {
      alert("Please upload a facial image.");
      return;
    }

    if (!procedure) {
      alert("Please choose a cosmetic procedure.");
      return;
    }

    if (!consent) {
      alert("Please confirm patient consent.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", imageFile);
      formData.append("procedure", procedure);

      const response = await fetch(
        "http://localhost:5000/api/ai/prediction",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || data.message);
        return;
      }

      const clinicId = localStorage.getItem("clinicId");

      const saveResponse = await fetch(
        "http://localhost:5000/api/predictions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clinic_id: clinicId,
            patient_id: patient,
            procedure: procedure,
            original_image: imageFile.name,
            generated_image: data.image,
            doctor_notes: doctorNotes,
          }),
        }
      );

      const saveData = await saveResponse.json();

      if (saveResponse.ok) {
        alert("Prediction generated and saved successfully.");
        navigate("/clinic/predictions");
      } else {
        alert(saveData.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="new-prediction-page">
      <aside className="new-prediction-sidebar">
        <Link to="/" className="new-prediction-logo">
          Lumina Aesthetics
        </Link>

        <nav className="new-prediction-nav">
          <Link to="/clinic/dashboard">Dashboard</Link>
          <Link to="/clinic/patients">Patients</Link>
          <Link to="/clinic/predictions" className="active-link">
            Predictions
          </Link>
          <Link to="/clinic/profile">Clinic Profile</Link>
        </nav>

        <Link to="/" className="new-prediction-logout">
          Log Out
        </Link>
      </aside>

      <main className="new-prediction-main">
        <div className="new-prediction-header">
          <div>
            <p className="new-prediction-label">
              AI Consultation
            </p>

            <h1>Create a new prediction.</h1>

            <p>
              Select a patient, upload a facial image, and choose the
              procedure you would like to visualize.
            </p>
          </div>

          <Link
            to="/clinic/predictions"
            className="back-predictions-button"
          >
            Back to Predictions
          </Link>
        </div>

        <section className="new-prediction-patient-card">
          <p className="new-prediction-label">
            Step 1
          </p>

          <h2>Select patient</h2>

          <div className="new-prediction-group">
            <label>Patient</label>

            <select
              value={patient}
              onChange={(event) => setPatient(event.target.value)}
            >
              <option value="">Select patient</option>

              {patients.map((currentPatient) => (
                <option
                  key={currentPatient.id}
                  value={currentPatient.id}
                >
                  {currentPatient.full_name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <div className="new-prediction-content">
          <section className="new-prediction-upload-card">
            <p className="new-prediction-label">
              Step 2
            </p>

            <h2>Upload facial image</h2>

            <div className="new-prediction-upload-area">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Patient facial preview"
                  className="new-prediction-image"
                />
              ) : (
                <>
                  <div className="new-prediction-upload-icon">
                    +
                  </div>

                  <h3>Upload patient photo</h3>

                  <p>
                    Use a clear, front-facing facial image.
                  </p>
                </>
              )}

              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
              />
            </div>
          </section>

          <section className="new-prediction-settings-card">
            <p className="new-prediction-label">
              Step 3
            </p>

            <h2>Choose procedure</h2>

            <div className="new-prediction-group">
              <label>Procedure</label>

              <select
                value={procedure}
                onChange={(event) => setProcedure(event.target.value)}
              >
                <option value="">Select procedure</option>
                <option value="Rhinoplasty">Rhinoplasty</option>
                <option value="Lip Fillers">Lip Fillers</option>
                <option value="Jawline Contouring">
                  Jawline Contouring
                </option>
                <option value="Chin Enhancement">
                  Chin Enhancement
                </option>
                <option value="Facelift">Facelift</option>
              </select>
            </div>

            <div className="new-prediction-notes">
              <label>Doctor Notes</label>

              <textarea
                rows="5"
                value={doctorNotes}
                onChange={(event) =>
                  setDoctorNotes(event.target.value)
                }
                placeholder="Optional notes about the desired cosmetic change..."
              ></textarea>
            </div>

            <div className="new-prediction-consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) =>
                  setConsent(event.target.checked)
                }
              />

              <p>
                I confirm that the patient has agreed to the use of their
                facial image for this AI-generated consultation preview.
              </p>
            </div>

            <button
              className="generate-clinic-prediction-button"
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading
                ? "Generating..."
                : "Generate AI Preview"}
            </button>
          </section>
        </div>

        <section className="new-prediction-disclaimer">
          <h3>Clinical use only</h3>

          <p>
            AI-generated previews are visual consultation aids. They should
            support professional discussion and must not be presented as
            guaranteed medical or surgical outcomes.
          </p>
        </section>
      </main>
    </div>
  );
}

export default NewPrediction;