import { Appbar } from "react-native-paper";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { Searchbar } from "react-native-paper";

type topBarProps = {
  query?: string;
  setQuery?: (newQuery: string) => void;
  title?: string;
};

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function TopBar({
  query = "",
  setQuery = () => {},
  title = "Homepage",
}: topBarProps) {
  //Search props
  const [hideSearchBar, setHideSearchBar] = useState(true);
  //Navigation
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      {navigation.canGoBack() || !hideSearchBar ? (
        <Appbar.BackAction
          onPress={() => {
            setQuery("");
            navigation.canGoBack()
              ? navigation.goBack()
              : setHideSearchBar(true);
          }}
        />
      ) : (
        <Appbar.Action icon={MORE_ICON} />
      )}
      {hideSearchBar ? (
        <>
          <Appbar.Content title={title} />
          <Appbar.Action
            icon="magnify"
            onPress={() => {
              setHideSearchBar(false);
            }}
          />
        </>
      ) : (
        <Searchbar
          value={query}
          onChangeText={setQuery}
          placeholder="Search"
          style={{ width: "85%" }}
        />
      )}
    </Appbar.Header>
  );
}
