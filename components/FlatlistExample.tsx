import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

interface UserItem {
  id: string;
  name: string;
  email: string;
}

const FlatlistExample = (): React.JSX.Element => {
  const user: UserItem[] = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
    { id: "3", name: "Cara", email: "cara@example.com" },
  ];

  const _renderItem = ({item}: {item:UserItem}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.name}>{item.email}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={user} // กำหนดข้อมูลให้ Flatlist
        renderItem={_renderItem} // ให้แต่ละไอเท็มแสดงแบบไหน
        keyExtractor={(item) => item.id} // defined for each item
      />
    </View>
  );
};

export default FlatlistExample;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
});
