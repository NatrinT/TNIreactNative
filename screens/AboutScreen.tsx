import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";

const AboutScreen = ({navigation,route }: any) => {

  const { companyName, companyId } = route.params;

  return (
    <ImageBackground
      source={require("../assets/Images/bg.png")}
      style={styles.bgImage}
    >
      <SafeAreaView>
        <Image
          source={require("../assets/Images/building.png")}
          resizeMode="contain"
          style={styles.myImage}
        />
        <Text>{companyName}</Text>
        <Image
          source={{ uri: "https://codingthailand.com/site/img/camera.png" }}
          resizeMode="contain"
          style={styles.myImageNetwork}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: 200,
    marginTop: 50,
  },
  myImageNetwork: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
