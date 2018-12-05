import React from "react";
import { StyleSheet, View } from "react-native";

import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";

class MemoListScreen extends React.Component{
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

  handlePress(){
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate("MemoCreate", {currentUser: params.currentUser })
  }
  
  render(){
    return(
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation}/>
        <CircleButton onPress={(e)=>{this.handlePress(e)}}>
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