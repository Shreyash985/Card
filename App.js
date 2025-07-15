import React from "react";
import plantArticles from "./data/plantArticles";

function App() {
  return (
    <div style={{ backgroundColor: "#1c1c1c", minHeight: "100vh", color: "#fff", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🌿 Organic Plant Blog</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {plantArticles.map((post) => (
          <div
            key={post.id}
            style={{
              width: "300px",
              background: "#fff",
              color: "#000",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
            }}
          >
            <img src={post.image} alt={post.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <button style={{
                marginTop: "10px",
                padding: "10px 20px",
                border: "1px solid #8bc34a",
                borderRadius: "20px",
                background: "none",
                cursor: "pointer",
                color: "#8bc34a"
              }}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;