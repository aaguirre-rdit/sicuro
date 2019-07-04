import * as ImagePicker from 'expo-image-picker';
export default  async () =>{
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Image,
    allowsEditing: true,
    //aspect: [4, 3],
  });
  return result;
}
