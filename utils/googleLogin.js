import { Google } from 'expo';
import Config from '../config';

const IOSClientID = Config.googleOAuth.ios.clientId;
const AndroidClientID = Config.googleOAuth.android.clientId;

const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: AndroidClientID,
      iosClientId: IOSClientID,
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      return result;
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    console.error({e})
    return {error: true};
  }
};

export default signInWithGoogleAsync;
