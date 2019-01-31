import { Facebook } from 'expo';
import keys from '../keys';
async function logInFacebook() {
    try {
        const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync(keys.fb_appId, {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            //Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            return await response.json();
        } else {
            // type === 'cancel'
            return false;
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
        return false;
    }
}

export default logInFacebook;
