import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePost from "./screens/CreatePost";

const HomeStack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#20b2aa" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "หน้าหลัก" }}
        />
        <HomeStack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "เกี่ยวกับเรา",
            headerTitleAlign: "center",
          }}
        />
        <HomeStack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{ title: "สร้างโพสต์" }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
