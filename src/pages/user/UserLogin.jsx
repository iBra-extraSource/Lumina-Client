import { Link } from "react-router-dom";
import "./UserLogin.css";

function UserLogin() {
  return (
    <div className="user-login">
      <div className="user-login__container">

        <Link to="/" className="user-login__logo">
          Lumina Aesthetics
        </Link>

        <div className="user-login__header">
          <p className="user-login__label">Welcome back</p>

          <h1>Log in to your Lumina account.</h1>

          <p>
            Access your saved predictions and continue exploring
            possible cosmetic outcomes.
          </p>
        </div>

        <form className="user-login__form">

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember me</p>
            </div>

            <Link to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-button">
            Log In
          </button>

        </form>

        <p className="user-login__signup">
          Don't have an account?{" "}
          <Link to="/user/signup">Create one</Link>
        </p>

      </div>
    </div>
  );
}

export default UserLogin;