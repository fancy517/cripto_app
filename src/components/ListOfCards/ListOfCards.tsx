import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import TokenCard from "../TokenCard";
import Api from "../../api/Api";
import Token from "../../types/Token";

type listOfCardsProps = {
  queryList: number[];
};

type listOfCardsState = {
  currentPage: number;
  criptoApi: Api;
  queryTimeOut: number;
  listOfTokens: Token[];
};

export class ListOfCards extends Component<listOfCardsProps> {
  constructor(props: listOfCardsProps) {
    super(props);
    this.queryTimeout = this.queryTimeout.bind(this);
  }

  state: listOfCardsState = {
    currentPage: 0,
    queryTimeOut: 0,
    criptoApi: new Api(),
    listOfTokens: [],
  };

  componentDidMount(): void {
    this.initTokens();
  }

  componentDidUpdate(
    prevProps: Readonly<listOfCardsProps>,
    prevState: Readonly<listOfCardsState>,
    snapshot?: any
  ): void {
    if (
      this.props.queryList.length > 0 &&
      this.props.queryList !== prevProps.queryList
    ) {
      this.queryTimeout();
    } else if (
      this.props.queryList.length === 0 &&
      this.props.queryList !== prevProps.queryList
    ) {
      this.initTokens();
      this.setState({ ...this.state, currentPage: 0 });
    }
  }

  async initTokens(): Promise<void> {
    const listOfTokens = await this.state.criptoApi.getAllCriptoTickets(0);
    this.setState({ ...this.state, listOfTokens });
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

  async makeSearchWithQuery(): Promise<void> {
    const queryTokens = await this.state.criptoApi.getCriptoDetails(
      this.props.queryList.slice(0, 10).join(",")
    );
    this.setState({
      ...this.state,
      listOfTokens: queryTokens,
      currentPage: 0,
    });
  }

  queryTimeout() {
    if (this.state.queryTimeOut !== 0) {
      clearTimeout(this.state.queryTimeOut);
    }
    const tempTimeOut = setTimeout(() => this.makeSearchWithQuery(), 1000);
    this.setState({
      ...this.state,
      queryTimeOut: tempTimeOut,
    });
  }
  render() {
    return (
      <FlatList
        style={style.container}
        data={this.state.listOfTokens}
        onEndReached={
          this.props.queryList.length > 0
            ? () => {}
            : () => this.chargeMoreTokens()
        }
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
