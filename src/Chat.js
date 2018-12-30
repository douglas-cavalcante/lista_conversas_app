import React from "react";
import { StyleSheet, View, FlatList, ImageBackground } from "react-native";
import MessageItem from "./MessageItem";

export default class Chat extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Chat",
  });

  constructor(props) {
    super(props);
    this.state = {
      chat: [
        {
          key: "1",
          name: "Henrique Douglas",
          message: "Olá, tudo bem ?",
          me: true
        },
        {
          key: "2",
          name: "Laura Silva",
          message: "sim, tudo bem ?",
          me: false
        },
        {
          key: "3",
          name: "Laura Silva",
          message: "como está a faculdade ? Esta gostando do curso de ciências da computacao ",
          me: false
        },
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.chat} source={require("../assets/images/bg.jpg")}>
          <FlatList
            data={this.state.chat}
            renderItem={({ item }) => <MessageItem data={item} />}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chat: {
    flex: 1
  }
});
