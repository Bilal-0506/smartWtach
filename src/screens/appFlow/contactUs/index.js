import React, { useRef, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { appIcons, colors, heightPixel, widthPixel } from "../../../services";
import { GlobalScroll } from "../../../components";
import { styles } from "./styles";

const ContactUs = ({ navigation, route }) => {
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
      headerTitle={"Contact Us"}
      globalStyle={{
        paddingTop: heightPixel(1),
      }}
    >
      <View>
        <Text style={styles.text}>
          We're here to assist you! If you have any questions, concerns, or need
          further assistance, please don't hesitate to reach out to us. Our
          dedicated support team is ready to help and provide the guidance you
          need. Whether you have inquiries about our services, suggestions for
          improvement, or require technical support, we're just a message away.
          Your satisfaction is our priority, and we are committed to ensuring a
          seamless experience for you on My Surprise. We appreciate your
          feedback and value the opportunity to assist you. Contact us today,
          and let us help make your My Surprise journey a success!"
        </Text>
      </View>
      <View style={styles.row}>
        <Image
          source={appIcons.messageIcon}
          style={styles.icon}
        />
        <View>
          <Text style={styles.title}>Chat to us</Text>
          <Text style={styles.subtitle}>Our friendly team is here to help.</Text>
          <Text style={styles.des}>help@mysurprise.app</Text>
        </View>
      </View>
    </GlobalScroll>
  );
};

export default ContactUs;
