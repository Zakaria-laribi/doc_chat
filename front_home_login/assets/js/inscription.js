const form = document.getElementById("registerForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  errorMsg.textContent = "";

  if (role === "") {
    errorMsg.textContent = "Veuillez choisir un type de compte.";
    return;
  }

  if (fullname.length < 3) {
    errorMsg.textContent = "Le nom complet est obligatoire.";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Adresse email invalide.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Mot de passe : minimum 6 caractères.";
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = "Les mots de passe ne correspondent pas.";
    return;
  }

  // Simulation sauvegarde
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.some(user => user.email === email);
  if (exists) {
    errorMsg.textContent = "Cet email est déjà enregistré.";
    return;
  }

  users.push({ role, fullname, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert(" Inscription réussie !");
  window.location.href = "index.html";
});
