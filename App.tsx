import 'react-native-gesture-handler';

import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePost from "./screens/CreatePost";

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = (): React.JSX.Element => {

  function HomeStackScreen(){
    return(
      <HomeStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // headerStyle: { backgroundColor: "#20b2aa" },
            // headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            // headerShown:false
          }}
        >
          <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ title: "หน้าหลัก" }}
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
    )
  }

  return (
    <HeaderButtonsProvider stackType="native">
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='HomeStack' component={HomeStackScreen} options={{headerShown:false}} />
        </Drawer.Navigator>
      </NavigationContainer>
    </HeaderButtonsProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
