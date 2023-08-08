import SignIn from './screens/signin.screen';
import SignUp from './screens/signup.screen';
import Splash from './screens/splash.screen';
import Product from './screens/product.screen';
import Bag from './screens/checkoutBag.screen';
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
          name="Setting"
          component={Setting}
          options={{title: 'Setting', headerShown: false}}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{title: 'Setting', headerShown: false}}
        />
        <Stack.Screen
          name="Stores"
          component={Stores}
          options={{title: 'Setting', headerShown: false}}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{title: 'Setting', headerShown: false}}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{title: 'Setting', headerShown: false}}
        />
        <Stack.Screen
          name="Legal"
          component={Legal}
          options={{title: 'Setting', headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{title: 'Setting', headerShown: false}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
