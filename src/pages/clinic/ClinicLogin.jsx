import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ClinicLogin.css";

function ClinicLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/clinics/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
          localStorage.setItem("clinicId", data.clinic.id);

        alert("Login successful.");
        navigate("/clinic/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

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
          onSubmit={handleSubmit}
        >
          <div className="clinic-login-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="clinic@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="clinic-login-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
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