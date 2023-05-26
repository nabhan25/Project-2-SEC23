import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Button,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  ImageBackground,
} from "react-native";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import CategoryPickerItemTank from "../components/CategoryPickerItemTank";
import CategoryPickerItemCoat from "../components/CategoryPickerItemCoat";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import ImageInputList from "../components/ImageInputList";

import * as ImagePicker from "expo-image-picker";
import { launchCameraAsync } from "expo-image-picker";
import * as Crypto from "expo-crypto";
import { TouchableOpacity } from "react-native";

const categories = [
  {
    backgroundColor: "#0c3863",
    icon: "flag",
    label: "Coating",
    value: 1,
  },
  {
    backgroundColor: "#144e89",
    icon: "alert",
    label: "Crack",
    value: 2,
  },
  {
    backgroundColor: "#1d64af",
    icon: "alien",
    label: "Variation",
    value: 3,
  },
  {
    backgroundColor: "#2678d4",
    icon: "arrange-send-to-back",
    label: "Pitting",
    value: 4,
  },
  {
    backgroundColor: "#505f6b",
    icon: "arrow-down-thick",
    label: "Weld Defect",
    value: 5,
  },
  {
    backgroundColor: "#7e8d9a",
    icon: "vector-curve",
    label: "Buckling",
    value: 6,
  },
  {
    backgroundColor: "#a8b4c1",
    icon: "blur-linear",
    label: "Corrosion",
    value: 7,
  },
  {
    backgroundColor: "#d0dce8",
    icon: "close-circle-multiple-outline",
    label: "Damage",
    value: 8,
  },
  {
    backgroundColor: "#808080",
    icon: "magnify-plus-cursor",
    label: "Suspect Area",
    value: 9,
  },
];

const Tank = [
  {
    label: "WBT 1S",
    value: 1,
  },
  {
    label: "WBT 1P",
    value: 2,
  },
  {
    label: "WBT 2S",
    value: 3,
  },
  {
    label: "WBT 2P",
    value: 4,
  },
  {
    label: "WBT 3S",
    value: 5,
  },
  {
    label: "WBT 3P",
    value: 6,
  },
  {
    label: "WBT 4S",
    value: 7,
  },
  {
    label: "WBT 4P",
    value: 8,
  },
  {
    label: "WBT 5S",
    value: 9,
  },
  {
    label: "WBT 5P",
    value: 10,
  },

  {
    label: "FPT",
    value: 11,
  },

  {
    label: "APT",
    value: 12,
  },
];

const CoatCond = [
  {
    label: "Good Coating",
    value: 1,
    backgroundColor: "green",
  },
  {
    label: "Fair Coating",
    value: 2,
    backgroundColor: "orange",
  },
  {
    label: "Poor Coating",
    value: 3,
    backgroundColor: "red",
  },
];

const initialFormValues = {
  title: "",
  price: "",
  description: "",
  category: "",
  images: [],
  DefectID: "",
  Tank: "",
  AvgDim: "",
  Categories: "",
  categories: null,
  CoatingCondition: "",
  DefectLength: "",
  DefectWidth: "",
  Frame: "",
  Stiffener: "",
  UUID: "",
};

