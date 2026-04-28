function closeModal() {
  const modalOverlay = document.getElementById("modal-overlay");
  const body = document.querySelector("body");
  if (!modalOverlay) return;
  modalOverlay.classList.remove("active");
  body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  const scheduleButton = document.getElementById("new-schedule");
  const modalOverlay = document.getElementById("modal-overlay");
  const body = document.querySelector("body");
  const closeButton = document.getElementById("close-button");

  if (!modalOverlay) return;

  // Remove o estilo inline do modal para garantir que ele esteja oculto inicialmente
  if (modalOverlay.hasAttribute("style")) modalOverlay.removeAttribute("style");

  if (!scheduleButton) return;

  scheduleButton.addEventListener("click", (event) => {
    event.preventDefault();

    modalOverlay.classList.add("active");
    body.style.overflow = "hidden";
  });

  // Fecha o modal ao clicar no botão de fechar
  if (closeButton) closeButton.addEventListener("click", closeModal);

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
});

export { closeModal };
