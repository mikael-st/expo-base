import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditItemPage } from '../screens/edit-item-page/EditItemPage';
import { OrderPage } from '../screens/order-page/OrderPage';

const {Navigator, Screen} = createNativeStackNavigator();

export function Routes(){
  return (
    <Navigator 
      screenOptions={{headerShown:false}}
      initialRouteName='order-page'
    >
      <Screen
        name='edit-item-page'
        component={EditItemPage}
      />

      <Screen
        name='order-page'
        component={OrderPage}
      />

    </Navigator>

  );
}