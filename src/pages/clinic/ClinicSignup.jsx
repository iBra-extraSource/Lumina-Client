import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ClinicSignup.css";

function ClinicSignup() {
  const navigate = useNavigate();

  const [clinicName, setClinicName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [address, setAddress] = useState("");
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
      alert("Please agree to the terms and privacy policy.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/clinics/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clinic_name: clinicName,
            doctor_name: doctorName,
            email: email,
            phone: phone,
            specialization: specialization,
            address: address,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Clinic account created successfully.");
        navigate("/clinic/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

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

        <form
          className="clinic-signup-form"
          onSubmit={handleSubmit}
        >
          <div className="clinic-form-row">
            <div className="clinic-form-group">
              <label>Clinic Name</label>

              <input
                type="text"
                placeholder="Enter clinic name"
                value={clinicName}
                onChange={(event) => setClinicName(event.target.value)}
                required
              />
            </div>

            <div className="clinic-form-group">
              <label>Doctor Name</label>

              <input
                type="text"
                placeholder="Enter doctor name"
                value={doctorName}
                onChange={(event) => setDoctorName(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="clinic-form-row">
            <div className="clinic-form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="clinic@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="clinic-form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="+962"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          </div>

          <div className="clinic-form-group">
            <label>Specialization</label>

            <select
              value={specialization}
              onChange={(event) => setSpecialization(event.target.value)}
              required
            >
              <option value="">Select specialization</option>
              <option value="Facial Plastic Surgery">
                Facial Plastic Surgery
              </option>
              <option value="Plastic Surgery">
                Plastic Surgery
              </option>
              <option value="Dermatology">
                Dermatology
              </option>
              <option value="Aesthetic Medicine">
                Aesthetic Medicine
              </option>
            </select>
          </div>

          <div className="clinic-form-group">
            <label>Clinic Address</label>

            <input
              type="text"
              placeholder="Enter clinic location"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          <div className="clinic-form-row">
            <div className="clinic-form-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <div className="clinic-form-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="clinic-terms">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
            />

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