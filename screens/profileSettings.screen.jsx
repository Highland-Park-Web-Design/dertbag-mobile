import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import ChevronIcon from '../components/ChevronIcon';
import ProfileCard from '../components/ProfileCard';
import {getData, removeMultipleData} from '../store';
import {GetUser} from '../api';
import {useIsFocused} from '@react-navigation/native';
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
  {
    title: 'SIGN OUT',
    link: 'SignIn',
    imageSource: require('../assets/images/sign-out-icon.png'),
  },
];

const Settings = ({navigation}) => {
  let [user, setUser] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    async function getEmail() {
      const data = await getData('UserData');
      setUser(data);
      // if (data === null) {
      //   const fetchuser = await GetUser();
      //   setUser(fetchuser);
      // }
    }
    getEmail();
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
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={user && headerComponent}
          style={styles.settings}
          data={menuOptions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={() => {
                navigation.navigate(item.link);
                if (item.link === 'SignIn') {
                  async function removeData() {
                    await removeMultipleData(['UserData', 'user']);
                  }
                  removeData();
                }
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
