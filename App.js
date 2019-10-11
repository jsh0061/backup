import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlatListTest from "./src/components/FlatListTest";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
