import React from "react";
import { StyleSheet, TextInput, View, Text, TouchableHighlight } from "react-native";
import firebase from "firebase";

class SignUpScreen extends React.Component{

  state = {
    email: "",
    password: "",
  }

  static navigationOptions = {
    title: "Memot",
    headerStyle: {
      backgroundColor: "#265366",
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };

  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user)=>{
      console.log("success!",user);
      this.props.navigation.navigate("Home");
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          メンバー登録
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) =>{this.setState({ email: text })}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
         />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) =>{this.setState({ password: text })}}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry />
        <TouchableHighlight style={styles.button} title="送信" onPress={(e) => this.handleSubmit(e)} underlayColor="#C70F66">
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