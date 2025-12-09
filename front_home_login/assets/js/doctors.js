const doctors = [
  { name: "Dr Amine El Idrissi", spec: "Cardiologue", image: "./assets/images/doc1.jpeg" },
  { name: "Dr Salma Benali", spec: "Pédiatre", image: "./assets/images/doc2.jpeg" },
  { name: "Dr Youssef Amrani", spec: "Dentiste", image: "./assets/images/doc3.jpeg" },
  { name: "Dr Nadia Fassi", spec: "Généraliste", image: "./assets/images/doc4.jpeg" },
  { name: "Dr Karim Ziani", spec: "Dermatologue", image: "./assets/images/doc5.jpeg" },

  { name: "Dr Hicham Tahiri", spec: "ORL", image: "./assets/images/doc1.jpeg" },
  { name: "Dr Rania Oubaha", spec: "Psychologue", image: "./assets/images/doc6.jpeg" },
  { name: "Dr Samir Bouchta", spec: "Urologue", image: "./assets/images/doc7.jpeg" },
  { name: "Dr Wafa Naciri", spec: "Gynécologue", image: "./assets/images/doc8.jpeg" },
  { name: "Dr Ayoub Lahlou", spec: "Radiologue", image: "./assets/images/doc9.jpeg" },

  { name: "Dr Anas Rahmani", spec: "Cardiologue", image: "./assets/images/doc10.jpeg" },
  { name: "Dr Sara Ammar", spec: "Dentiste", image: "./assets/images/doc11.jpeg" },
  { name: "Dr Othmane Zerkani", spec: "Neurologue", image: "./assets/images/doc12.jpeg" },
  { name: "Dr Ilham Fadili", spec: "Diabétologue", image: "./assets/images/doc13.jpeg" },
  { name: "Dr Bilal Habbani", spec: "Chirurgien", image: "./assets/images/doc14.jpeg" },

  { name: "Dr Meryem Kabbaj", spec: "Pédiatre", image: "./assets/images/doc15.jpeg" },
  { name: "Dr Hamza Blick", spec: "ORL", image: "./assets/images/doc16.jpeg" },
  { name: "Dr Asmaa bennis", spec: "Psychiatre", image: "./assets/images/doc17.jpeg" },
  { name: "Dr Younes Kari", spec: "Généraliste", image: "./assets/images/doc18.jpeg" },
  { name: "Dr Lina Zerouali", spec: "Dermatologue", image: "./assets/images/doc19.jpeg" },

  { name: "Dr Khalid Belkadi", spec: "Cardiologue", image: "./assets/images/doc20.jpeg" },
  { name: "Dr Salim Ajdi", spec: "Dentiste", image: "./assets/images/doc21.jpeg" },
  { name: "Dr Hanane Sabri", spec: "Gynécologue", image: "./assets/images/doc22.jpeg" },
  { name: "Dr Soufiane Lmari", spec: "Orthopédiste", image: "./assets/images/doc23.jpeg" },
  { name: "Dr Imane Jouhari", spec: "Ophtalmologue", image: "./assets/images/doc24.jpeg" },

  { name: "Dr Yassine Bouazza", spec: "Cardiologue", image: "./assets/images/doc25.jpeg" },
  { name: "Dr Ikram Arabi", spec: "Pédiatre", image: "./assets/images/doc26.jpeg" }
];

const container = document.getElementById("doctorsContainer");
const searchName = document.getElementById("searchName");
const searchSpec = document.getElementById("searchSpec");

function displayDoctors(list) {
  container.innerHTML = "";

  list.forEach(doc => {
    const card = document.createElement("div");
    card.className = "doctor-card";

    card.innerHTML = `
      <img src="${doc.image}" alt="${doc.name}">
      <h3>${doc.name}</h3>
      <p>${doc.spec}</p>
      <button onclick="openProfile('${doc.name}', '${doc.spec}', '${doc.image}')">
        Rendez-vous
      </button>
    `;

    container.appendChild(card);
  });
}


// ✅ Filtrage combiné Nom + Spécialité
function filterDoctors() {
  const nameValue = searchName.value.toLowerCase();
  const specValue = searchSpec.value.toLowerCase();

  const filtered = doctors.filter(doc =>
    doc.name.toLowerCase().includes(nameValue) &&
    doc.spec.toLowerCase().includes(specValue)
  );

  displayDoctors(filtered);
}

searchName.addEventListener("input", filterDoctors);
searchSpec.addEventListener("input", filterDoctors);

// ✅ Affichage initial
displayDoctors(doctors);

function openProfile(name, spec, image) {
  const url = `profile-doc.html?name=${encodeURIComponent(name)}&spec=${encodeURIComponent(spec)}&image=${encodeURIComponent(image)}`;
  window.location.href = url;
}

