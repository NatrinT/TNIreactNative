import { StyleSheet , View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'

const App = ():React.JSX.Element => {
  return (
    <View style={styles.container}>
      <ProfileScreen/>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})