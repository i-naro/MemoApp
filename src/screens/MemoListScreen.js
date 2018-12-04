import React from "react";
import { StyleSheet, View } from "react-native";

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component{
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
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation}/>
        <CircleButton onPress={() =>{this.props.navigation.navigate("MemoEdit");}}>
        +
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%",
  }
})

export default MemoListScreen;