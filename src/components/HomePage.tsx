import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌍 Welcome to CountriQ</h1>
      <p style={styles.subtitle}>Choose your quiz mode</p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/flag-frenzy")}>
          🏁 Flag Frenzy
        </button>
        <button style={styles.button} onClick={() => navigate("/country-crunch")}>
          🌐 Country Crunch
        </button>
      </div>
    </div>
  );
};

// 🎨 Basic inline styles (you can move this to CSS later)
const styles = {
  container: {
    textAlign: "center" as const,
    paddingTop: "60px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    fontSize: "1rem",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#3498db",
    color: "white",
    cursor: "pointer",
  },
};

export default HomePage;
