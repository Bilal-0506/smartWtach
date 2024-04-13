import React, { useRef, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { colors, heightPixel } from "../../../services";
import { GlobalScroll } from "../../../components";
import { styles } from "./styles";

const Content = ({ navigation, route }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.user.themeColor);

  useEffect(() => {
    statusBar.current?.darkContent();
  }, []);

  return (
    <GlobalScroll
      ref={statusBar}
      navigation={navigation}
      isBack={true}
      headerTitle={route?.params?.title}
      globalStyle={{
        paddingTop: heightPixel(1),
      }}
    >
      <View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pecenas pulvinar bibendum magna Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna
          magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas pulvinar bibendum magna
          {"\n"}
          {"\n"}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pecenas pulvinar bibendum magna Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna
          magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas pulvinar bibendum magna
          {"\n"}
          {"\n"}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pecenas pulvinar bibendum magna Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna
          magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas pulvinar bibendum magna
          {"\n"}
          {"\n"}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pulvinar bibendum magna magna Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pecenas pulvinar bibendum magna Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna
          magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas pulvinar bibendum magna
        </Text>
      </View>
    </GlobalScroll>
  );
};

export default Content;
