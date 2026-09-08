import { Link } from "react-router-dom";
import "./ClinicSignup.css";

function ClinicSignup() {
  return (
    <div className="clinic-signup-page">
      <div className="clinic-signup-card">
        <Link to="/" className="clinic-signup-logo">
          Lumina Aesthetics
        </Link>

        <div className="clinic-signup-header">
          <p className="clinic-signup-label">For Clinics</p>

          <h1>Create your clinic account.</h1>

          <p>
            Start using Lumina to manage patients and support cosmetic
            consultations with AI-generated visual previews.
          </p>
        </div>

        <form className="clinic-signup-form">
          <div className="clinic-form-row">
            <div className="clinic-form-group">
              <label>Clinic Name</label>

              <input
                type="text"
                placeholder="Enter clinic name"
              />
            </div>

            <div className="clinic-form-group">
              <label>Doctor Name</label>

              <input
                type="text"
                placeholder="Enter doctor name"
              />
            </div>
          </div>

          <div className="clinic-form-row">
            <div className="clinic-form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="clinic@email.com"
              />
            </div>

            <div className="clinic-form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="+962"
              />
            </div>
          </div>

          <div className="clinic-form-group">
            <label>Specialization</label>

            <select>
              <option value="">Select specialization</option>
              <option value="facial-plastics">
                Facial Plastic Surgery
              </option>
              <option value="plastic-surgery">
                Plastic Surgery
              </option>
              <option value="dermatology">
                Dermatology
              </option>
              <option value="aesthetic-medicine">
                Aesthetic Medicine
              </option>
            </select>
          </div>

          <div className="clinic-form-group">
            <label>Clinic Address</label>

            <input
              type="text"
              placeholder="Enter clinic location"
            />
          </div>

          <div className="clinic-form-row">
            <div className="clinic-form-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Create password"
              />
            </div>

            <div className="clinic-form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div className="clinic-terms">
            <input type="checkbox" />

            <p>
              I agree to the Lumina Aesthetics terms and privacy policy.
            </p>
          </div>

          <button
            type="submit"
            className="clinic-signup-button"
          >
            Create Clinic Account
          </button>
        </form>

        <p className="clinic-signup-login">
          Already have a clinic account?{" "}
          <Link to="/clinic/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ClinicSignup;