import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";

type ContentType = {
    title:string;
    name:string;
}

const showName = (name:string) => {
    Alert.alert('Hello','input your fullname '+name)
}

const Content = ({title,name}:ContentType) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
        <Button title="CLICK ME" onPress={()=>showName(name)}/>
      </View>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent:"center",
    alignItems:"center"
  },
});
