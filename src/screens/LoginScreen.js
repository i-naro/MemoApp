import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableHighlight } from "react-native";

class LoginScreen extends React.Component{

  state = {
    email: "",
    password: "",
  }
  static navigationOptions = {
    title: "Memot",
    headerTintColor: "#fff",
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: "#265366",
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };

  hundleSubmit(){
    console.log("submited!!")
    // this.props.navigation.navigate("Home")
    // Log in!!
  };

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput 
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => {this.setState({email: text})}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address" />
        <TextInput 
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => {this.setState({password: text})}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry />
        <TouchableHighlight 
          style={styles.button}
          onPress={(e) => {this.hundleSubmit(e)}}>
          <Text style={styles.buttonTitle}>ログインする</Text>
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

export default LoginScreen;