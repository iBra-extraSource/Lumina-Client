import { Link } from "react-router-dom";
import "./ChooseAccount.css";

function ChooseAccount() {
  return (
    <div className="choose-account">
      <div className="choose-account__container">

        <Link to="/" className="choose-account__logo">
          Lumina Aesthetics
        </Link>

        <div className="choose-account__header">
          <p className="choose-account__label">Get started</p>

          <h1>How would you like to use Lumina?</h1>

          <p>
            Choose the account type that best describes you.
          </p>
        </div>

        <div className="account-options">

          <Link to="/user/signup" className="account-card">
            <div className="account-card__number">01</div>

            <h2>I'm a User</h2>

            <p>
              Explore facial cosmetic procedures, generate AI previews,
              and save your results.
            </p>

            <div className="account-card__arrow">→</div>
          </Link>

          <Link to="/clinic/signup" className="account-card">
            <div className="account-card__number">02</div>

            <h2>I'm a Clinic</h2>

            <p>
              Manage patients and use Lumina during cosmetic consultations.
            </p>

            <div className="account-card__arrow">→</div>
          </Link>

        </div>

        <p className="choose-account__login">
          Already have an account?{" "}
          <Link to="/user/login">Log in</Link>
        </p>

      </div>
    </div>
  );
}

export default ChooseAccount;