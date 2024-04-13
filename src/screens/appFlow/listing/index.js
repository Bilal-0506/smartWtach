import React, { useRef, useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { Global, UserCard } from "../../../components";
import { styles } from "./styles";
import { appIcons, heightPixel, routes, widthPixel } from "../../../services";

const Listing = ({ navigation, route }) => {
  const statusBar = useRef(null);
  const [search, setSearch] = useState("");
  const theme = useSelector((state) => state.user.themeColor);

  useEffect(() => {
    statusBar.current?.lightContent();
  }, []);

  return (
    <Global
      status={true}
      ref={statusBar}
      navigation={navigation}
      header={true}
      headerTitle={route?.params?.title}
      isBack={true}
      globalStyle={{ paddingVertical: heightPixel(1) }}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: heightPixel(2),
            paddingHorizontal: widthPixel(2),
          }}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item, index }) => (
            <UserCard
              title={"Tradmil"}
              buttonTitle={"View Results"}
              button={"Delete Activity"}
              onPressOne={() => navigation.navigate(routes?.taskDetail)}
              date={"02 Feb"}
              mutual={140}
              index={index}
            />
          )}
        />
      </View>
    </Global>
  );
};

export default Listing;
