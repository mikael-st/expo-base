import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditItemPage } from '../screens/EditItemPage/EditItemPage';
import { OrderPage } from '../screens/OrderPage';
import { SelectDeliveryLocal } from '../screens/SelectDeliveryLocal';
import { createStaticNavigation } from '@react-navigation/native';
import { MakingOrder } from '../screens/MakingOrder';

const Stack = createNativeStackNavigator({
  screenOptions:{
    headerShown: false
  },
  initialRouteName: 'EditItemPage',
  screens: {
    EditItemPage: EditItemPage,
    MakingOrder: MakingOrder,
    OrderPage: OrderPage,
    SelectDeliveryLocal: SelectDeliveryLocal,
  }
});

const Navigator = createStaticNavigation(Stack);

export function Routes(){
  return (
    <Navigator />
  );
}