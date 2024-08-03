import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    !name ? Alert.alert("Please Enter Name") : !email ? Alert.alert("Please Enter Email") : Alert.alert("Success");
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        value={name}
        placeholder="Enter Name"
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        value={email}
        placeholder="Enter Email"
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="SUBMIT" onPress={handleSubmit} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
