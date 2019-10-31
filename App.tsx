import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./routes";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="red" />
      <Navigation />
    </SafeAreaProvider>
  );
};
export default App;
