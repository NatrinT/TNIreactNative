import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylesPrac } from "../styles/styles";

type ContentType = {
  // fullname: string;
  message: string;
  onButtonClick:() => void; // no return function
};

const Content = ({message,onButtonClick }: ContentType) => {
  const [displayFullname, setDisplayFullname] = React.useState("");

  // const showName = (fullname: string) => {
  //   setDisplayFullname(fullname)
  //   Alert.alert("Hello", "input your fullname: " + fullname);
  // };

  return (
    <View style={stylesPrac.container}>
      <View>
        <Text style={stylesPrac.content}>{message}</Text>
        <Text style={stylesPrac.content}>{displayFullname}</Text>
        <Button title="CLICK ME" onPress={onButtonClick} />
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({});
