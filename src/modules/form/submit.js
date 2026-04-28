import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load";
import { closeModal } from "./modal";

const form = document.querySelector("form");

const inputToday = dayjs().format("YYYY-MM-DD");
const dateInput = document.getElementById('form-date');
dateInput.value = inputToday;
dateInput.min = inputToday;

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