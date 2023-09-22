import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import TokenCard from "./TokenCard";
import Api from "../api";

export class ListOfCards extends Component {
  state = {
    currentPage: 0,
    listOfTokens: [],
    criptoApi: new Api(),
  };

  componentDidMount(): void {
    (async () => {
      const listOfTokens = await this.state.criptoApi.getAllCriptoTickets(
        this.state.currentPage
      );
      this.setState({ ...this.state, listOfTokens });
    })();
  }

  async chargeMoreTokens(): Promise<void> {
    const moreTokens = await this.state.criptoApi.getAllCriptoTickets(
      this.state.currentPage + 1
    );
    this.setState({
      ...this.state,
      listOfTokens: [...this.state.listOfTokens, ...moreTokens],
      currentPage: this.state.currentPage + 1,
    });
  }
  render() {
    return (
      <FlatList
        style={style.container}
        data={this.state.listOfTokens}
        onEndReached={() => this.chargeMoreTokens()}
        onEndReachedThreshold={0.1}
        renderItem={({ item, index }) => <TokenCard token={item} key={index} />}
      />
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListOfCards;
