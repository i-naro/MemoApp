import React,{ Component } from "react";
import { StyleSheet, Text, View} from "react-native";

class MemoList extends React.Component {
  render(){
    return(
        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoDate}>2017/10/10</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList:{
    width:"100%",
    flex:1,
  },
  memoListItem:{
    padding:16,
    borderButtonWidth:1,
    borderBottomColor:"#ddd",
    backgroundColor:"#fff",
  },
  memoTitle:{
    fontSize:18,
    marginBottom:4
  },
  memoDate:{
    fontSize:12,
    color: "#2a2a2a"
  },
})

export default MemoList;