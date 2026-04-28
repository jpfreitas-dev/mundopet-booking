import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";

const hourSelect = document.getElementById("hour");

export function hoursLoad({ date, dailySchedules }) {
  hourSelect.innerHTML = '';
  

  const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"));

  const opening = openingHours.map((hour) => {
    //  Recupera somente a hora
    const [scheduleHour] = hour.split(":");

    // Normaliza a data para o formato ISO
    const hourFormatted = hour.padStart(5, "0");

    // Verifica se está no passado
    const isPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hourFormatted) && !isPast;

    return {
      hour,
      available
    };
  });

  // Cria o option padrão
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.selected = true;
  defaultOption.disabled = true;
  defaultOption.textContent = "Selecione o horario";

  hourSelect.appendChild(defaultOption);

  opening.forEach(({ hour, available }) => {
    // Cria o option para cada horário disponível
    const option = document.createElement("option");
    option.value = hour;
    option.textContent = available ? hour : `${hour} - indisponível`;
    option.disabled = !available;

    if (!available) {
      option.classList.add("unavailable-hour");
    }

    hourSelect.appendChild(option);
  });
}



