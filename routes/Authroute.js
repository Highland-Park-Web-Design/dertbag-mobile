import {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import Welcome from '../screens/Onboarding/Welcome';
import SignIn from '../screens/signin.screen';
import SignUp from '../screens/signup.screen';
import ResetPassword from '../screens/reset.screen';
import NewPassword from '../screens/newPassword';
import OtpValidation from '../screens/otpValidation';
import {getData} from '../store';
const Stack = createNativeStackNavigator();

export default function Authroute() {
  const [openedState, setOpenedState] = useState(false);
  useEffect(() => {
    async function getOpenedState() {
      const opened = await getData('AppOpened');
      setOpenedState(opened);
    }
    getOpenedState();
  }, []);
  return (
    <Stack.Navigator>
      {!openedState && (
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{title: 'Onboarding', headerShown: false}}
        />
      )}

      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{title: 'Welcome', headerShown: false}}
      />
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
  );
}
