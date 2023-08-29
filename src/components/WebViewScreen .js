import React from "react";
import { View, StyleSheet } from "react-native";
import WebView from "react-native-webview"; // Import WebView from the correct package

const WebViewApp = () => {

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://petai.netlify.app/" }} // Replace with your desired URL
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
