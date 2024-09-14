import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  Dimensions,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { HeaderButton } from "react-navigation-header-buttons";
import { findProductById } from "../services/product-service";
import { ListItem, Tile } from "@rneui/themed";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />​
  // you may access them and pass something else to `HeaderButton` if you like​
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const DetailScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<any[]>([]);

  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const { data } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: data.title,
    });
  });

  const getProductById = async () => {
    try {
      setLoading(true);
      const response = await findProductById(data.id);
      setProduct(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProductById();
    }, [])
  );

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <Tile
          imageSrc={{
            uri: "https://c02.purpledshub.com/uploads/sites/48/2019/08/04-Keith-Trueman-Exmoor-Milky-Way-2017-3af6942-e1566387257633.jpg",
          }}
          title={item.ch_title}
          containerStyle={styles.tileContainer}
          titleStyle={styles.titleStyle}
          featured
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          activeOpacity={0.9}
          width={Dimensions.get("screen").width - 20}
        />
      </>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={50} />
      ) : (
        <FlatList
          data={product}
          renderItem={_renderItem}
          keyExtractor={(item: any) => item.ch_id.toString()}
          onRefresh={async () => await getProductById()}
          refreshing={loading}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // สีพื้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white", // สีขาวส าหรับชื่อ
  },
  tileContainer: {
    borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาส าหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา
    opacity: 0.9, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
    fontSize: 14,
    color: "white", // สีขาวส าหรับวันที่
  },
});
