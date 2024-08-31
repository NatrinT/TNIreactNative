import { StyleSheet, Text, View,TextInput ,Button} from 'react-native'
import React, { useState } from 'react'

const CreatePost = ({navigation}:any) => {
    const [text,setText] = useState('')

    const handleNavigate = () => {
        navigation.navigate({name:'Home',params:{post :text}})
    }

  return (
    <View>
      <TextInput
      multiline
      placeholder='Tell Something...' 
      value={text}
      onChangeText={setText}
      maxLength={40}
      numberOfLines={15}
      />
      <Button title='DONE' onPress={handleNavigate} />
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({})