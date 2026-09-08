import { useState } from "react";
import { Link } from "react-router-dom";
import "./TryAI.css";

function TryAI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [procedure, setProcedure] = useState("");
  const [consent, setConsent] = useState(false);

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  }

  function handleGenerate() {
    if (!selectedImage) {
      alert("Please upload a facial image.");
      return;
    }

    if (!procedure) {
      alert("Please choose a cosmetic procedure.");
      return;
    }

    if (!consent) {
      alert("Please agree to the consent statement.");
      return;
    }

    alert("Ready to generate AI preview.");
  }

  return (
    <div className="try-ai-page">
      <aside className="try-ai-sidebar">
        <Link to="/" className="try-ai-logo">
          Lumina Aesthetics
        </Link>

        <nav className="try-ai-nav">
          <Link to="/user/dashboard">Dashboard</Link>

          <Link to="/user/try-ai" className="active-link">
            Try AI
          </Link>

          <Link to="/user/predictions">
            My Predictions
          </Link>

          <Link to="/user/profile">
            My Profile
          </Link>
        </nav>

        <Link to="/" className="try-ai-logout">
          Log Out
        </Link>
      </aside>

      <main className="try-ai-main">
        <div className="try-ai-header">
          <p className="try-ai-label">AI Preview</p>

          <h1>Visualize a possible outcome.</h1>

          <p>
            Upload a clear facial photo and choose the cosmetic procedure
            you would like to explore.
          </p>
        </div>

        <div className="try-ai-content">
          <section className="upload-card">
            <div className="upload-area">

              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected facial preview"
                  className="uploaded-image"
                />
              ) : (
                <>
                  <div className="upload-icon">+</div>

                  <h2>Upload your photo</h2>

                  <p>
                    Choose a clear, front-facing facial image.
                  </p>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />

            </div>
          </section>

          <section className="procedure-card">
            <p className="try-ai-label">Procedure</p>

            <h2>What would you like to preview?</h2>

            <div className="try-ai-form-group">
              <label>Choose a procedure</label>

              <select
                value={procedure}
                onChange={(event) => setProcedure(event.target.value)}
              >
                <option value="">Select procedure</option>
                <option value="rhinoplasty">Rhinoplasty</option>
                <option value="lip-fillers">Lip Fillers</option>
                <option value="jawline">Jawline Contouring</option>
                <option value="chin">Chin Enhancement</option>
                <option value="facelift">Facelift</option>
              </select>
            </div>

            <div className="consent-box">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />

              <p>
                I understand that this AI-generated result is only a
                visualization and does not guarantee an actual medical or
                surgical outcome.
              </p>
            </div>

            <button
              className="generate-button"
              onClick={handleGenerate}
            >
              Generate AI Preview
            </button>
          </section>
        </div>

        <section className="try-ai-disclaimer">
          <h3>Before you continue</h3>

          <p>
            Lumina Aesthetics provides AI-generated visual simulations for
            consultation and educational purposes. Always discuss cosmetic
            procedures with a qualified medical professional.
          </p>
        </section>
      </main>
    </div>
  );
}

export default TryAI;