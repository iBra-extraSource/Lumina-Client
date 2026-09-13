import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PredictionDetails.css";

function PredictionDetails() {
  const { id } = useParams();

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrediction();
  }, [id]);

  async function getPrediction() {
    try {
      const response = await fetch(
        `http://localhost:5000/api/predictions/${id}`
      );

      const data = await response.json();

      if (response.ok) {
        setPrediction(data);
      } else {
        alert("Prediction not found.");
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="prediction-details-loading">
        Loading prediction...
      </div>
    );
  }

  if (!prediction) {
    return (
      <div className="prediction-details-loading">
        Prediction not found.
      </div>
    );
  }

  const generatedImage = prediction.generated_image
    ? `data:image/png;base64,${prediction.generated_image}`
    : null;

  return (
    <div className="prediction-details-page">
      <div className="prediction-details-container">

        <Link
          to="/user/predictions"
          className="prediction-details-back"
        >
          ← Back to Prediction History
        </Link>

        <header className="prediction-details-header">
          <p className="prediction-details-label">
            AI Consultation Result
          </p>

          <h1>{prediction.procedure}</h1>

          <p className="prediction-details-date">
            Generated on{" "}
            {new Date(
              prediction.created_at
            ).toLocaleDateString()}
          </p>
        </header>

        {generatedImage ? (
          <section className="comparison-section">

            <div className="comparison-heading">
              <div>
                <p className="prediction-details-label">
                  Visualization
                </p>

                <h2>Before & After Preview</h2>
              </div>

              <span className="ai-badge">
                AI Generated
              </span>
            </div>

            <div className="comparison-grid">

              <div className="comparison-card">
                <div className="comparison-card-top">
                  <span className="comparison-number">
                    01
                  </span>

                  <div>
                    <h3>Before</h3>
                    <p>Original appearance</p>
                  </div>
                </div>

                <div className="comparison-image-frame before-frame">
                  <img
                    src={generatedImage}
                    alt="Before cosmetic visualization"
                    className="comparison-cropped-image before-image"
                  />
                </div>
              </div>

              <div className="comparison-card">
                <div className="comparison-card-top">
                  <span className="comparison-number">
                    02
                  </span>

                  <div>
                    <h3>After</h3>
                    <p>AI consultation preview</p>
                  </div>
                </div>

                <div className="comparison-image-frame after-frame">
                  <img
                    src={generatedImage}
                    alt="After cosmetic visualization"
                    className="comparison-cropped-image after-image"
                  />
                </div>
              </div>

            </div>

            <div className="prediction-details-disclaimer">
              <div className="disclaimer-icon">
                i
              </div>

              <div>
                <h3>Visualization only</h3>

                <p>
                  This AI-generated preview is intended for
                  cosmetic consultation and visualization
                  purposes only. It does not represent or
                  guarantee an actual medical or surgical
                  result.
                </p>
              </div>
            </div>

          </section>
        ) : (
          <div className="prediction-details-empty">
            No generated image is available.
          </div>
        )}

      </div>
    </div>
  );
}

export default PredictionDetails;