import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";

import { Global, ReminderCard, Search, UserCard } from "../../../components";
import { styles } from "./styles";
import {
  appIcons,
  appImages,
  colors,
  fontFamily,
  heightPixel,
  routes,
  widthPixel,
} from "../../../services";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const TaskDetail = ({ navigation }) => {
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
      headerTitle={"Activity Detail"}
      isBack={true}
      globalStyle={{ paddingVertical: heightPixel(1) }}
    >
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.row, { justifyContent: "space-between" }]}>
          <Text style={styles.heading}>My Vitals</Text>
        </View>
        <View
          style={{
            marginTop: heightPixel(24),
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <View style={styles.cardStyle}>
            <Image
              source={appIcons.smileIcon}
              style={{
                height: heightPixel(72),
                width: widthPixel(77),
                resizeMode: "contain",
              }}
            />
            <Text style={styles.thirdHeading}>Mood</Text>
          </View>
          <View style={styles.cardStyle}>
            <Text style={styles.cardText}>25bmp</Text>
            <Text style={styles.thirdHeading}>Heart Rate</Text>
          </View>
          <View style={{ ...styles.cardStyle, marginTop: heightPixel(20) }}>
            <Text style={styles.cardText}>GOOD!</Text>
            <Text style={styles.thirdHeading}>Heart Health</Text>
          </View>
          <View style={{ ...styles.cardStyle, marginTop: heightPixel(20) }}>
            <Text style={{ ...styles.cardText, marginBottom: heightPixel(1) }}>
              97 F
            </Text>
            <Text style={styles.thirdHeading}>Body Temperature</Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            { justifyContent: "space-between", marginTop: heightPixel(24) },
          ]}
        >
          <Text style={styles.heading}>Result</Text>
        </View>
        <View style={{ paddingTop: heightPixel(24) }}>
          <ReminderCard />
        </View>
        <View
          style={[
            styles.row,
            { justifyContent: "space-between", marginTop: heightPixel(8) },
          ]}
        >
          <Text style={styles.heading}>Notes</Text>
        </View>
        <View style={{ paddingTop: heightPixel(24) }}>
          <Text
            style={{
              fontFamily: fontFamily.appTextMedium,
              fontSize: responsiveFontSize(2.0),
              color: colors.white,
            }}
          >
            Lorem Ipsum
          </Text>
        </View>
      </ScrollView>
    </Global>
  );
};

export default TaskDetail;
