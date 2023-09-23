import { Appbar } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

type topBarProps = {
  title?: string;
};

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function TopBar({ title = "Homepage" }: topBarProps) {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      {navigation.canGoBack() ? (
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
      ) : (
        <Appbar.Action icon={MORE_ICON} />
      )}

      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={() => {}} />
    </Appbar.Header>
  );
}
