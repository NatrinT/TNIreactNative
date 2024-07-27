import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Content from './components/Content'

const App = () => {
  return (
    <View style={styles.container}>
      <AppHeader title={"Input your fullname"}/>
      <Content title={"Message from App.tsx"} name={"Natrin Thongvichit"}/>
      <AppFooter title={" Thai-Nichi Institute of Technology"}/>
      <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})