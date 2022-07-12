export function getDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}

export function getHHMMSS(timestamp) {
  const date = new Date(timestamp);
  const finalHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const finalMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const finalSeconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return finalHours + 'h' + finalMinutes + 'm' + finalSeconds;
}

export function getHHMM(timestamp) {
  const date = new Date(timestamp);
  const finalHours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const finalMinutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return finalHours + 'h' + finalMinutes;
}

export function getHours(timestamp) {
  const date = new Date(timestamp);
  return date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
}
export function getMinutes(timestamp) {
  const date = new Date(timestamp);
  return date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
}

export function getSeconds(timestamp) {
  const date = new Date(timestamp);
  return date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
}

export function getTimeBetweenDates(startTime, endTime) {
  const startdate = new Date(startTime);
  const endDate = new Date(endTime);

  return getHours(new Date(endDate - startdate).getTime());
}

export function getUserAge(timestamp) {
  const today = new Date();
  const birthDate = new Date(timestamp);

  const m = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export function getChildAge(timestamp) {
  const today = new Date();
  const birthDate = new Date(timestamp);

  const m = today.getMonth() - birthDate.getMonth();
  let age = today.getFullYear() - birthDate.getFullYear();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age === 0) return m + ' mois';

  return age + ' ans';
}
