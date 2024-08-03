import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  profileImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 50,
    // borderWidth: 1,
    // borderColor: "red",
  },
  profileName: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});

const stylesPrac = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  header: {
    backgroundColor: "#AEC6CF",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    marginTop: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
  },
  content: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginVertical: 16,
    width: "100%",
  },
});

const stylesLogin = StyleSheet.create({
  container: {
  justifyContent: "center",
  padding: 20,
  marginTop: 50,
  backgroundColor: '#ffffff', // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
  borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
  elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
  width: '100%', // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
  },
  input: {
  height: 45, // เพิ่มความสูงของ TextInput
  borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
  borderWidth: 1, 
  borderRadius: 8, // เพิ่มความมนให้กบัขอบ TextInput
  marginBottom: 15, // เพิ่มระยะห่างดา้นล่างระหวา่ ง TextInput
  paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
  backgroundColor: "#f9f9f9", // ต้งัค่าสีพ้ืนหลงัของ TextInput
  }, 
  });

export { styles, stylesPrac, stylesLogin };