function ListingEditScreen() {
  const scrollView = useRef();
  const [imageUri, setImageUri] = useState([]);
  const handleAdd = (uri) => {
    setImageUri([...imageUri, uri]);
  };
  const handleRemove = (uri) => {
    setImageUri(imageUri.filter((imageUri) => imageUri !== uri));
  };

  const takePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.8,
      });
      if (!result.canceled && result.assets.length > 0) {
        const newUris = result.assets.map((asset) => asset.uri);
        setImageUri([...imageUri, ...newUris]);
      }
    } catch (error) {
      console.log("Error Taking Photo:", error);
    }
  };

  const [defectId, setDefectId] = useState("");

  const [formValues, setFormValues] = useState(initialFormValues);

  const generateUniqueID = async () => {
    const randomBytes = await Crypto.getRandomBytesAsync(6);
    const id = randomBytes.reduce(
      (acc, byte) => acc + byte.toString(16).padStart(2, "0"),
      ""
    );
    setDefectId(id);
  };

  const handleSubmit = () => {
    console.log("Submitted");
    Alert.alert("Good Job!", "Your finding has been submitted successfully.", [
      {
        text: "OK",
        onPress: () => {
          setImageUri([]); // Reset image URIs
          setFormValues(initialFormValues); // Reset form values
        },
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlayContainer}>
          <Screen style={styles.container}>
            {/* <Text style={styles.heading}>Finding Register Input</Text> */}
            <Text style={styles.heading2}>FPSO Apung SS-II</Text>

            <Form
              initialValues={formValues}
              onSubmit={handleSubmit}
              enableReinitialize

              // onSubmit={(values, { resetForm }) => {
              //   console.log("Submitted");
              //           handleSubmit(values, { resetForm });

              // Alert.alert(
              //   "Good Job!",
              //   "Your finding has been submitted successfully.",
              //   [
              //     {
              //       text: "OK",
              //       onPress: () => {
              //         setImageUri([]); // Reset image URIs
              //         resetForm(); // Reset form fields
              //       },
              //     },
              //   ]
              // );
              // handleSubmit(values, { resetForm }); // Pass resetForm as the second argument
            >
              {/* <Button
                title="Take Photo"
                style={styles.CustomButton}
                onPress={takePhoto}
              /> */}

              <TouchableOpacity
                style={[styles.CustomButton, styles.button]}
                onPress={takePhoto}
              >
                <Text style={styles.buttonText}>Take Photo</Text>
              </TouchableOpacity>

              <ImageInputList
                imageUris={imageUri}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
              />

              {imageUri.map((uri, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image source={{ uri }} style={styles.image} />
                </View>
              ))}

              {/* <FormImagePicker name="images" /> */}

              <ScrollView
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
              >
                <View>
                  {/* <Button
                    title="Generate Unique ID"
                    onPress={generateUniqueID}
                  /> */}

                  <TouchableOpacity
                    style={[styles.CustomButton, styles.button]}
                    onPress={generateUniqueID}
                  >
                    <Text style={styles.buttonText} name="UUID">
                      Generate Unique ID
                    </Text>
                  </TouchableOpacity>

                  <FormField
                    width="100%"
                    maxLength={255}
                    name="DefectID"
                    value={defectId}
                  />

                  <FormField
                    maxLength={100}
                    multiline
                    name="description"
                    numberOfLines={2}
                    placeholder="Defect ID eg. WBT1S-DEF-001"
                  />

                  <Picker
                    items={Tank}
                    name="Tank"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItemTank}
                    placeholder="Tank/Location"
                    width="100%"
                  />

                  <FormField
                    width="100%"
                    keyboardType="numeric"
                    maxLength={8}
                    name="AvgDim"
                    placeholder="Avg Thickness"
                  />

                  <Picker
                    items={categories}
                    name="Category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Defect Category"
                    width="100%"
                  />

                  <Picker
                    items={CoatCond}
                    name="CoatingCondition"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItemCoat}
                    placeholder="Coating Condition"
                    width="100%"
                  />

                  <FormField
                    maxLength={100}
                    multiline
                    name="description"
                    numberOfLines={2}
                    placeholder="Description"
                  />

                  <View style={styles.row}>
                    <FormField
                      width="50%"
                      keyboardType="numeric"
                      maxLength={8}
                      name="DefectLength"
                      placeholder="DefectLength(mm)"
                    />
                    <FormField
                      width="50%"
                      keyboardType="numeric"
                      maxLength={8}
                      name="DefectWidth"
                      placeholder="DefectWidth(mm)"
                    />
                  </View>

                  <View style={styles.row}>
                    <FormField
                      width="50%"
                      maxLength={255}
                      name="Frame"
                      placeholder="Frame eg.1-2"
                    />
                    <FormField
                      width="50%"
                      maxLength={8}
                      name="Stiffener"
                      placeholder="Stiffener eg.SL4-6"
                    />
                  </View>

                  <SubmitButton title="Submit finding" />
                </View>
              </ScrollView>
            </Form>
          </Screen>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginVertical: 0,
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
  },

  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0,0, 0.2)",
  },

  heading: {
    fontSize: 15,
    // fontWeight: "bold",
    // fontStyle: "italic",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    color: "white",
  },

  heading2: {
    fontSize: 20,
    // fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
    color: "white",
    marginTop: 10,
  },

  row: {
    flexDirection: "row",
  },

  CustomButton: {
    color: "white",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "75%",
    alignSelf: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ListingEditScreen;
