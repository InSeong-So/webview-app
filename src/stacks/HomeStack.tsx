import { createStackNavigator } from '@react-navigation/stack';
//
import { Login, Signup, Home, MyPage, Deal, LeadAngel, Portfolio, Events } from '@/pages';
import { transitionSpec } from '@/constants';

const HomeStack = createStackNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen options={{ transitionSpec }} name="Home" component={Home} />
      <HomeStack.Screen options={{ transitionSpec }} name="Login" component={Login} />
      <HomeStack.Screen options={{ transitionSpec }} name="Signup" component={Signup} />
      <HomeStack.Screen options={{ transitionSpec }} name="MyPage" component={MyPage} />
      <HomeStack.Screen options={{ transitionSpec }} name="Deal" component={Deal} />
      <HomeStack.Screen options={{ transitionSpec }} name="LeadAngel" component={LeadAngel} />
      <HomeStack.Screen options={{ transitionSpec }} name="Portfolio" component={Portfolio} />
      <HomeStack.Screen options={{ transitionSpec }} name="Events" component={Events} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
