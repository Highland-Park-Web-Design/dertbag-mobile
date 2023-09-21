import 'react-native-gesture-handler';
import SignIn from './screens/signin.screen';
import SignUp from './screens/signup.screen';
import Splash from './screens/splash.screen';
import Product from './screens/product.screen';
import FlashMessage from 'react-native-flash-message';
// import Bag from './screens/checkoutBag.screen';
// import Recreation from './screens/blogRecreation.screen';
import Settings from './screens/profileSettings.screen';
import ResetPassword from './screens/reset.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Setting from './screens/profileSettingsSetting.screen';
// import Orders from './screens/profileSettingsOrders.screen';
// import Stores from './screens/profileSettingsStores.screen';
// import Help from './screens/profileSettingsHelp.screen';
// import Feedback from './screens/profileSettingsFeedback.screen';
// import Legal from './screens/profileSettingsLegal.screen';
// import About from './screens/profileSettingsAbout.screen';
// import Profile from './screens/profileSettingsProfile.screen';
import ProductDetails from './screens/Product/productDetails.screen';
import ProductProvider from './context/ProductContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Bag from './screens/CheckOutScreens/Bag';
import DeliveryDetails from './screens/CheckOutScreens/DeliveryDetails';
import StoreDetails from './screens/Store/StoreDetails';
import Checkout from './screens/CheckOutScreens/Checkout';
import Recreation from './screens/Recreation/Recreation';
import RecreationView from './screens/Recreation/RecreationView';
import RecreationProvider from './context/RecreationContext';
import Store from './screens/Store/Store';
import About from './screens/About/About';
import Legal from './screens/LegalScreens/Legal';
import TermsAndCondition from './screens/LegalScreens/TermsAndCondition';
import PrivacyPolicy from './screens/LegalScreens/PrivacyPolicy';
import NewPassword from './screens/newPassword';
import OtpValidation from './screens/otpValidation';
import Feedback from './screens/Feedback/Feedback';
import MainSettings from './screens/Settings/Settings';
import Notification from './screens/Settings/Notification';
import ChangePassword from './screens/Settings/ChangePassword';
import DeleteAccount from './screens/Settings/DeleteAccount';
import Help from './screens/Help/Help';
import Orders from './screens/MyOrders/Orders';
import OrderDetails from './screens/MyOrders/OrderDetails';
import Profile from './screens/Profile/Profile';
import ProfileEdit from './screens/Profile/ProfileEdit';
import Onboarding from './screens/Onboarding';
import Welcome from './screens/Onboarding/Welcome';
import MyTabBar from './components/CustomTab';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductScreens() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
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
          tabBarIcon: (
            <Image source={require('./assets/images/product-active.png')} />
          ),
          inactiveIcon: (
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
          tabBarIcon: (
            <Image source={require('./assets/images/bag-active.png')} />
          ),
          inactiveIcon: (
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
          tabBarIcon: (
            <Image source={require('./assets/images/recreation-active.png')} />
          ),
          inactiveIcon: (
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
          tabBarIcon: (
            <Image source={require('./assets/images/profile-active.png')} />
          ),
          inactiveIcon: (
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
      <BottomSheetModalProvider>
        <ProductProvider>
          <RecreationProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Onboarding"
                  component={Onboarding}
                  options={{title: 'Onboarding', headerShown: false}}
                />
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
                  component={MainSettings}
                  options={{title: 'Setting', headerShown: false}}
                />
                <Stack.Screen
                  name="Notification"
                  component={Notification}
                  options={{title: 'Setting', headerShown: false}}
                />
                <Stack.Screen
                  name="ChangePassword"
                  component={ChangePassword}
                  options={{title: 'Setting', headerShown: false}}
                />
                <Stack.Screen
                  name="DeleteAccount"
                  component={DeleteAccount}
                  options={{title: 'Setting', headerShown: false}}
                />
                <Stack.Screen
                  name="RecreationView"
                  component={RecreationView}
                  options={{title: 'Setting', headerShown: false}}
                />
                <Stack.Screen
                  name="Orders"
                  component={Orders}
                  options={{title: 'Orders', headerShown: false}}
                />
                <Stack.Screen
                  name="OrderDetails"
                  component={OrderDetails}
                  options={{title: 'Orders', headerShown: false}}
                />
                <Stack.Screen
                  name="Stores"
                  component={Store}
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
                  name="TermsAndCondition"
                  component={TermsAndCondition}
                  options={{title: 'TermsAndCondition', headerShown: false}}
                />
                <Stack.Screen
                  name="PrivacyPolicy"
                  component={PrivacyPolicy}
                  options={{title: 'PrivacyPolicy', headerShown: false}}
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
                  name="ProfileEdit"
                  component={ProfileEdit}
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
                  name="NewPassword"
                  component={NewPassword}
                  options={{title: 'Reset Password', headerShown: false}}
                />
                <Stack.Screen
                  name="OtpValidation"
                  component={OtpValidation}
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
            <FlashMessage position="top" />
          </RecreationProvider>
        </ProductProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
