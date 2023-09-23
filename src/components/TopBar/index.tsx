import { Appbar } from "react-native-paper";
import React from "react";

type topBarProps = {
  title?: string;
};

export default function TopBar({ title = "start" }: topBarProps) {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}
