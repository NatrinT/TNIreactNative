import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import AppLogo from "./AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import { findAllProduct } from "../services/product-service";
import { ListItem, Avatar } from "@rneui/themed";
import { Badge } from "@rneui/base";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />​
  // you may access them and pass something else to `HeaderButton` if you like​
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = () => {
  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="logout"
            iconName="logout"
            onPress={() => Alert.alert("Log out", "Close Menu")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findAllProduct();
      setProduct(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
          <ListItem bottomDivider onPress={()=> navigation.navigate({name:'Detail',params:{data :item}})}>
            <Avatar source={{ uri: item.picture }} size={50} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            <Badge value={item.view} status="success" />
          </ListItem>
      </>
    );
  };

  return (
    <View>
      {/* <Text>{JSON.stringify(product)}</Text> */}

      {loading ? (
        <ActivityIndicator size={50} />
      ) : (
        <FlatList
          data={product}
          renderItem={_renderItem}
          keyExtractor={(item: any) => item.id.toString()}
          onRefresh={async () => await getProduct()}
          refreshing={loading}
        />
      )}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
