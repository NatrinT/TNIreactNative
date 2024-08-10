import { StyleSheet , View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import { StatusBar } from "expo-status-bar";
import UseEffectExample from './components/UseEffectExample'
import FlatlistExample from './components/FlatlistExample';
import FlatlistCallBackend from './components/FlatlistCallBackend';

const App = ():React.JSX.Element => {
  return (
    <View style={styles.container}>
      {/* <ProfileScreen/> */}
      {/* <UseEffectExample/> */}
      {/* <FlatlistExample/> */}
      <FlatlistCallBackend/>
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