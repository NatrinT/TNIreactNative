import { StyleSheet, View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Content from "./components/Content";
import ProfileScreen from "./components/ProfileScreen";
import UseEffectExample from "./components/UseEffectExample";
import { stylesPrac } from "./styles/styles";
import { StatusBar } from "expo-status-bar";

const App = (): React.JSX.Element => {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Meesage from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log("Fullname has changed to : ", fullname);
  }, [fullname]);

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />
      <Content fullname={fullname} message={message} />
      <View style={stylesPrac.content}>
        <TextInput
          style={stylesPrac.input}
          placeholder="Enter your fullname"
          value={fullname}
          onChangeText={setFullname}
        />
      </View>
      <AppFooter footerMesage={footerMessage} />
      <StatusBar style="light" />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
