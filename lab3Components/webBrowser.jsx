import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default function WebB() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.google.com');
    setResult(result);
  };
  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      {/* <Text>{result && JSON.stringify(result)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
