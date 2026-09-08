import { Link } from "react-router-dom";
import "./UserProfile.css";

function UserProfile() {
  return (
    <div className="user-profile">
      <aside className="profile-sidebar">
        <Link to="/" className="profile-logo">
          Lumina Aesthetics
        </Link>

        <nav className="profile-nav">
          <Link to="/user/dashboard">Dashboard</Link>
          <Link to="/user/try-ai">Try AI</Link>
          <Link to="/user/predictions">My Predictions</Link>
          <Link to="/user/profile" className="active-link">
            My Profile
          </Link>
        </nav>

        <Link to="/" className="profile-logout">
          Log Out
        </Link>
      </aside>

      <main className="profile-main">
        <div className="profile-header">
          <div>
            <p className="profile-label">My Profile</p>
            <h1>Your personal information.</h1>
            <p>
              Manage your account details and keep your information up to date.
            </p>
          </div>

          <button className="edit-profile-button">
            Edit Profile
          </button>
        </div>

        <section className="profile-card">
          <div className="profile-image">
            <p>Profile Photo</p>
          </div>

          <div className="profile-details">
            <div className="profile-field">
              <p className="field-label">Full Name</p>
              <p className="field-value">Sample User</p>
            </div>

            <div className="profile-field">
              <p className="field-label">Email</p>
              <p className="field-value">user@email.com</p>
            </div>

            <div className="profile-field">
              <p className="field-label">Date of Birth</p>
              <p className="field-value">January 1, 2000</p>
            </div>

            <div className="profile-field">
              <p className="field-label">Gender</p>
              <p className="field-value">Not specified</p>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <div>
            <p className="profile-label">Account</p>
            <h2>Account settings</h2>
          </div>

          <div className="profile-actions">
            <button>Change Password</button>
            <button className="danger-button">Delete Account</button>
          </div>
        </section>

        <section className="profile-note">
          <h3>Privacy</h3>
          <p>
            Your facial images and account information should only be used
            for the purposes you agree to within Lumina Aesthetics.
          </p>
        </section>
      </main>
    </div>
  );
}

export default UserProfile;