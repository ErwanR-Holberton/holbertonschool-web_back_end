import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = await Promise.allSettled([signUpUser(firstName, lastName),
    uploadPhoto(fileName)]);
  const arrayResult = [];
  for (const prom of promises) {
    const promResult = {
      status: prom.status,
      value: prom.status === 'fulfilled' && prom.value,
    };

    if (prom.status === 'rejected') {
      promResult.value = prom.reason.message;
    }

    arrayResult.push(promResult);
  }
  console.log(arrayResult)
  return arrayResult;
}
