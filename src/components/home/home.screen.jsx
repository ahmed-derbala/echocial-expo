import { StatusBar } from "expo-status-bar"
import { StyleSheet, Button, Text, View, useColorScheme } from "react-native"
import Header from "../header/header"
import Card from "../cards/card"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TimelineScreen from "../timeline/timeline.screen"
import { ProfileScreen } from "../profile/profile.screen"
import { CreateReputationScreen } from "../reputation/create-reputation.screen"
import config from "../../config/config"
import { SettingsScreen,DetailsScreen } from "../settings/settings.screen"

function TimelineScreenNavigator({ navigation }) {
  /* return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );*/
  return TimelineScreen()
}

const HomeStack = createStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TimelineNav"
        component={TimelineScreenNavigator}
        options={{
          headerShown: false, // change this to `false`
        }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer theme={colorScheme === 'light' ? config.themes.light : config.themes.dark}>
      <Tab.Navigator>
        <Tab.Screen name="Timeline" component={HomeStackScreen} />
        <Tab.Screen
          name="Create reputation"
          component={CreateReputationScreen}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


