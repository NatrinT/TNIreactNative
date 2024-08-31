import { StyleSheet , View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import CreatePost from './screens/CreatePost'

const HomeStack = createNativeStackNavigator()

const App = ():React.JSX.Element => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName='Home'>
        <HomeStack.Screen name='Home' component={HomeScreen} />
        <HomeStack.Screen name='About' component={AboutScreen} />
        <HomeStack.Screen name='CreatePost' component={CreatePost} />
      </HomeStack.Navigator>
    </NavigationContainer>
  )
} 
export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})