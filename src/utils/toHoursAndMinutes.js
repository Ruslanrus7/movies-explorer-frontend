export default function toHoursAndMinutes  (duration)  {
  const minutes = duration % 60;
  const hours = Math.floor(duration / 60);

  if (minutes === 0) {
    return `${hours}ч`
  } else if (hours === 0) {
    return `${minutes}м`
  } else {
    return `${hours}ч ${minutes}м`
  }
};
