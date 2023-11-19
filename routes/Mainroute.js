import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabBar from '../components/CustomTab';
import {Image} from 'react-native';
import Product from '../screens/product.screen';
import Bag from '../screens/CheckOutScreens/Bag';
import Recreation from '../screens/Recreation/Recreation';
import MainSettings from '../screens/Settings/Settings';
import ProductDetails from '../screens/Product/productDetails.screen';
import Notification from '../screens/Settings/Notification';
import ChangePassword from '../screens/Settings/ChangePassword';
import DeleteAccount from '../screens/Settings/DeleteAccount';
import RecreationView from '../screens/Recreation/RecreationView';
import Orders from '../screens/MyOrders/Orders';
import OrderDetails from '../screens/MyOrders/OrderDetails';
import Store from '../screens/Store/Store';
import Help from '../screens/Help/Help';
import Feedback from '../screens/Feedback/Feedback';
import Legal from '../screens/LegalScreens/Legal';
import TermsAndCondition from '../screens/LegalScreens/TermsAndCondition';
import PrivacyPolicy from '../screens/LegalScreens/PrivacyPolicy';
import About from '../screens/About/About';
import Profile from '../screens/Profile/Profile';
import ProfileEdit from '../screens/Profile/ProfileEdit';
import StoreDetails from '../screens/Store/StoreDetails';
import DeliveryDetails from '../screens/CheckOutScreens/DeliveryDetails';
import Checkout from '../screens/CheckOutScreens/Checkout';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screens/profileSettings.screen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ProductScreens() {
  //   const {state, dispatch} = useContext(UserContext);
  //   console.log(state);
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
            <Image source={require('../assets/images/product-active.png')} />
          ),
          inactiveIcon: (
            <Image source={require('../assets/images/product-inactive.png')} />
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
            <Image source={require('../assets/images/bag-active.png')} />
          ),
          inactiveIcon: (
            <Image source={require('../assets/images/bag-inactive.png')} />
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
            <Image source={require('../assets/images/recreation-active.png')} />
          ),
          inactiveIcon: (
            <Image
              source={require('../assets/images/recreation-inactive.png')}
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
            <Image source={require('../assets/images/profile-active.png')} />
          ),
          inactiveIcon: (
            <Image source={require('../assets/images/profile-inactive.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function Mainroute() {
  return (
    <Stack.Navigator>
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
  );
}
