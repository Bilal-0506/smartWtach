import React, { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { OtpInput } from "react-native-otp-entry";
import CountDownTimer from "react-native-countdown-timer-hooks";

import { RedSnackbar, heightPixel } from "../../../services";
import { Global, Button } from "../../../components";
import { styles } from "./styles";

const DeleteVerfication = ({ navigation, route }) => {
  const statusBar = useRef(null);
  const theme = useSelector((state) => state.user.themeColor);
  const dispatch = useDispatch();
  const screen = route.params?.screen;
  const timer = useRef();
  const [otp, setOtp] = useState("");
  const [timerEnd, setTimerEnd] = useState(false);

  useEffect(() => {
    statusBar.current?.lightContent();
  }, []);

  const check = () => {
    if (otp == "") {
      RedSnackbar("OTP required");
    } else if (otp.length < 4) {
      RedSnackbar("Invalid otp");
    } else {
    }
  };

  const timerCallbackFunc = (timerFlag) => {
    setTimerEnd(timerFlag);
  };

  const resetTimer = () => {
    setTimerEnd(false);
    timer.current?.resetTimer();
  };

  return (
    <Global
      header={true}
      status={true}
      ref={statusBar}
      navigation={navigation}
      isBack={true}
      headerTitle={"Delete My Account"}
      description={
        "We have sent you a One Time Password (OTP) via Email to your device. Please enter the verification code below."
      }
      globalStyle={{
        justifyContent: "space-between",
      }}
    >
      <View style={{ marginTop: heightPixel(60) }}>
        <OtpInput
          numberOfDigits={4}
          focusColor={theme}
          focusStickBlinkingDuration={500}
          onTextChange={(text) => setOtp(text)}
          // onFilled={(text) => console.log(`OTP is ${text}`)}
          theme={{
            containerStyle: { borderWidth: 0, borderColor: "transparent" },
            inputsContainerStyle: {
              borderWidth: 0,
              borderColor: "transparent",
            },
            pinCodeContainerStyle: styles.underlineStyleBase,
            pinCodeTextStyle: styles.otpInputText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: [
              styles.underlineStyleBase,
              { borderColor: theme },
            ],
          }}
          autoFocus={false}
        />
        <TouchableOpacity
          style={styles.timerStyle}
          disabled={!timerEnd}
          onPress={() => resetTimer()}
        >
          <Text style={styles.resend}>Resend code in - </Text>
          {!timerEnd ? (
            <CountDownTimer
              ref={timer}
              timestamp={60}
              timerCallback={timerCallbackFunc}
              textStyle={{ ...styles.timerText, color: theme }}
            />
          ) : (
            <Text
              style={[
                styles.resend,
                {
                  color: theme,
                  textDecorationLine: "underline",
                  textDecorationColor: theme,
                },
              ]}
            >
              {" "}
              Send Again
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <Button
        marginBottom={heightPixel(1)}
        onPress={() => {
          onPressDelete();
        }}
        children={"Delete My Account"}
      />
    </Global>
  );
};

export default DeleteVerfication;
