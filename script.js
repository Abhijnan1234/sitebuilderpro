// Replace with your actual backend URL
const API_BASE = 'http://localhost:8080/api';

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
  msg.textContent = result.success ? "Login successful!" : "Login failed.";
});

// Signup handler
document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const res = await fetch(`${API_BASE}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const result = await res.json();
  const msg = document.getElementById("signupMessage");
  msg.textContent = result.success ? "Signup successful!" : "Signup failed.";
});
