import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  return Promise.all(promises)
    .then((results) => {
      if (results[0].status === 200) {
        console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
      } else {
        console.error('Signup system offline');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
