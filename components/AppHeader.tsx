import { StyleSheet, Text, View } from "react-native";
import React from "react";

type ContentType = {
    title:string;
}

const AppHeader = ({title}:ContentType) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.subtitleText}>Message from App.tsx</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    flex:1,
    backgroundColor: "#AEC6CF",
    // padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});
