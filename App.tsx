import "react-native-gesture-handler";

import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import React, { useCallback, useState } from "react";

import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { createDrawerNavigator } from "@react-navigation/drawer"
import Ionicon from "react-native-vector-icons/Ionicons";;
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector,useAppDispatch } from "./redux-toolkit/hooks";
import { selectAuthState,setIsLogin,setIsLoading, setProfile } from "./auth/auth-slice";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import CreatePost from "./screens/CreatePost";
import MenuScreen from "./screens/MenuScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";
import { getProfile } from "./services/auth-service";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CameraScreen from "./screens/CameraScreen";

const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const CameraStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



const App = (): React.JSX.Element => {
  //ใช้ useAppSelector เพื่อดึง state จาก stroe
  const {isLogin,isLoading} = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch()

  const chkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const res = await getProfile()
      if (res?.data.data.user) {
        dispatch(setProfile(res.data.data.user))
        dispatch(setIsLogin(true))
      }else{
        dispatch(setIsLogin(false))
      }
    } catch (error) {
      console.log(error);
      
    }finally{
      dispatch(setIsLoading(false))
    }
  }

  useFocusEffect(
    useCallback(()=>{
      chkLogin()
    },[])
  )

  if(isLoading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    )
  }

  function TabContainer() {
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName ="";
          if (route.name === 'HomeStack') {
            iconName = focused? 'home': 'home-outline';
          } else if (route.name === 'CameraStack') {
            iconName = focused? 'camera': 'camera-outline';
          }
          
          return <Ionicon name={iconName} size={size} color={color} />;
        },tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
        tabBarActiveBackgroundColor:'#E9EAEC'
      })}
      >
        <Tab.Screen name="HomeStack" component={HomeStackScreen} options={{tabBarLabel:'หน้าหลัก'}} />
        <Tab.Screen name="CameraStack" component={CameraStackScreen} options={{tabBarLabel:'กล้อง'}} />
      </Tab.Navigator>
    )
  }
  
  function CameraStackScreen() {
    return (
      <CameraStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          // headerStyle: { backgroundColor: "#20b2aa" },
          // headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          // headerShown:false
        }}
      >
        <CameraStack.Screen name="Camera" component={CameraScreen} options={{title:'camera'}} />
      </CameraStack.Navigator>
    );
  }

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
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={(props) => <MenuScreen {...props} />}>
            <Drawer.Screen name="Home" component={TabContainer} />
            <Drawer.Screen name="ProductStack" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App/>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
