const notCurMonth = (day: any, value: any) => {
  return day.format("MM") !== value.format("MM");
};
const isSelected = (day: any, value: any) => {
  return value.isSame(day, "day");
};
const isToday = (day: { isSame: (arg0: Date, arg1: string) => any }) => {
  return day.isSame(new Date(), "day");
};
export const dayStyles = (day: any, value: any) => {
  if (notCurMonth(day, value)) return "not-cur-month";
  if (isToday(day)) return "today";
  if (isSelected(day, value)) return "focus";
  return "";
};
