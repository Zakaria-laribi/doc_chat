// Configuration et sélecteurs DOM
const LoginManager = {
  form: document.getElementById("loginForm"),
  errorMsg: document.getElementById("errorMsg"),
  
  // Validation patterns
  patterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },

  // Messages d'erreur
  messages: {
    role: "Sélectionnez votre type de compte pour continuer.",
    email: "Veuillez entrer une adresse email valide.",
    password: "Veuillez entrer votre mot de passe.",
  },

  // Routes de redirection
  routes: {
    patient: "home-patient.html",
    medecin: "home-medecin.html",
  },

  // Initialisation
  init() {
    if (!this.form || !this.errorMsg) {
      console.error("Éléments du formulaire introuvables.");
      return;
    }
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
  },

  // Récupération et nettoyage des données
  getFormData() {
    return {
      role: this.form.querySelector("#role").value.trim(),
      email: this.form.querySelector("#email").value.trim(),
      password: this.form.querySelector("#password").value.trim(),
    };
  },

  // Validation des données
  validateFormData(data) {
    if (!data.role) {
      return this.messages.role;
    }
    if (!this.patterns.email.test(data.email)) {
      return this.messages.email;
    }
    if (!data.password) {
      return this.messages.password;
    }
    return null;
  },

  // Affichage des erreurs
  displayError(message) {
    this.errorMsg.textContent = message;
    this.errorMsg.style.display = "block";
  },

  // Effacement des erreurs
  clearError() {
    this.errorMsg.textContent = "";
    this.errorMsg.style.display = "none";
  },

  // Sauvegarde des données
  saveUserData(role, email) {
    localStorage.setItem("role", role);
    localStorage.setItem("email", email);
  },

  // Redirection
  redirect(role) {
    const url = this.routes[role];
    if (url) {
      window.location.href = url;
    }
  },

  // Traitement de la soumission
  handleSubmit(e) {
    e.preventDefault();
    this.clearError();

    const data = this.getFormData();
    const error = this.validateFormData(data);

    if (error) {
      this.displayError(error);
      return;
    }

    this.saveUserData(data.role, data.email);
    this.redirect(data.role);
  },
};

// Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", () => LoginManager.init());
