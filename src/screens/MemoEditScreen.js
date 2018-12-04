import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import CircleButton from "../elements/CircleButton";

class MemoEditScreen extends React.Component{
  static navigationOptions = {
    title: "Memot",
    headerStyle: {
      backgroundColor: "#265366",
    },
    headerTitleStyle: {
      color: '#fff',
    },
  };
  render(){
    return(
      <View style={ styles.container }>

        <TextInput style={styles.memoEditInput} value="Hi" multiline />

        <CircleButton>a</CircleButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: "100%",
  },
  memoEditInput:{
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;