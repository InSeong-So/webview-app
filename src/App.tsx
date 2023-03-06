import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
import HomeStackScreens from '@/stacks/HomeStack';
import DealStackScreens from '@/stacks/DealStack';
import SettingsStackScreens from '@/stacks/SettingsStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer independent>
          <Tab.Navigator
            initialRouteName="HomeStackScreens"
            screenOptions={{
              ...TransitionPresets.SlideFromRightIOS,
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="HomeStackScreens"
              component={HomeStackScreens}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="DealStackScreens"
              component={DealStackScreens}
              options={{
                tabBarLabel: 'Deal',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="handshake-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="SettingsStackScreens"
              component={SettingsStackScreens}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default App;
