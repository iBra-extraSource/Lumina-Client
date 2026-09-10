import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
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
      }
    } catch (error) {
      console.error(error);
    }
  }

  const proceduresExplored = new Set(
    predictions.map((prediction) => prediction.procedure)
  ).size;

  const latestPrediction =
    predictions.length > 0
      ? predictions[0].procedure
      : "None";

  const recentPredictions = predictions.slice(0, 2);

  return (
    <div className="user-dashboard">
      <aside className="dashboard-sidebar">
        <Link to="/" className="dashboard-logo">
          Lumina Aesthetics
        </Link>

        <nav className="dashboard-nav">
          <Link to="/user/dashboard" className="active-link">
            Dashboard
          </Link>

          <Link to="/user/try-ai">
            Try AI
          </Link>

          <Link to="/user/predictions">
            My Predictions
          </Link>

          <Link to="/user/profile">
            My Profile
          </Link>
        </nav>

        <Link to="/" className="dashboard-logout">
          Log Out
        </Link>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-label">
              User Dashboard
            </p>

            <h1>Welcome back.</h1>

            <p>
              Explore cosmetic procedures and manage your saved predictions.
            </p>
          </div>

          <Link
            to="/user/try-ai"
            className="dashboard-primary-button"
          >
            Create Prediction
          </Link>
        </div>

        <section className="dashboard-stats">
          <div className="stat-card">
            <p>Saved Predictions</p>
            <h2>{predictions.length}</h2>
          </div>

          <div className="stat-card">
            <p>Procedures Explored</p>
            <h2>{proceduresExplored}</h2>
          </div>

          <div className="stat-card">
            <p>Latest Prediction</p>
            <h2>{latestPrediction}</h2>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <p className="dashboard-label">
                Recent Activity
              </p>

              <h2>Your recent predictions</h2>
            </div>

            <Link to="/user/predictions">
              View all
            </Link>
          </div>

          <div className="prediction-list">
            {recentPredictions.length === 0 ? (
              <p>No predictions yet.</p>
            ) : (
              recentPredictions.map((prediction) => (
                <div
                  className="prediction-card"
                  key={prediction.id}
                >
                  <div className="prediction-image">
                    Image
                  </div>

                  <div className="prediction-info">
                    <h3>{prediction.procedure}</h3>

                    <p>
                      {new Date(
                        prediction.created_at
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <Link to="/user/predictions">
                    View
                  </Link>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="dashboard-note">
          <h3>Important</h3>

          <p>
            AI-generated predictions are for visualization purposes only
            and do not guarantee an actual medical or surgical outcome.
          </p>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;