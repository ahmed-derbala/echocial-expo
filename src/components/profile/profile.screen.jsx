
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View } from 'react-native';
import Header from '../header/header';
import Card from "../cards/card"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimelineScreen from '../timeline/timeline.screen';
import config from '../../config/config';

export const ProfileScreen=() =>{
    return (
      <View style={config.styles.containers.default}>
        <Text>Settings screen</Text>
      </View>
    );
  }


