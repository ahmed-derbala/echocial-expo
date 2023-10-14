import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/components/home/home.screen"
import AuthScreen from './src/core/auth/auth.screen';
import TimelineScreen from './src/components/timeline/timeline.screen';
import { getToken } from "./src/core/auth/auth.service"

export default function App() {
  return <HomeScreen />
}


