import dayjs from "dayjs";

import { schedulesFetchByDay } from "../../services/schedule-fetch-by-day";
import { schedulesShow } from "./show";
import { hoursLoad } from "../form/hours-load";

const dateInput = document.getElementById("date");
dateInput.value = dayjs(new Date()).format("YYYY-MM-DD");

export async function schedulesDay() {
  const date = dateInput.value;
  const formDateInput = document.getElementById("form-date");
  const formDate = formDateInput?.value || date;

  const dailySchedules = await schedulesFetchByDay(date);
  const formDailySchedules = await schedulesFetchByDay(formDate);

  schedulesShow({ dailySchedules });
  hoursLoad({ date: formDate, dailySchedules: formDailySchedules });
}


