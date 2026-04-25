const scheduleButton = document.getElementById("new-schedule");
const modalOverlay = document.getElementById("modal-overlay");
const body = document.querySelector("body");
const closeButton = document.getElementById("close-button")


scheduleButton.addEventListener("click", (event) => {
  event.preventDefault();

  modalOverlay.classList.add("active");
  body.style.overflow = "hidden";
})

function closeModal() {
  modalOverlay.classList.remove("active");
  body.style.overflow = "auto";
  console.log("modal fechado");
}

// Fecha o modal ao clicar no botão de fechar
closeButton.addEventListener("click", closeModal);

// Fecha o modal ao clicar fora do conteúdo
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// Fechar o modal ao pressionar a tecla "Escape"
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});

export { closeModal };
