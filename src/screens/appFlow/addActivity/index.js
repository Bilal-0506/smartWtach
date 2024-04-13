import React, { useRef, useEffect, useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";

import {
  appIcons,
  colors,
  fontFamily,
  heightPixel,
  widthPixel,
} from "../../../services";
import { GlobalScroll, MyInput } from "../../../components";
import { styles } from "./styles";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const AddActivity = ({ navigation }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.user.themeColor);
  const [note, setNote] = useState("");
  const [workoutName, setWorkoutName] = useState("");
  const [drop, setDrop] = useState(false);
  const [workout, setWorkout] = useState("");
  const [types, setTypes] = useState([{ id: 1, title: "Cardio" }]);
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const stopwatchRef = useRef(null);

  useEffect(() => {
    statusBar.current?.lightContent();
  }, []);

  const toggleStopwatch = () => {
    setStopwatchStart(!stopwatchStart);
    setStopwatchReset(false);
  };

  const resetStopwatch = () => {
    setStopwatchStart(false);
    setStopwatchReset(true);
  };

  const getFormattedTime = (time) => {
    // You can perform any additional logic here if needed
    console.log(time);
  };

  const handleTimerComplete = () => {
    alert("custom completion function");
  };

  return (
    <GlobalScroll
      status={true}
      ref={statusBar}
      navigation={navigation}
      isBack={true}
      headerTitle={"Add Activity"}
      globalStyle={{
        paddingTop: heightPixel(1),
        paddingBottom: heightPixel(20),
        justifyContent: "space-between",
      }}
    >
      <View>
        <MyInput
          marginTop={heightPixel(1)}
          value={workoutName}
          setValue={setWorkoutName}
          placeHolder={"Enter your last name"}
          title={"Workout Name"}
        />
        <View>
          <Pressable
            onPress={() => setDrop(!drop)}
            style={{ ...styles.inputView, borderColor: colors.white }}
          >
            <Text style={{ ...styles.inputTitle }}>Workout Type</Text>
            <View style={styles.rowCenter}>
              <Text
                style={{
                  ...styles.title,
                  color: workout ? colors.white : colors.themeSecondary,
                }}
              >
                {workout ? workout?.title : "Add workout type"}
              </Text>
              <Image
                source={appIcons.chevronDown}
                style={{ ...styles.iconStyle }}
              />
            </View>
          </Pressable>
          {drop && (
            <View style={styles.dropView}>
              <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={styles.dropScroll}
                showsVerticalScrollIndicator={false}
              >
                {types.map((item, index) => (
                  <View key={index} style={{ marginBottom: heightPixel(6) }}>
                    <Text
                      onPress={() => [setWorkout(item), setDrop(false)]}
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
        <MyInput
          value={note}
          setValue={setNote}
          placeHolder={"Description"}
          title={"Notes"}
          multiline={true}
          height={heightPixel(60)}
        />
      </View>
      <View style={{ marginVertical: heightPixel(30), alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          {stopwatchStart && (
            <Text style={{ ...styles.buttonHeading, color: colors.white }}>
              Workout Started
            </Text>
          )}
          <View style={styles.buttonView}>
            <Pressable
              onPress={() =>
                stopwatchStart
                  ? [toggleStopwatch(), resetStopwatch()]
                  : toggleStopwatch()
              }
              style={styles.buttonInnerView}
            >
              {stopwatchStart ? (
                <Stopwatch
                  laps
                  start={stopwatchStart}
                  reset={stopwatchReset}
                  options={styles.options}
                  getTime={getFormattedTime}
                  ref={stopwatchRef}
                />
              ) : (
                <Text style={styles.buttonText}>GO!</Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </GlobalScroll>
  );
};

export default AddActivity;
