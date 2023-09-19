import { Appbar } from "react-native-paper";
import React, { Component } from "react";

type topBarProps = {
    
}

export default class TopBar extends Component {
  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Inicio" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
    );
  }
}
