import React, { useRef, useEffect, useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";

import {
  appIcons,
  appImages,
  colors,
  heightPixel,
  routes,
  widthPixel,
} from "../../../services";
import { Button, DateInput, GlobalScroll, MyInput } from "../../../components";
import { styles } from "./styles";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";

const EditProfile = ({ navigation }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.user.themeColor);
  const [itemTitle, setItemTitle] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(new Date());
  const [dateModal, setDateModal] = useState();
  const [image, setImage] = useState(appImages.profileImage);
  const [drop, setDrop] = useState(false);
  const [dropOne, setDropOne] = useState(false);
  const [life, setLife] = useState("");
  const [lifeStyle, setLifeStyle] = useState([{ id: 1, title: "Very Active" }]);
  const [gender, setGender] = useState("");
  const [selGender, setSelGender] = useState([
    { id: 1, title: "Male" },
    { id: 2, title: "Female" },
    { id: 3, title: "Other" },
  ]);

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });
    statusBar.current?.lightContent();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets?.[0]);
    }
  };

  return (
    <GlobalScroll
      status={true}
      ref={statusBar}
      navigation={navigation}
      isBack={true}
      headerTitle={"Add Member"}
      description={"mysuprise is an app that can be used by everyone. "}
      globalStyle={{
        paddingTop: heightPixel(1),
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ alignSelf: "center" }}>
          <Image
            style={styles.profileIMage}
            source={image?.uri ? { uri: image?.uri } : image}
          />
          <Pressable
            onPress={() => pickImage()}
            style={styles.positionAbsolute}
          >
            <Image source={appIcons.editIcon} style={styles.editIcon} />
          </Pressable>
        </View>
        <MyInput
          value={lastName}
          setValue={setLastName}
          placeHolder={"Enter your last name"}
          title={"Full Name"}
        />
        <DateInput
          title={"Date Of Birth"}
          value={date}
          date={new Date()}
          setValue={setDate}
          open={dateModal}
          setOpen={setDateModal}
        />
        <View>
          <Pressable
            onPress={() => setDrop(!drop)}
            style={{ ...styles.inputView, borderColor: colors.white }}
          >
            <Text style={{ ...styles.inputTitle }}>Life Style</Text>
            <View style={styles.rowCenter}>
              <Text
                style={{
                  ...styles.title,
                  color: life ? colors.white : colors.themeSecondary,
                }}
              >
                {life ? life?.title : "Add life style"}
              </Text>
              <Image source={appIcons.chevronDown} style={styles.iconStyle} />
            </View>
          </Pressable>
          {drop && (
            <View style={styles.dropView}>
              <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={styles.dropScroll}
                showsVerticalScrollIndicator={false}
              >
                {lifeStyle.map((item, index) => (
                  <View key={index} style={{ marginBottom: heightPixel(6) }}>
                    <Text
                      onPress={() => [setLife(item), setDrop(false)]}
                      style={{
                        ...styles.title,
                        marginBottom: heightPixel(0),
                        height: "auto",
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </View>
      <View>
        <Pressable
          onPress={() => setDropOne(!dropOne)}
          style={{ ...styles.inputView, borderColor: colors.white }}
        >
          <Text style={{ ...styles.inputTitle }}>Gender</Text>
          <View style={styles.rowCenter}>
            <Text
              style={{
                ...styles.title,
                color: gender ? colors.white : colors.themeSecondary,
              }}
            >
              {gender ? gender?.title : "Select gender"}
            </Text>
            <Image source={appIcons.chevronDown} style={styles.iconStyle} />
          </View>
        </Pressable>
        {dropOne && (
          <View style={styles.dropView}>
            <ScrollView
              nestedScrollEnabled={true}
              contentContainerStyle={styles.dropScroll}
              showsVerticalScrollIndicator={false}
            >
              {selGender.map((item, index) => (
                <View key={index} style={{ marginBottom: heightPixel(6) }}>
                  <Text
                    onPress={() => [setLife(item), setDropOne(false)]}
                    style={{
                      ...styles.title,
                      marginBottom: heightPixel(0),
                      height: "auto",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
      <View style={{ marginTop: heightPixel(50) }}>
        <Button
          onPress={() => navigation.goBack()}
          themeColor={colors.white}
          style={{ color: theme }}
          containerStyle={{ borderWidth: widthPixel(1), borderColor: theme }}
          marginBottom={heightPixel(15)}
          children={"Sync Watch"}
        />
        <Button
          onPress={() => navigation.goBack()}
          marginBottom={heightPixel(1)}
          children={"Update Settings"}
        />
      </View>
    </GlobalScroll>
  );
};

export default EditProfile;
