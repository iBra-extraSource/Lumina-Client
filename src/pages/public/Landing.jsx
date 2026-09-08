import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <header className="nav">
        <div className="nav__logo">Lumina Aesthetics</div>
        <nav className="nav__links">
          <a href="#how-it-works">How It Works</a>
          <Link to="/user/try-ai">Try AI</Link>
          <Link to="/clinic/login">For Clinics</Link>
          <Link to="/user/login">Login</Link>
          <Link to="/choose-account" className="nav__cta">
            Sign Up
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__copy">
          <h1>
            See the outcome before you book the consultation.
          </h1>
          <p className="hero__sub">
            Upload a photo, choose a procedure, and get an AI-generated
            preview you can save, revisit, or bring straight to a clinic.
          </p>
          <div className="hero__actions">
            <Link to="/user/try-ai" className="btn btn--primary">
              Try the AI preview
            </Link>
            <Link to="/clinic/login" className="btn btn--secondary">
              I'm a clinic
            </Link>
          </div>
        </div>

        <div className="hero__motif" aria-hidden="true">
          <svg viewBox="0 0 240 300" className="motif-svg">
            <line x1="120" y1="10" x2="120" y2="290" className="motif-divider" />
            <path
              d="M60 60 C60 20 100 10 120 10 C120 100 120 200 120 290 C90 290 60 250 55 200 C50 150 55 100 60 60 Z"
              className="motif-half motif-half--before"
            />
            <path
              d="M180 60 C180 20 140 10 120 10 C120 100 120 200 120 290 C150 290 180 250 185 200 C190 150 185 100 180 60 Z"
              className="motif-half motif-half--after"
            />
          </svg>
          <div className="motif-labels">
            <span>before</span>
            <span>after</span>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefit">
          <h3>See before you decide</h3>
          <p>
            Get a visual sense of a procedure's possible outcome before
            committing to a consultation.
          </p>
        </div>
        <div className="benefit">
          <h3>Bring it to your clinic</h3>
          <p>
            Save predictions and discuss them directly with a licensed
            clinic or doctor.
          </p>
        </div>
        <div className="benefit">
          <h3>Built for clinics too</h3>
          <p>
            Clinics manage patients and generate predictions as part of
            their own consultation process.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2>How it works</h2>
        <ol className="steps">
          <li>
            <span className="step__num">1</span>
            <div>
              <h3>Create an account</h3>
              <p>Sign up as a patient or as a clinic.</p>
            </div>
          </li>
          <li>
            <span className="step__num">2</span>
            <div>
              <h3>Upload a photo</h3>
              <p>Choose a facial cosmetic procedure to preview.</p>
            </div>
          </li>
          <li>
            <span className="step__num">3</span>
            <div>
              <h3>Generate a prediction</h3>
              <p>View an AI-generated before/after comparison.</p>
            </div>
          </li>
          <li>
            <span className="step__num">4</span>
            <div>
              <h3>Save or discuss</h3>
              <p>Save the result, or bring it to a clinic for discussion.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="disclaimer">
        <p>
          AI-generated predictions are for visualization purposes only and
          do not guarantee an actual medical or surgical outcome.
        </p>
      </section>

      <footer className="footer">
        <div className="footer__logo">Lumina Aesthetics</div>
        <nav className="footer__links">
          <a href="#how-it-works">How It Works</a>
          <Link to="/user/login">Login</Link>
          <Link to="/choose-account">Sign Up</Link>
        </nav>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Lumina Aesthetics
        </p>
      </footer>
    </div>
  );
}

export default Landing;
