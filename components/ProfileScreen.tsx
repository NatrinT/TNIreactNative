import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
    const Profile1 = require('../assets/phatrakenglish.jpg')
    const Profile2 = require('../assets/getstudentimage.jpg')

  const [name, setName] = useState("Natrin Thongvichit");
  const [picture, setPicture] = useState(Profile1);

  const handleChangeName = () => {
    setName("New Name");
  };

  const handleChangePic = () => {
    setPicture(Profile2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={picture}
          style={styles.profileImg}
        />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName} />
          <Text>{"\n"}</Text>
          <Button title="Change Profile" onPress={handleChangePic} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#dddddd",
//   },
//   profileImg: {
//     borderRadius: 50,
//     width: 100,
//     height: 100,
//     marginRight: 20,
//   },
//   profileContainer:{
//     flexDirection:"row",
//     alignItems: "center",
//     width:'100%',
//     padding:20,
//     borderRadius:20,
//     backgroundColor:'white',
//     elevation:5,
//     marginTop:50,
//     // borderWidth: 1,
//     // borderColor: "red",
//   },
//   profileName:{
//     fontSize:18,
//     color:'red',
//     fontWeight:'bold'
//   }
// });
