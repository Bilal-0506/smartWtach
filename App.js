import React, { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import { LogBox, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

import { MainNavigator } from "./src/services/navigation";
import { store } from "./src/redux/store";
import { colors } from "./src/services";
const STYLES = ["dark-content", "light-content"];
SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  return Font.loadAsync({
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("./src/assets/fonts/Montserrat-ExtraBold.ttf"),
    "Montserrat-Italic": require("./src/assets/fonts/Montserrat-Italic.ttf"),
    "Montserrat-Light": require("./src/assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Medium": require("./src/assets/fonts/Montserrat-Medium.ttf"),
  });
};

const App = () => {
  let persistor = persistStore(store);
  const [appIsReady, setAppIsReady] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);

  useEffect(() => {
    async function prepare() {
      try {
        await fetchFonts();
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View
          style={{ flex: 1, backgroundColor: colors.black }}
          onLayout={onLayoutRootView}
        >
          <StatusBar
            animated={true}
            backgroundColor={"transparent"}
            barStyle={statusBarStyle}
            translucent
          />
          <MainNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
