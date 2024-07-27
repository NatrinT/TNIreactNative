import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/phatrakenglish.jpg")} style={styles.profileImg}/>
        <Text style={styles.profileName}>Natrin Thongvichit</Text>
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
