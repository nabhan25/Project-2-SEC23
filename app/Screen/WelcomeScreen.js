import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import Button from "../components/Button";
import routes from "../navigation/routes";


function WelcomeScreen(navigation) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.word}>TRUHULL</Text>
        <Text style={styles.word2}>"trusted single point of truth"</Text>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      </View>
      <View style={styles.loginButton}>
              <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    // backgroundColor: "#A7BEAE",
    fontFamily: "Arial",
  },
  logo: {
    width: 200,
    height: 80,
    top: 10,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#6883BC",
    fontFamily: "Arial",
  },

  word: {
    fontSize: 25,
    color: "white",
  },

  word2: {
    fontSize: 15,
    color: "white",
    fontStyle: "italic",
  },
});

export default WelcomeScreen;
