import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesPrac } from "../styles/styles";

type ContentType = {
    fullname:string;
    message:string;
}

const AppHeader = ({fullname,message}:ContentType) => {
  return (
    <View style={stylesPrac.header}>
      <Text style={stylesPrac.headerText}>Input your fullname : {fullname}</Text>
      <Text style={stylesPrac.subtitleText}>{message}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  
});
