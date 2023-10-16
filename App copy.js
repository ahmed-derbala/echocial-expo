import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/components/home/home.screen"
import AuthScreen from './src/components/auth/auth.screen';
import TimelineScreen from './src/components/timeline/timeline.screen';
import { getToken } from "./src/components/auth/auth.service"
import { ProfileScreen } from './src/components/profile/profile.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { log } from './src/core/log'

const Stack = createNativeStackNavigator();

const getIsSignedIn =  () => {
 // return false
  const token =  getToken()
  console.log({token})
  if (token) {
    log({level:'debug',message:'user is connected'})
    return true
  }
  log({level:'debug',message:'user is NOT connected'})
  return false
};

export default function App ({ navigation }) {
  const isSignedIn = getIsSignedIn();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={AuthScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}



