const doctors = [
  { name: "Dr. Amine El Idrissi", spec: "Cardiologue" },
  { name: "Dr. Salma Benali", spec: "Pédiatre" },
  { name: "Dr. Youssef Amrani", spec: "Dentiste" },
  { name: "Dr. Nadia Fassi", spec: "Généraliste" }
];

const doctorGrid = document.getElementById("doctorGrid");

doctors.forEach(doc => {
  const card = document.createElement("div");
  card.className = "doctor-card";
  card.innerHTML = `
    <h4>${doc.name}</h4>
    <p>${doc.spec}</p>
    <button>Rendez-vous</button>
  `;
  doctorGrid.appendChild(card);
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});
