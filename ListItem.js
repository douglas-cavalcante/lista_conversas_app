import React from "react";
import { View, Image, StyleSheet, Alert, Text, TouchableHighlight } from "react-native";


export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: this.props.data.message
    };

  }


  click = () => {
    Alert.alert("Conversando com " + this.props.data.name);
  }


  render() {
    return (

      <TouchableHighlight onPress={this.click} underlayColor={"#CCCCCC"}>
        <View style={styles.item}>
          <Image source={{ uri: this.props.data.avatar }} style={styles.img} />
          <View style={styles.info}>
            <Text numberOfLines={1} style={styles.name}>{this.props.data.name}</Text>
            <Text numberOfLines={1}>{this.state.message}</Text>
          </View>
        </View>
      </TouchableHighlight>

    );
  }
}


const styles = StyleSheet.create({
  item: {
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: "#CCCCCC",
    flex: 1,
    flexDirection: "row"
  },
  img: {
    height: 40,
    width: 40,
    marginTop: 10,
    borderRadius: 20
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18
  },
});