import React from "react";
import { View, useWindowDimensions } from "react-native";

function CardVertical(props) {
  const { width, height } = useWindowDimensions();
  const windowType =
    width < 500 && height < 1000
      ? "1"
      : width < 1000 && height < 500
      ? "2"
      : width < 1000 && width >= 500 && height < 1400 && height >= 1000
      ? "3"
      : width < 1400 && width >= 1000 && height < 1000 && height >= 500
      ? "4"
      : "else";

  const padding = windowType === 1 ? 12 : windowType === 2 ? 8 : windowType === 3 ? 24 : 18;

  return <View style={[{ flex: 1, padding: padding }, props.style]}>{props.children}</View>;
}

export default CardVertical;
