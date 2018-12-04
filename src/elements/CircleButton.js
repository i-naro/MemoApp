import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

class CircleButton extends React.Component {
  render(){
    const { style, color, onPress } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    if(color === "white"){
      bgColor = "#fff";
      textColor = "#E31676";
    }

    return(
      <TouchableHighlight style={[ styles.container,style ]} onPress={onPress}>
        <View style={[ styles.CircleButton,{ backgroundColor: bgColor } ]}>
          <Text style={[ styles.CircleButtonTitle, { color:textColor } ]}>
            {this.props.children}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    position: "absolute",
    bottom: 32,
    right: 32,
  },
  CircleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems:"center",
    shadowColor:"#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  CircleButtonTitle:{
    fontSize: 32,
    lineHeight: 36,
  }
});

export default CircleButton;