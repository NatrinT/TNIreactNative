import { StyleSheet , View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import { StatusBar } from "expo-status-bar";
import UseEffectExample from './components/UseEffectExample'
import FlatlistExample from './components/FlatlistExample';
import FlatlistCallBackend from './components/FlatlistCallBackend';
import NewsApp from './components/NewsApp';
import AxiosgetData from './components/AxiosgetData';
import AxiosPostData from './components/AxiosPostData';
import WeatherLondon from './components/WeatherLondon';
import WeatherBangkok from './components/WeatherBangkok';
import ModalExample from './components/ModalExample';
import WeatherApp from './components/WeatherApp';

const App = ():React.JSX.Element => {
  return (
    <View style={styles.container}>
      {/* <ProfileScreen/> */}
      {/* <UseEffectExample/> */}
      {/* <FlatlistExample/> */}
      {/* <FlatlistCallBackend/> */}
      {/* <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModalExample /> */}
      <WeatherApp/>
      <StatusBar style="auto" />
    </View>
  )
} 
export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})