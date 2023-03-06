import Settings from '@/pages/Settings';
import { createStackNavigator } from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

const SettingsStackScreens = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreens;
