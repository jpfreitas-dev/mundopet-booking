import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    alert("Ocorreu um erro ao cancelar o agendamento. Tente novamente mais tarde.");
    console.log(error);
  }
}