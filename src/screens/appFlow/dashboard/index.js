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

import { Global, UserCard } from "../../../components";
import { styles } from "./styles";
import {
  appIcons,
  appImages,
  heightPixel,
  routes,
  widthPixel,
} from "../../../services";

const Dashboard = ({ navigation }) => {
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
      globalStyle={{ paddingBottom: heightPixel(1) }}
    >
      <View style={styles.row}>
        <Image source={appImages.profileImage} style={styles.profile} />
        <View>
          <View style={[styles.row, styles.mb5]}>
            <Text style={styles.subTitle}>Welcome Back!</Text>
            <Image source={appIcons.handIcon} style={styles.handIcon} />
          </View>
          <Text style={styles.title}>Andrew Ainsley</Text>
        </View>
      </View>
      <View style={styles.view}>
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
              <Text
                style={{ ...styles.cardText, marginBottom: heightPixel(1) }}
              >
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
            <Text style={styles.heading}>My Activity list</Text>
            <Pressable>
              <Text
                onPress={() =>
                  navigation.navigate(routes.activiyListing, {
                    title: "Activity list",
                  })
                }
                style={{ ...styles.subHeading, color: theme }}
              >
                See All
              </Text>
            </Pressable>
          </View>
          <FlatList
            nestedScrollEnabled={true}
            scrollEnabled={false}
            contentContainerStyle={styles.flatView}
            data={[1, 2, 4, 5]}
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
        </ScrollView>
      </View>
    </Global>
  );
};

export default Dashboard;
