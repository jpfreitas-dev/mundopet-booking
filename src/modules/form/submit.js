import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new";
import { schedulesFetchByDay } from "../../services/schedule-fetch-by-day";
import { schedulesDay } from "../schedules/load";
import { closeModal } from "./modal";
import { hoursLoad } from "./hours-load";

const form = document.querySelector("form");
const phoneInput = document.getElementById("phone");

const inputToday = dayjs().format("YYYY-MM-DD");
const dateInput = document.getElementById('form-date');
dateInput.value = inputToday;
dateInput.min = inputToday;

dateInput.addEventListener("change", async () => {
  const dailySchedules = await schedulesFetchByDay(dateInput.value);
  hoursLoad({ date: dateInput.value, dailySchedules });
});

phoneInput.maxLength = 16;

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 3) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3)}`;

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

phoneInput.addEventListener("input", () => {
  phoneInput.value = formatPhone(phoneInput.value);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(form);

    const tutorName = formData.get("tutor-name");
    const petName = formData.get("pet-name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const date = formData.get("form-date");
    const hour = formData.get("hour");

    // Valida os campos do formulário
    const fieldsToValidate = [
      { value: tutorName, message: "Por favor, preencha o nome do tutor." },
      { value: petName, message: "Por favor, preencha o nome do pet." },
      { value: phone, message: "Por favor, preencha o telefone." },
      { value: service, message: "Por favor, selecione um serviço." },
      { value: date, message: "Por favor, selecione uma data." },
      { value: hour, message: "Por favor, selecione um horário." }
    ];

    fieldsToValidate.forEach((field) => {
      if (!field.value) {
        throw new Error(field.message);
      }
    });

    const id = new Date().getTime();

    const phoneDigits = phone.replace(/\D/g, "");

    if (phoneDigits.length !== 11) {
      throw new Error("Telefone inválido. Use o formato (00) 0 0000-0000.");
    }

    await scheduleNew({ id, tutorName, petName, phone, service, date, hour });

    await schedulesDay(date);

    // limpa os campos e fecha o modal
    form.reset();
    dateInput.value = inputToday;
    closeModal();

  } catch (error) {
    alert("Ocorreu um erro ao criar o agendamento. Tente novamente mais tarde.");
    console.log(error);
  }
});