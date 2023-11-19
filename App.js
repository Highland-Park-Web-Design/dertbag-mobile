import 'react-native-gesture-handler';
import {useContext} from 'react';
import Product from './screens/product.screen';
import FlashMessage from 'react-native-flash-message';
import Settings from './screens/profileSettings.screen';
import ResetPassword from './screens/reset.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductDetails from './screens/Product/productDetails.screen';
import ProductProvider from './context/ProductContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Bag from './screens/CheckOutScreens/Bag';
import DeliveryDetails from './screens/CheckOutScreens/DeliveryDetails';
import StoreDetails from './screens/Store/StoreDetails';
import Checkout from './screens/CheckOutScreens/Checkout';
import Recreation from './screens/Recreation/Recreation';
import RecreationProvider from './context/RecreationContext';
import MyTabBar from './components/CustomTab';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import UserProvider, {UserContext} from './context/AuthContext';
import Authroute from './routes/Authroute';
import Mainroute from './routes/Mainroute';
import GlobalRoute from './routes/Globalroute';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <UserProvider>
          <ProductProvider>
            <RecreationProvider>
              {/* <NavigationContainer> */}
              <GlobalRoute />
              {/* <>{state.isLoggedIn ? <Mainroute /> : <Authroute />}</> */}
              {/* </NavigationContainer> */}
              <FlashMessage position="top" />
            </RecreationProvider>
          </ProductProvider>
        </UserProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
