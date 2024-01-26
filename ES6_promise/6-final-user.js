import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let status;
  let value;
  let userData;
  let photoData;
  const resultArray = [];
  try {
    userData = await signUpUser(firstName, lastName);
    status = 'fulfilled';
    value = userData;
  } catch (error) {
    status = 'rejected';
    value = error;
  }
  resultArray.push({ status, value });
  try {
    photoData = await uploadPhoto(fileName);
    status = 'fulfilled';
    value = photoData;
  } catch (error) {
    status = 'rejected';
    value = error;
  }
  resultArray.push({ status, value });
  return resultArray;
}
