import { schedulesDay } from "./load";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    // Verifica se o elemento clicado é um botão de cancelamento
    if (event.target.classList.contains("delete-schedule")) {
      const item = event.target.closest("li");

      // obtém o id do agendamento a partir do dataset do item clicado
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?");

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDay();
        }
      }
    };
  }
  )
});