import { Link } from "react-router-dom";
import "./ClinicPredictions.css";

function ClinicPredictions() {
  return (
    <div className="clinic-predictions-page">
      <aside className="clinic-predictions-sidebar">
        <Link to="/" className="clinic-predictions-logo">
          Lumina Aesthetics
        </Link>

        <nav className="clinic-predictions-nav">
          <Link to="/clinic/dashboard">Dashboard</Link>
          <Link to="/clinic/patients">Patients</Link>

          <Link to="/clinic/predictions" className="active-link">
            Predictions
          </Link>

          <Link to="/clinic/profile">Clinic Profile</Link>
        </nav>

        <Link to="/" className="clinic-predictions-logout">
          Log Out
        </Link>
      </aside>

      <main className="clinic-predictions-main">
        <div className="clinic-predictions-header">
          <div>
            <p className="clinic-predictions-label">
              AI Predictions
            </p>

            <h1>Prediction history.</h1>

            <p>
              Review AI-generated previews created for your patients and
              continue previous consultations.
            </p>
          </div>

          <Link
            to="/clinic/predictions/new"
            className="new-clinic-prediction-button"
          >
            New Prediction
          </Link>
        </div>

        <section className="clinic-predictions-controls">
          <input
            type="text"
            placeholder="Search by patient or procedure..."
          />

          <select>
            <option>All procedures</option>
            <option>Rhinoplasty</option>
            <option>Lip Fillers</option>
            <option>Jawline Contouring</option>
            <option>Chin Enhancement</option>
          </select>
        </section>

        <section className="clinic-predictions-grid">
          <article className="clinic-prediction-card">
            <div className="clinic-prediction-image">
              AI Preview
            </div>

            <div className="clinic-prediction-content">
              <p className="clinic-prediction-date">
                September 8, 2026
              </p>

              <h2>Rhinoplasty</h2>

              <p className="clinic-prediction-patient">
                Sample Patient
              </p>

              <p>
                AI-generated facial simulation created during consultation.
              </p>

              <button>
                View Prediction
              </button>
            </div>
          </article>

          <article className="clinic-prediction-card">
            <div className="clinic-prediction-image">
              AI Preview
            </div>

            <div className="clinic-prediction-content">
              <p className="clinic-prediction-date">
                September 6, 2026
              </p>

              <h2>Jawline Contouring</h2>

              <p className="clinic-prediction-patient">
                Example Patient
              </p>

              <p>
                AI-generated facial simulation created during consultation.
              </p>

              <button>
                View Prediction
              </button>
            </div>
          </article>

          <article className="clinic-prediction-card">
            <div className="clinic-prediction-image">
              AI Preview
            </div>

            <div className="clinic-prediction-content">
              <p className="clinic-prediction-date">
                September 1, 2026
              </p>

              <h2>Chin Enhancement</h2>

              <p className="clinic-prediction-patient">
                Demo Patient
              </p>

              <p>
                AI-generated facial simulation created during consultation.
              </p>

              <button>
                View Prediction
              </button>
            </div>
          </article>
        </section>

        <section className="clinic-predictions-note">
          <h3>Clinical reminder</h3>

          <p>
            These previews are AI-generated consultation aids and should not
            be presented to patients as guaranteed treatment outcomes.
          </p>
        </section>
      </main>
    </div>
  );
}

export default ClinicPredictions;