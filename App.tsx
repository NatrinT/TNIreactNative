import "react-native-gesture-handler";

import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";

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
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const App = (): React.JSX.Element => {
  const [isLogin] = useState(false);

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
      <ProductStack.Navigator
        initialRouteName="Product"
        screenOptions={{
          // headerStyle: { backgroundColor: "#20b2aa" },
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          // headerShown:false
        }}
      >
        <ProductStack.Screen name="Product" component={ProductScreen} />
        <ProductStack.Screen name="Detail" component={DetailScreen} />
      </ProductStack.Navigator>
    );
  }

  function LoginStackScreen() {
    return (
      <LoginStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          // headerStyle: { backgroundColor: "#20b2aa" },
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          // headerShown:false
        }}
      >
        <LoginStack.Screen name="Login" component={LoginScreen} />
      </LoginStack.Navigator>
    );
  }

  return (
    <>
    <SafeAreaProvider>
      <NavigationContainer>
        <HeaderButtonsProvider stackType="native">
          {isLogin ? (
            <Drawer.Navigator
              screenOptions={{ headerShown: false }}
              drawerContent={(props) => <MenuScreen {...props} />}
            >
              <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
              <Drawer.Screen
                name="ProductStack"
                component={ProductStackScreen}
              />
            </Drawer.Navigator>
          ) : (
            <LoginStackScreen />
          )}
        </HeaderButtonsProvider>
      </NavigationContainer>
    </SafeAreaProvider>
    <Toast/>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
