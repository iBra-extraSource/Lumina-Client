import { Link } from "react-router-dom";
import "./UserSignup.css";

function UserSignup() {
  return (
    <div className="user-signup">
      <div className="user-signup__container">

        <Link to="/" className="user-signup__logo">
          Lumina Aesthetics
        </Link>

        <div className="user-signup__header">
          <p className="user-signup__label">Create your account</p>

          <h1>Start exploring with Lumina.</h1>

          <p>
            Create your profile to save predictions and explore possible
            facial cosmetic outcomes.
          </p>
        </div>

        <form className="user-signup__form">

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Gender</label>

            <select>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" />
            <p>
              I agree to the Terms of Use and Privacy Policy.
            </p>
          </div>

          <button type="submit" className="signup-button">
            Create Account
          </button>

        </form>

        <p className="user-signup__login">
          Already have an account?{" "}
          <Link to="/user/login">Log in</Link>
        </p>

      </div>
    </div>
  );
}

export default UserSignup;