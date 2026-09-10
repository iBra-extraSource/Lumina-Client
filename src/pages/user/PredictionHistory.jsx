import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PredictionHistory.css";

function PredictionHistory() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    getPredictions();
  }, []);

  async function getPredictions() {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/predictions?user_id=${userId}`
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
    <div className="prediction-history-page">
      <main className="prediction-history-main">
        <div className="prediction-history-header">
          <div>
            <p className="prediction-history-label">
              Your Visualizations
            </p>

            <h1>Prediction History</h1>

            <p>
              Review your previous cosmetic consultation visualizations.
            </p>
          </div>

          <Link
            to="/user/try-ai"
            className="prediction-history-button"
          >
            New Prediction
          </Link>
        </div>

        {predictions.length === 0 ? (
          <div className="prediction-empty">
            <h3>No predictions yet</h3>

            <p>
              Your generated cosmetic visualizations will appear here.
            </p>

            <Link to="/user/try-ai">
              Try AI
            </Link>
          </div>
        ) : (
          <div className="prediction-list">
            {predictions.map((prediction) => (
              <div
                className="prediction-card"
                key={prediction.id}
              >
                <div>
                  <h3>{prediction.procedure}</h3>

                  <p>
                    {new Date(
                      prediction.created_at
                    ).toLocaleDateString()}
                  </p>
                </div>

                <Link
                  to={`/user/predictions/${prediction.id}`}
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default PredictionHistory;