import SignIn from './screens/signin.screen';
import SignUp from './screens/signup.screen';
import Splash from './screens/splash.screen';
import Product from './screens/product.screen';
import ResetPassword from './screens/reset.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{title: 'Welcome to Dertbag', headerShown: false}}
        /> */}
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Sign In', headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{title: 'Product', headerShown: false}}
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
