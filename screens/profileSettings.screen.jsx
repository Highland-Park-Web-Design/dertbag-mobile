import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import ChevronIcon from '../components/ChevronIcon';
import ProfileCard from '../components/ProfileCard';
import {getData, removeMultipleData, storeData} from '../store';
import {GetUser, GetUserDetails} from '../api';
import {useIsFocused} from '@react-navigation/native';
import {UserContext} from '../context/AuthContext';
const menuOptions = [
  {
    title: 'SETTINGS',
    link: 'Setting',
    imageSource: require('../assets/images/settings-icon.png'),
  },
  {
    title: 'MY ORDERS',
    link: 'Orders',
    imageSource: require('../assets/images/orders-icon.png'),
  },
  {
    title: 'STORES',
    link: 'Stores',
    imageSource: require('../assets/images/stores-icon.png'),
  },
  {
    title: 'GET HELP',
    link: 'Help',
    imageSource: require('../assets/images/help-icon.png'),
  },
  {
    title: 'SEND US FEEDBACK',
    link: 'Feedback',
    imageSource: require('../assets/images/feedback-icon.png'),
  },
  {
    title: 'LEGAL INFORMATION',
    link: 'Legal',
    imageSource: require('../assets/images/legal-icon.png'),
  },
  {
    title: 'ABOUT DERTBAG',
    link: 'About',
    imageSource: require('../assets/images/about-icon.png'),
  },
];

const Settings = ({navigation}) => {
  const {state, dispatch} = useContext(UserContext);
  let [user, setUser] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    async function getEmail() {
      try {
        const data = await getData('UserData');
        if (data) {
          setUser(data);
        } else {
          const {data} = await GetUserDetails();
          if (data) {
            setUser(data);
            await storeData('UserData', data.user);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (state.isRegisterd === true) getEmail();
  }, [isFocused]);

  const headerComponent = () => (
    <View style={{marginBottom: 36}}>
      <ProfileCard
        userImage={user?.profileAvatarUrl}
        email={user?.email}
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.headingText}>MENU</Text>
        {user && headerComponent()}
        <FlatList
          showsVerticalScrollIndicator={false}
          // ListHeaderComponent={user && headerComponent}
          style={styles.settings}
          data={menuOptions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => {
                navigation.navigate(item.link);
              }}>
              <View style={styles.menuItem}>
                <View style={styles.menuColumn}>
                  <Image style={styles.icons} source={item.imageSource} />
                  <Text style={styles.optionText}>{item.title}</Text>
                </View>
                <ChevronIcon />
              </View>
            </TouchableOpacity>
          )}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => {
                if (state.isRegisterd === true) {
                  dispatch({type: 'CLEAR_LOGIN', payload: false});
                  // navigation.navigate('SignUp');
                } else {
                  // dispatch({type: 'CLEAR_LOGIN', payload: false});
                  navigation.navigate('SignUp');
                }
              }}>
              <View style={styles.menuItem}>
                <View style={styles.menuColumn}>
                  <Image
                    style={styles.icons}
                    source={require('../assets/images/sign-out-icon.png')}
                  />
                  <Text style={styles.optionText}>
                    {state.isRegisterd === true ? 'LOG OUT' : 'CREATE ACCOUNT'}
                  </Text>
                </View>
                <ChevronIcon />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innercontainer: {
    paddingHorizontal: 24,
    flex: 1,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#111',
    marginTop: 0,
    marginBottom: '1.1%',
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    alignItems: 'center',
  },
  menuColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headingText: {
    textAlign: 'center',
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 44,
    fontStyle: 'normal',
    fontFamily: 'Helvetica-Bold',
    alignSelf: 'baseline',
    paddingTop: 20,
  },
  icons: {
    marginRight: 15,
    marginBottom: '1.1%',
  },
});

export default Settings;
