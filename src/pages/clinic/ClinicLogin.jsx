import { Link } from "react-router-dom";
import "./ClinicLogin.css";

function ClinicLogin() {
  return (
    <div className="clinic-login-page">
      <div className="clinic-login-card">
        <Link to="/" className="clinic-login-logo">
          Lumina Aesthetics
        </Link>

        <div className="clinic-login-header">
          <p className="clinic-login-label">Clinic Portal</p>

          <h1>Welcome back.</h1>

          <p>
            Sign in to manage patients, review predictions, and continue
            your consultations.
          </p>
        </div>

            <form
            className="clinic-login-form"
            onSubmit={(event) => {
                event.preventDefault();
                window.location.href = "/clinic/dashboard";
            }}
            >         
             <div className="clinic-login-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="clinic@email.com"
            />
          </div>

          <div className="clinic-login-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="clinic-login-options">
            <div className="clinic-remember">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="clinic-login-button"
          >
            Sign In
          </button>
        </form>

        <p className="clinic-login-signup">
          Don't have a clinic account?{" "}
          <Link to="/clinic/signup">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ClinicLogin;