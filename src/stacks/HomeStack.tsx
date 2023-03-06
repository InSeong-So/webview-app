import { createStackNavigator } from '@react-navigation/stack';
//
import { Login, Signup, Home, MyPage, Events } from '@/pages';
import { transitionSpec } from '@/constants';

const HomeStack = createStackNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator screenOptions={{ transitionSpec }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Signup" component={Signup} />
      <HomeStack.Screen name="MyPage" component={MyPage} />
      <HomeStack.Screen name="Events" component={Events} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
