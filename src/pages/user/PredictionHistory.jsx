import { Link } from "react-router-dom";
import "./PredictionHistory.css";

function PredictionHistory() {
  return (
    <div className="prediction-history-page">
      <aside className="history-sidebar">
        <Link to="/" className="history-logo">
          Lumina Aesthetics
        </Link>

        <nav className="history-nav">
          <Link to="/user/dashboard">Dashboard</Link>
          <Link to="/user/try-ai">Try AI</Link>

          <Link to="/user/predictions" className="active-link">
            My Predictions
          </Link>

          <Link to="/user/profile">My Profile</Link>
        </nav>

        <Link to="/" className="history-logout">
          Log Out
        </Link>
      </aside>

      <main className="history-main">
        <div className="history-header">
          <div>
            <p className="history-label">Prediction History</p>

            <h1>Your saved AI previews.</h1>

            <p>
              Review previous cosmetic procedure simulations and revisit
              your results at any time.
            </p>
          </div>

          <Link
            to="/user/try-ai"
            className="history-primary-button"
          >
            New Prediction
          </Link>
        </div>

        <section className="history-grid">
          <article className="history-card">
            <div className="history-image">
              Preview Image
            </div>

            <div className="history-card-content">
              <p className="history-card-date">
                September 8, 2026
              </p>

              <h2>Rhinoplasty</h2>

              <p>
                AI-generated facial preview saved to your account.
              </p>

              <button>View Prediction</button>
            </div>
          </article>

          <article className="history-card">
            <div className="history-image">
              Preview Image
            </div>

            <div className="history-card-content">
              <p className="history-card-date">
                September 4, 2026
              </p>

              <h2>Jawline Contouring</h2>

              <p>
                AI-generated facial preview saved to your account.
              </p>

              <button>View Prediction</button>
            </div>
          </article>

          <article className="history-card">
            <div className="history-image">
              Preview Image
            </div>

            <div className="history-card-content">
              <p className="history-card-date">
                August 29, 2026
              </p>

              <h2>Chin Enhancement</h2>

              <p>
                AI-generated facial preview saved to your account.
              </p>

              <button>View Prediction</button>
            </div>
          </article>
        </section>

        <section className="history-note">
          <h3>Important</h3>

          <p>
            Saved predictions are AI-generated visual simulations and
            should not be considered guaranteed medical or surgical results.
          </p>
        </section>
      </main>
    </div>
  );
}

export default PredictionHistory;