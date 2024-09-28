import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, ListItem, Icon } from "@rneui/base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useAppSelector } from "../redux-toolkit/hooks";
import { selectAuthState } from "../auth/auth-slice";

const MenuScreen = ({ navigation }: any): React.JSX.Element => {
const {profile} = useAppSelector(selectAuthState)

  return (
    <View>
      <Header
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={{
          text: 'Welcome, '+profile.name,
          style: { color: "#fff" },
        }}
        centerContainerStyle={{}}
        containerStyle={{ width: "100%", height: 200 }}
        leftContainerStyle={{}}
        linearGradientProps={{}}
        placement="center"
        rightContainerStyle={{}}
        statusBarProps={{}}
      />
      <>
        <ListItem onPress={()=>{navigation.navigate('HomeStack')}}>
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem onPress={()=>{navigation.navigate('ProductStack')}}>
          <Icon name="star" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
