import { Link } from "react-router-dom";
import "./UserDashboard.css";

function UserDashboard() {
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
            <p className="dashboard-label">User Dashboard</p>
            <h1>Welcome back.</h1>
            <p>
              Explore cosmetic procedures and manage your saved predictions.
            </p>
          </div>

          <Link to="/user/try-ai" className="dashboard-primary-button">
            Create Prediction
          </Link>
        </div>

        <section className="dashboard-stats">
          <div className="stat-card">
            <p>Saved Predictions</p>
            <h2>3</h2>
          </div>

          <div className="stat-card">
            <p>Procedures Explored</p>
            <h2>2</h2>
          </div>

          <div className="stat-card">
            <p>Latest Prediction</p>
            <h2>Rhinoplasty</h2>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <p className="dashboard-label">Recent Activity</p>
              <h2>Your recent predictions</h2>
            </div>

            <Link to="/user/predictions">
              View all
            </Link>
          </div>

          <div className="prediction-list">

            <div className="prediction-card">
              <div className="prediction-image">
                Image
              </div>

              <div className="prediction-info">
                <h3>Rhinoplasty</h3>
                <p>September 8, 2026</p>
              </div>

              <button>
                View
              </button>
            </div>

            <div className="prediction-card">
              <div className="prediction-image">
                Image
              </div>

              <div className="prediction-info">
                <h3>Jawline Contouring</h3>
                <p>September 4, 2026</p>
              </div>

              <button>
                View
              </button>
            </div>

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