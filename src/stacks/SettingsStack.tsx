import Settings from '@/pages/Settings';
import { createStackNavigator } from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
