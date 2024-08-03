import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylesPrac } from "../styles/styles";

type ContentType = {
  fullname: string;
  message: string;
};

const Content = ({ fullname, message }: ContentType) => {
  const [displayFullname, setDisplayFullname] = React.useState("");

  const showName = (fullname: string) => {
    setDisplayFullname(fullname)
    Alert.alert("Hello", "input your fullname: " + fullname);
  };

  return (
    <View style={stylesPrac.container}>
      <View>
        <Text style={stylesPrac.content}>{message}</Text>
        <Text style={stylesPrac.content}>{displayFullname}</Text>
        <Button title="CLICK ME" onPress={() => showName(fullname)} />
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({});
