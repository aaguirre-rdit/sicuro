import {Facebook} from 'expo';
import Config from '../config';

const AppId = Config.facebookSDK.ApiID;

const loginWithFacebook = async () => {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync(AppId, {
      permissions: ['email','public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const user = await fetch(`https://graph.facebook.com/v3.3/me?access_token=${token}`).then(res=>res.json());
      //Run callback
      return {user,token}
    } else {
      // type === 'cancel'
    }
  } catch (error) {
    alert(`Facebook Login Error: ${error.message}`);
    console.error(error)
  }
};
export default loginWithFacebook;
