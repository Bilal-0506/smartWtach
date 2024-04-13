import React, { useRef, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { colors, heightPixel } from "../../../services";
import { Button, GlobalScroll } from "../../../components";
import { styles } from "./styles";
import { TextInput } from "react-native";

const Feedback = ({ navigation, route }) => {
  const statusBar = useRef(null);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.user.themeColor);
  const [feedback, setfeedback] = useState("");

  useEffect(() => {
    statusBar.current?.lightContent();
  }, []);

  return (
    <GlobalScroll
      ref={statusBar}
      navigation={navigation}
      isBack={true}
      headerTitle={"Feedback"}
      globalStyle={{
        paddingTop: heightPixel(1),
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={styles.text}>
          At My Surprise, we strive to provide the best experience possible for
          our users. Your feedback plays a crucial role in helping us improve
          and enhance our services. We welcome your thoughts, suggestions, and
          comments about your experience with My Surprise and the service
          professionals you have connected with. Your feedback allows us to
          continuously refine our platform, ensuring that we meet and exceed
          your expectations. Thank you for taking the time to share your
          valuable insights with us. Together, we can make My Surprise even
          better!
        </Text>
        <TextInput
          multiline={true}
          verticalAlign="top"
          textAlignVertical="top"
          style={styles.input}
          placeholder="Write your feedback"
          placeholderTextColor={colors.themeSecondary}
          value={feedback}
          onChangeText={setfeedback}
        />
      </View>
      <View style={{ marginTop: heightPixel(30) }}>
        <Button
          onPress={() => onPressSave()}
          marginBottom={heightPixel(1)}
          children={"Send Feedback"}
        />
      </View>
    </GlobalScroll>
  );
};

export default Feedback;
