import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/users/${userId}`
      );

      const data = await response.json();

      if (response.ok) {
        setUser(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    }
  }

  if (!user) {
    return (
      <div className="user-profile-page">
        <main className="user-profile-main">
          <p>Loading profile...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="user-profile-page">
      <aside className="user-profile-sidebar">
        <Link to="/" className="user-profile-logo">
          Lumina Aesthetics
        </Link>

        <nav className="user-profile-nav">
          <Link to="/user/dashboard">
            Dashboard
          </Link>

          <Link to="/user/try-ai">
            Try AI
          </Link>

          <Link to="/user/predictions">
            My Predictions
          </Link>

          <Link
            to="/user/profile"
            className="active-link"
          >
            My Profile
          </Link>
        </nav>

        <Link to="/" className="user-profile-logout">
          Log Out
        </Link>
      </aside>

      <main className="user-profile-main">
        <div className="user-profile-header">
          <p className="user-profile-label">
            Your Account
          </p>

          <h1>{user.full_name}</h1>

          <p>
            Review your personal account information.
          </p>
        </div>

        <section className="user-profile-card">
          <div className="user-profile-row">
            <p className="user-profile-field-label">
              Full Name
            </p>

            <p>{user.full_name}</p>
          </div>

          <div className="user-profile-row">
            <p className="user-profile-field-label">
              Email
            </p>

            <p>{user.email}</p>
          </div>

          <div className="user-profile-row">
            <p className="user-profile-field-label">
              Date of Birth
            </p>

            <p>
              {user.date_of_birth
                ? new Date(
                    user.date_of_birth
                  ).toLocaleDateString()
                : "Not provided"}
            </p>
          </div>

          <div className="user-profile-row">
            <p className="user-profile-field-label">
              Gender
            </p>

            <p>
              {user.gender || "Not provided"}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserProfile;