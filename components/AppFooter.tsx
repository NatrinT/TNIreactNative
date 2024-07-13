import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppFooter = ():React.JSX.Element => {
  return (
    <View>
      <Text style={styles.color}>AppFooter</Text>
    </View>
  )
}

export default AppFooter

const styles = StyleSheet.create({
    color:{
        color:'red'
    }
})