import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : { error: result.reason },
    })))
    .catch((error) => {
      console.log('Error during profile signup:', error.message);
      return [
        {
          status: 'rejected',
          value: { error: error.message },
        },
        null,
      ];
    });
}
