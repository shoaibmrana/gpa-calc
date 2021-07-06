import CoursesPage from "./screens/CoursesPage/CoursesPage"
import MetricsPage from "./screens/MetricsPage/MetricsPage"

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    
    <CoursesPage/>

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
