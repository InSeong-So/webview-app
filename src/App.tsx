import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, ViewStyle } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//
import HomeStackScreens from '@/stacks/HomeStack';
import SettingsStackScreens from '@/stacks/SettingsStack';

const Tab = createBottomTabNavigator();

const styles = { flex: 1 } as ViewStyle;

const App = () => {
  return (
    <GestureHandlerRootView style={styles}>
      <SafeAreaView style={styles2.container}>
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

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;
