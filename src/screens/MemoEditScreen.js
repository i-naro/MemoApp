import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import CircleButton from "../elements/CircleButton";

class MemoEditScreen extends React.Component{
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
    padingTop: 32,
    padingLeft: 16,
    padingRight: 16,
    padingBottom: 16,
    fontSize: 16,
  },
});

export default MemoEditScreen;