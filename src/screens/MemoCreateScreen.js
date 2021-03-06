import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import firebase from "firebase";

import CircleButton from "../elements/CircleButton";

class MemoCreateScreen extends React.Component{

    state ={
        body: "", 
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

  handlePress(){
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    console.log(params.currentUser.user.uid);
    db.settings({　timestampsInSnapshots: true　});
    db.collection(`users/${params.currentUser.user.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
    .then((docRef)=>{
      console.log(docRef.id);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  render(){
    return(
      <View style={ styles.container }>

        <TextInput
        style={styles.memoEditInput}
        value="Hi"
        multiline
        value={this.state.body}
        onChangeText={(text)=>{ this.setState({ body: text }); }} />

        <CircleButton onPress={(e) => {this.handlePress(e)} }>
        +
        </CircleButton>

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

export default MemoCreateScreen;