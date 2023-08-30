import React from "react";
import { View, StyleSheet } from "react-native";
import WebView from "react-native-webview"; // Import WebView from the correct package
import { APP_WEB_URL } from "../config/env/env";

const WebViewApp = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: APP_WEB_URL }} // Replace with your desired URL
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebViewApp;
