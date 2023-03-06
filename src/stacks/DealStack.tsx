import { Deal, LeadAngel, Portfolio } from '@/pages';
import { createStackNavigator } from '@react-navigation/stack';

const DealStack = createStackNavigator();

const DealStackScreens = () => {
  return (
    <DealStack.Navigator>
      <DealStack.Screen name="Deal" component={Deal} />
      <DealStack.Screen name="LeadAngel" component={LeadAngel} />
      <DealStack.Screen name="Portfolio" component={Portfolio} />
    </DealStack.Navigator>
  );
};

export default DealStackScreens;
