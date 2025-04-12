export const formatDate = (datetime: string) => {
  const date = new Date(datetime);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  let hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, '0');
  const period = hour >= 12 ? '오후' : '오전';
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  return `${month}.${day} ${period} ${hour}:${minute}`;
};
