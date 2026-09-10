import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TryAI.css";
import { Upload, Sparkles, Info } from "lucide-react";
import Alert from "@mui/material/Alert";
function TryAI() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [procedure, setProcedure] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (file) {
      setImageFile(file);

      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  }

  async function handleGenerate() {
    if (!imageFile) {
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

    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Please log in first.");
      navigate("/user/login");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("image", imageFile);
      formData.append("procedure", procedure);

      const aiResponse = await fetch(
        "http://localhost:5000/api/ai/prediction",
        {
          method: "POST",
          body: formData,
        }
      );

      const aiData = await aiResponse.json();

      if (!aiResponse.ok) {
        alert(aiData.error || aiData.message);
        return;
      }

      const saveResponse = await fetch(
        "http://localhost:5000/api/predictions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            procedure: procedure,
            original_image: imageFile.name,
            generated_image: aiData.image,
          }),
        }
      );

      const saveData = await saveResponse.json();

      if (saveResponse.ok) {
        alert("Prediction generated and saved successfully.");
        navigate("/user/predictions");
      } else {
        alert(saveData.message);
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
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
      <Alert severity="warning" sx={{ marginBottom: "24px" }}>
  AI-generated previews are for visualization purposes only and do not
  guarantee actual medical or surgical results.
</Alert>

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
                  <div className="upload-icon">
                    <Upload size={28} />
                  </div>

                  <h2>Upload your photo</h2>

                  <p>
                    Choose a clear, front-facing facial image.
                  </p>
                </>
              )}

              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
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
                <option value="Rhinoplasty">Rhinoplasty</option>
                <option value="Lip Fillers">Lip Fillers</option>
                <option value="Jawline Contouring">
                  Jawline Contouring
                </option>
                <option value="Chin Enhancement">
                  Chin Enhancement
                </option>
                <option value="Facelift">Facelift</option>
              </select>
            </div>

            <div className="consent-box">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) =>
                  setConsent(event.target.checked)
                }
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
              disabled={loading}
            >
              <Sparkles size={18} />

              {loading
                ? "Generating..."
                : "Generate AI Preview"}
            </button>
          </section>
        </div>

        <section className="try-ai-disclaimer">
          <h3>
            <Info size={17} />
            Before you continue
          </h3>

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