import { StyleSheet , View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample'

const App = ():React.JSX.Element => {
  return (
    <View style={styles.container}>
      {/* <ProfileScreen/> */}
      <UseEffectExample/>
    </View>
  )
} 
export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})