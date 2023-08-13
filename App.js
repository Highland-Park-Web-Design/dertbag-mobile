import 'react-native-gesture-handler';
import SignIn from './screens/signin.screen';
import SignUp from './screens/signup.screen';
import Splash from './screens/splash.screen';
import Product from './screens/product.screen';
// import Bag from './screens/checkoutBag.screen';
import Recreation from './screens/blogRecreation.screen';
import Settings from './screens/profileSettings.screen';
import ResetPassword from './screens/reset.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Setting from './screens/profileSettingsSetting.screen';
import Orders from './screens/profileSettingsOrders.screen';
import Stores from './screens/profileSettingsStores.screen';
import Help from './screens/profileSettingsHelp.screen';
import Feedback from './screens/profileSettingsFeedback.screen';
import Legal from './screens/profileSettingsLegal.screen';
import About from './screens/profileSettingsAbout.screen';
import Profile from './screens/profileSettingsProfile.screen';
import ProductDetails from './screens/Product/productDetails.screen';
import ProductProvider from './context/ProductContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Bag from './screens/CheckOutScreens/Bag';
import DeliveryDetails from './screens/CheckOutScreens/DeliveryDetails';
import StoreDetails from './screens/CheckOutScreens/StoreDetails';
import Checkout from './screens/CheckOutScreens/Checkout';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FOR YOU"
        component={Product}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          labelStyle: {
            fontSize: 16,
            fontFamily: 'Helvetica',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('./assets/images/product-active.png')} />
            ) : (
              <Image source={require('./assets/images/product-inactive.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="BAG"
        component={Bag}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          labelStyle: {
            fontSize: 16,
            fontFamily: 'Helvetica',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('./assets/images/bag-active.png')} />
            ) : (
              <Image source={require('./assets/images/bag-inactive.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="RECREATION"
        component={Recreation}
        options={{
          headerShown: false,
          labelStyle: {
            fontSize: 16,
            fontFamily: 'Helvetica',
          },
          // tabBarLabel: 'Recreation',
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('./assets/images/recreation-active.png')}
              />
            ) : (
              <Image
                source={require('./assets/images/recreation-inactive.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Settings}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          labelStyle: {
            fontSize: 16,
            fontFamily: 'Helvetica',
          },
          activeTintColor: '#D09900',
          itemStyle: {
            borderRadius: 0,
            marginVertical: 0,
            borderBottomWidth: 10,
            borderBottomColor: '#D09900',
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('./assets/images/profile-active.png')} />
            ) : (
              <Image source={require('./assets/images/profile-inactive.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ProductProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: 'Sign In', headerShown: false}}
            />
            <Stack.Screen
              name="Product"
              component={ProductScreens}
              options={{title: 'Home', headerShown: false}}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{title: 'ProductDetails', headerShown: false}}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{title: 'Setting', headerShown: false}}
            />
            <Stack.Screen
              name="Orders"
              component={Orders}
              options={{title: 'Orders', headerShown: false}}
            />
            <Stack.Screen
              name="Stores"
              component={Stores}
              options={{title: 'Stores', headerShown: false}}
            />
            <Stack.Screen
              name="Help"
              component={Help}
              options={{title: 'Help', headerShown: false}}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={{title: 'Feedback', headerShown: false}}
            />
            <Stack.Screen
              name="Legal"
              component={Legal}
              options={{title: 'Legal', headerShown: false}}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{title: 'About', headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{title: 'Profile', headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{title: 'Sign Up', headerShown: false}}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{title: 'Reset Password', headerShown: false}}
            />
            <Stack.Screen
              name="DeliveryDetails"
              component={DeliveryDetails}
              options={{title: 'Delivery Details', headerShown: false}}
            />
            <Stack.Screen
              name="StoreDetails"
              component={StoreDetails}
              options={{title: 'Delivery Details', headerShown: false}}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{title: 'Delivery Details', headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductProvider>
    </GestureHandlerRootView>
  );
};

export default App;
