import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatlistCallBackend = (): React.JSX.Element => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error");
      });
  }, []);

  const _renderItem = ({ item }: { item: User }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.name}>{item.email}</Text>
      </View>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={"large"} color={"red"} />
      ) : (
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default FlatlistCallBackend;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});
