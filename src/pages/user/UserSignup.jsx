import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserSignup.css";

function UserSignup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!termsAccepted) {
      alert("Please agree to the Terms of Use and Privacy Policy.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: fullName,
            date_of_birth: dateOfBirth,
            email: email,
            gender: gender,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Account created successfully.");
        navigate("/user/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

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

        <form
          className="user-signup__form"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>

              <input
                type="date"
                value={dateOfBirth}
                onChange={(event) => setDateOfBirth(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>

            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              required
            >
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="terms">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
            />

            <p>
              I agree to the Terms of Use and Privacy Policy.
            </p>
          </div>

          <button
            type="submit"
            className="signup-button"
          >
            Create Account
          </button>
        </form>

        <p className="user-signup__login">
          Already have an account?{" "}
          <Link to="/user/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserSignup;