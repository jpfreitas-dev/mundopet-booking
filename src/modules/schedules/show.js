import dayjs, { Dayjs } from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      // Card
      const card = document.createElement("li");
      card.classList.add("schedule-card");

      const info = document.createElement("div");
      info.classList.add("schedule-info");
      const button = document.createElement("button");
      button.classList.add("delete-schedule");
      button.textContent = "Remover agendamento";

      // Card > info + button
      card.append(info, button)

      const infoDiv = document.createElement("div");
      const service = document.createElement("p");
      service.classList.add("schedule-service");
      service.textContent = schedule.service;

      // info > infoDiv + service
      info.append(infoDiv, service);

      const hour = document.createElement("span");
      hour.classList.add("schedule-hour")
      hour.textContent = dayjs(schedule.when).format("HH-mm");

      const clients = document.createElement("div");
      clients.classList.add("schedule-clients");

      // infoDiv > hour + clients
      infoDiv.append(hour, clients);

      const pet = document.createElement("span");
      pet.classList.add("schedule-pet");
      pet.textContent = schedule.pet;

      const tutor = document.createElement("p");
      tutor.classList.add("schedule-tutor");
      tutor.textContent = schedule.tutor;

      // clients > pet + tutor
      clients.append(pet, tutor);

      const scheduleHour = dayjs(schedule.when).hour();

      if (scheduleHour <= 12) {
        periodMorning.append(card);
      } else if (scheduleHour <= 18) {
        periodAfternoon.append(card);
      } else {
        periodNight.append(card);
      }
    });
  } catch (error) {
    alert("Ocorreu um erro ao carregar os agendamentos. Tente novamente mais tarde.");
    console.log(error);
  }
}