import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default class MessageItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.messageStyle = styles.messageLeft;
    if (this.props.data.me) {
      this.messageStyle = styles.messageRight;
    }

  }

  render() {
    return (
      <View style={[styles.area, this.messageStyle]}>
        <Text style={styles.name}>{this.props.data.name}</Text>
        <Text>{this.props.data.message}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  area: {
    backgroundColor: "red",
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  messageLeft: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    marginRight: 50,
  },
  messageRight: {
    backgroundColor: "#00FF00",
    alignSelf: "flex-end",
    marginLeft:50
  },
  name: {
    fontSize: 15,
    fontWeight: "bold"
  }
})