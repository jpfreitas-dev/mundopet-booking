import dayjs from "dayjs";
import {apiConfig} from "./api-config";

export async function schedulesFetchByDay({date}) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);
    const data = await response.json();

    const dailySchedules = data.filter((schedule) => 
      dayjs(date).isSame(schedule.when, "day"));

    return dailySchedules;
  } catch (error) {
    alert("Ocorreu um erro ao buscar os agendamentos. Tente novamente mais tarde.");
    console.log(error);
  }
}