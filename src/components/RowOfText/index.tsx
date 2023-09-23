import { Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import React from "react";

type RowOfTextProps = {
  name: string;
  value: string | number;
};

const RowOfText = ({ name, value }: RowOfTextProps) => {
  return (
    <View style={style.divider}>
      <Text variant="bodyLarge">{name}</Text>
      <Text variant="bodyLarge">{value}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  divider: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RowOfText;
