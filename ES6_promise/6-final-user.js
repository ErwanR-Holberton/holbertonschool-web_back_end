import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const result = await Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);

    const arrayResult = [];
    for (const prom of result) {
      const promResult = {
        status: prom.status,
        value: prom.status === 'fulfilled' && prom.value,
      };

      if (prom.status === 'rejected') {
        promResult.value = prom.reason;
      }

      arrayResult.push(promResult);
    }
    return arrayResult;
  } catch (error) {
    return error;
  }
}
