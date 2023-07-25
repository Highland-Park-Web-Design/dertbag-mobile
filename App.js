import SignIn from './screens/signin.screen';
import SignUp from './screens/signup.screen';
import Splash from './screens/splash.screen';
import Product from './screens/product.screen';
import ResetPassword from './screens/reset.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

function Bag() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Checkout</Text>
    </View>
  );
}

function Recreation() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Recreation</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="For You"
        component={Product}
        options={{
          tabBarLabel: 'For You',
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
