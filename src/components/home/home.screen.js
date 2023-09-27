import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View } from 'react-native';
import Header from '../header/header';
import Card from "../cards/card"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TimelineScreen from '../timeline/timeline.screen';
import {ProfileStackScreen,ProfileScreen,DetailsScreen} from "../profile/profile.screen"
import { CreateReputationScreen } from '../reputation/create-reputation.screen';



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


const HomeStack = createStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="TimelineNav" component={TimelineScreenNavigator}
      options={{
      headerShown: false, // change this to `false`
    }} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Timeline" component={HomeStackScreen} />
        <Tab.Screen name="Create reputation" component={CreateReputationScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
/*
const TimelineScreen=()=>{
    return (
        <View style={styles.container}>
            <Header/>
          <Text>home screen</Text>
          <Card/>
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      //justifyContent: 'center',
    },
  });
*/

  //export default TimelineScreen