import React, { useEffect, useState } from "react";

// import { Button, View, Image } from "react-native";
// import WelcomeScreen from "./app/Screen/WelcomeScreen";
// import ViewImageScreen from "./app/Screen/ViewImageScreen";
// import * as ImagePicker from "expo-image-picker";
// import Screen from "./app/components/Screen";
// import ImageInput from "./app/components/ImageInput";
// import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/Screen/ListingEditScreen";
import WelcomeScreen from "./app/Screen/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";


// export default function App() {
//   const [imageUris, setImageUris] = useState([]);

//   const handleAdd = (uri) => {
//     setImageUris([...imageUris, uri]);
//   };

//   const handleRemove = (uri) => {
//     setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
//   };

//   const requestPermission = async () => {
//     const { granted } = await ImagePicker.requestCameraPermissionsAsync();
//     if (!granted) alert("You need to enable permission to access the library");
//   };

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync();
//       if (!result.cancelled && result.assets && result.assets.length > 0) {
//         const { uri } = result.assets[0];
//         setImageUris([...imageUris, uri]);
//       }
//     } catch (error) {
//       console.log("Error Reading Image:", error);
//     }
//   };

//   const takePhoto = async () => {
//     try {
//       const result = await ImagePicker.launchCameraAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         quality: 0.8,
//       });
//       if (!result.cancelled && result.uri) {
//         setImageUris([...imageUris, result.uri]);
//       }
//     } catch (error) {
//       console.log("Error Taking Photo:", error);
//     }
//   };

//   return (
//     <Screen>
//       <Button title="Select Image" onPress={selectImage} />
//       <Button title="Take Photo" onPress={takePhoto} />

//       <ImageInputList
//         imageUris={imageUris}
//         onAddImage={handleAdd}
//         onRemoveImage={handleRemove}
//       />
//     </Screen>
//   );
// }

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}