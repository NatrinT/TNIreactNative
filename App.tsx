import "react-native-gesture-handler";

import { StyleSheet, View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePost from "./screens/CreatePost";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = (): React.JSX.Element => {
  function HomeStackScreen() {
    return (
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
      </HomeStack.Navigator>
    );
  }

  function ProductStackScreen() {
    return (
      <HomeStack.Navigator
        initialRouteName="Product"
        screenOptions={{
          // headerStyle: { backgroundColor: "#20b2aa" },
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          // headerShown:false
        }}
      >
        <HomeStack.Screen
          name="Product"
          component={ProductScreen}
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
      </HomeStack.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <HeaderButtonsProvider stackType="native">
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </HeaderButtonsProvider>
    </SafeAreaProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
