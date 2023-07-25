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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="For You"
        component={Product}
        options={{
          tabBarLabel: 'For You',
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('./assets/images/product-active.png')} />
            ) : (
              <Image source={require('./assets/images/product-inactive.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          headerShown: false,
          tabBarLabel: 'Bag',
          tabBarActiveTintColor: 'black',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={require('./assets/images/bag-active.png')} />
            ) : (
              <Image source={require('./assets/images/bag-inactive.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Recreation"
        component={Recreation}
        options={{
          headerShown: false,
          tabBarLabel: 'Recreation',
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
        name="Profile"
        component={Settings}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: 'black',
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
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Home', headerShown: false}}
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
