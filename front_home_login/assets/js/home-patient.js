const doctors = [
  { 
    name: "Dr. Amine El Idrissi", 
    spec: "Cardiologue", 
    image: "./assets/images/doc1.jpeg"
  },
  { 
    name: "Dr. Salma Benali", 
    spec: "Pédiatre", 
    image: "./assets/images/doc2.jpeg"
  },
  { 
    name: "Dr. Youssef Amrani", 
    spec: "Dentiste", 
    image: "./assets/images/doc3.jpeg"
  },
  { 
    name: "Dr. Akrem Lahlou", 
    spec: "Généraliste", 
    image: "./assets/images/doc4.jpeg"
  }
];

const doctorGrid = document.getElementById("doctorGrid");

doctors.forEach(doc => {
  const card = document.createElement("div");
  card.className = "doctor-card";
  card.innerHTML = `
    <img src="${doc.image}" alt="${doc.name}">
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

document.getElementById("btnMedecins").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "doctors.html"; 
});


 
