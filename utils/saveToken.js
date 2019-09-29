import {AsyncStorage} from 'react-native';

const _saveToken = async (userToken) => {
  const result = await AsyncStorage.setItem('userToken',userToken);
  console.log({result})
  return result
};

export default _saveToken;
