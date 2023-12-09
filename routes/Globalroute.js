import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UserContext} from '../context/AuthContext';
import Mainroute from './Mainroute';
import Authroute from './Authroute';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/signin.screen';
import SignUp from '../screens/signup.screen';
import ResetPassword from '../screens/reset.screen';
import NewPassword from '../screens/newPassword';
import OtpValidation from '../screens/otpValidation';
const Stack = createNativeStackNavigator();

function GlobalRoute() {
  const {state, dispatch} = useContext(UserContext);
  return (
    <NavigationContainer>
      <>
        {state.isLoggedIn === true && state.isRegisterd === true ? (
          <Mainroute />
        ) : state.isLoggedIn === true && state.isRegisterd === false ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={Mainroute} />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: 'Sign In', headerShown: false}}
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
              name="NewPassword"
              component={NewPassword}
              options={{title: 'Reset Password', headerShown: false}}
            />
            <Stack.Screen
              name="OtpValidation"
              component={OtpValidation}
              options={{title: 'Reset Password', headerShown: false}}
            />
          </Stack.Navigator>
        ) : state.isLoggedIn === false && state.isRegisterd === false ? (
          <Authroute />
        ) : null}
      </>
    </NavigationContainer>
  );
}

export default GlobalRoute;
