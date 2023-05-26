import React from "react";
import { FlatList, StyleSheet, ImageBackground, View } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "WBT4P-DEF-105",
    desription: "Buckle on SL45 with coating breakdown",
    image: require("../assets/defect.jpg"),
  },
  {
    id: 2,
    title: "WBT4P-DEF-120",
    desription: "Weld defect found in between SL45 and Side Shell",
    image: require("../assets/defect2.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
        <Screen style={styles.overlayContainer}>
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={item.desription}
                image={item.image}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
              />
            )}
          />
        </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },

  backgroundImage: {
    flex: 1,
  },
    overlayContainer: {
    flex: 2,
    backgroundColor: "rgba(0, 0,0, 0.2)",
  },
});

export default ListingsScreen;
