// Replace with your actual backend URL
const API_BASE = 'http://localhost:5000/api/auth'; // Backend runs on port 5000

// Login handler
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();
  const msg = document.getElementById("loginMessage");
  msg.textContent = result.token ? "Login successful!" : (result.message || "Login failed.");
});

// Signup handler
document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const res = await fetch(`${API_BASE}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();
  const msg = document.getElementById("signupMessage");
  msg.textContent = result.message === "User registered successfully" ? "Signup successful!" : (result.message || "Signup failed.");
});
