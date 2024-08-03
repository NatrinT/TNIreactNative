import { StyleSheet, Text, View } from "react-native";
import React from "react";
import App from "../App";
import { stylesPrac } from "../styles/styles";

type ContentType = {
  footerMesage:string;
}

const AppFooter = ({footerMesage}:ContentType) => {
  return (
    <View style={stylesPrac.footer}>
      <Text style={stylesPrac.footerText}>{footerMesage}</Text>
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  
});
