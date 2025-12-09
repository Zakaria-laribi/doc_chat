const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Ajouter un message
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender === "user" ? "user-msg" : "bot-msg");
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simulation d'une IA
function getBotResponse(question) {
  const responses = {
    "bonjour": "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
    "fièvre": "Si vous avez de la fièvre, prenez votre température et reposez-vous. Consultez un médecin si elle dépasse 39°C.",
    "mal de tête": "Pour le mal de tête, assurez-vous de boire de l'eau et de vous reposer. Si persistant, consultez un spécialiste.",
  };

  for (let key in responses) {
    if (question.toLowerCase().includes(key)) {
      return responses[key];
    }
  }
  return "Désolé, je n'ai pas compris. Pouvez-vous reformuler ?";
}

// Envoyer message
sendBtn.addEventListener("click", () => {
  const question = userInput.value.trim();
  if (!question) return;

  addMessage(question, "user");
  userInput.value = "";

  setTimeout(() => {
    const answer = getBotResponse(question);
    addMessage(answer, "bot");
  }, 500);
});

// Envoyer avec Entrée
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

// Nouveau Chat
document.getElementById("newChat").addEventListener("click", () => {
  chatBox.innerHTML = "";
  addMessage("Nouveau chat démarré ! Posez votre question.", "bot");
});
