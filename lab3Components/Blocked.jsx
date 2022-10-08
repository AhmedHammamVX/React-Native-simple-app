import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { usePreventScreenCapture } from 'expo-screen-capture';

export default function Blocked() {
  usePreventScreenCapture();
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>capturing disabled</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
  });