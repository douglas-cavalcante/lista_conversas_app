import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "./ListItem";

export default class Welcome extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Bem-vindo",
  });


  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: "1",
          avatar: "https://b7web.com.br/avatar1.png",
          name: "Henrique Douglas",
          message: "Quando o app fica pronto ?"
        },
        {
          key: "2",
          avatar: "https://b7web.com.br/avatar3.png",
          name: "Victor Sobreira",
          message: "Quando o app fica pronto ?"
        },
        {
          key: "3",
          avatar: "https://b7web.com.br/avatar2.png",
          name: "Jonas Ribeiro",
          message: "Quando o app fica pronto ?"
        },
        {
          key: "4",
          avatar: "https://b7web.com.br/avatar1.png",
          name: "Neto Cavalcante",
          message: "Quando o app fica pronto ?"
        },
        {
          key: "5",
          avatar: "https://b7web.com.br/avatar3.png",
          name: "Harry Potter",
          message: "Quando o app fica pronto ?"
        },
        {
          key: "6",
          avatar: "https://b7web.com.br/avatar2.png",
          name: "Zeref Dragneel",
          message: "Quando o app fica pronto ?"
        },

      ]
    }
  }

  redirect = () => {
    this.props.navigation.navigate("Chat");
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <ListItem data={item} onPress={() => this.redirect()} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
});
