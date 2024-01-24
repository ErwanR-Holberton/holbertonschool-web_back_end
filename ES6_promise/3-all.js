import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
    try {
      const [{ body }, { firstName, lastName }] = await Promise.all([uploadPhoto(), createUser()]);
      console.log(`${body} ${firstName} ${lastName}`);
    } catch (error) {
      console.error('Signup system offline', error);
    }
  }
