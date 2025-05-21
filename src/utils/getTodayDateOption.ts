import { dateMonthOption, dateOptions, dateYearOption, Option } from '../data/options';

export const getTodayDateOption = (): Option => {
  const today = new Date();
  const selectedYear = Number(dateYearOption.value);
  const selectedMonth = Number(dateMonthOption.value);
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDate = today.getDate();

  const todayOption =
    todayYear === selectedYear &&
    todayMonth === selectedMonth &&
    dateOptions.some((option) => option.value === todayDate)
      ? (dateOptions.find((option) => option.value === todayDate) ?? dateOptions[0])
      : dateOptions[0];

  return todayOption;
};
