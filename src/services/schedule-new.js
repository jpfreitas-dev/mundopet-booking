import { apiConfig } from "./api-config";

export async function scheduleNew({ tutorName, petName, phone, service, date, hour }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tutorName,
        petName,
        phone,
        service,
        when: `${date}T${hour}:00.000`,
      }),
    });

    alert("Agendamento criado com sucesso!")
  } catch (error) {
    alert("Ocorreu um erro ao criar o agendamento. Tente novamente mais tarde.");
    console.log(error);
  }
}