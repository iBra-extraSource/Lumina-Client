import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ClinicPredictions.css";

function ClinicPredictions() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    getPredictions();
  }, []);

  async function getPredictions() {
    try {
      const clinicId = localStorage.getItem("clinicId");

      if (!clinicId) {
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/predictions?clinic_id=${clinicId}`
      );

      const data = await response.json();

      if (response.ok) {
        setPredictions(data);
      } else {
        alert("Failed to load predictions.");
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

  return (
    <div className="clinic-predictions-page">
      <main className="clinic-predictions-main">
        <div className="clinic-predictions-header">
          <div>
            <p className="clinic-predictions-label">
              Clinic Visualizations
            </p>

            <h1>Predictions</h1>

            <p>
              Review AI cosmetic consultation visualizations generated for
              your patients.
            </p>
          </div>

          <Link
            to="/clinic/predictions/new"
            className="clinic-predictions-button"
          >
            New Prediction
          </Link>
        </div>

        {predictions.length === 0 ? (
          <div className="clinic-predictions-empty">
            <h3>No predictions yet</h3>

            <p>
              Predictions created for your patients will appear here.
            </p>

            <Link to="/clinic/predictions/new">
              Create Prediction
            </Link>
          </div>
        ) : (
          <div className="clinic-predictions-list">
            {predictions.map((prediction) => (
              <div
                className="clinic-prediction-card"
                key={prediction.id}
              >
                <div>
                  <h3>{prediction.procedure}</h3>

                  <p>
                    {new Date(
                      prediction.created_at
                    ).toLocaleDateString()}
                  </p>

                  {prediction.patient_id && (
                    <p>
                      Patient ID: {prediction.patient_id}
                    </p>
                  )}
                </div>

                <Link
                  to={`/clinic/patients/${prediction.patient_id}`}
                >
                  View Patient
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ClinicPredictions;