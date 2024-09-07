import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const HomeScreen1 = ({ navigation, route }: any): React.JSX.Element => {
  const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyId: 100,
    });
  };

  const gotoCreatePost = () => {
    navigation.navigate("CreatePost", {
      companyName: "Thai-Nichi Institute of Technology",
      companyId: 100,
    });
  };

  return (
    <View style={styles.container}>
      <MaterialIcon name="home" size={40} color={"pink"} />
      <Text style={styles.header}>HomeScreen</Text>
      <Button title="ABOUT US" onPress={gotoAbout} />
    </View>
  );
};

export default HomeScreen1;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​

    fontWeight: "bold",
  },
});
