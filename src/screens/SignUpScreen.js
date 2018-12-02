import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableHighlight } from "react-native";

class SignUpScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          メンバー登録
        </Text>
        <TextInput style={styles.input} value="Email Addrees" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.button} title="送信" onPress={() => {}} underlayColor="#C70F66">
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: "100%",
    padding:24,
    backgroundColor: "#fff"
  },
  title:{
    fontSize:24,
    alignSelf: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: "#eee",
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  button:{
    backgroundColor: "#E31676",
    height: 48,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    width:"70%",
    alignSelf:"center"
  },
  buttonTitle:{
    color: "#fff",
    fontSize: 18,
  },
});

export default SignUpScreen;