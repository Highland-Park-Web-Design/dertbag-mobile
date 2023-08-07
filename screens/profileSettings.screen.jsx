import React from 'react';
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

const settingsOptions = [
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
  const headerComponent = () => (
    <View>
      <Text style={styles.headingText}>MENU</Text>
      <TouchableOpacity
        style={styles.profileTileContainer}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <View style={styles.profileTile}>
          <Image
            source={require('../assets/images/db-profile-icon.png')}></Image>
          <View>
            <Text
              style={{
                fontFamily: 'Helvetica',
                fontWeight: 'bold',
                marginBottom: '5%',
              }}>
              philip@dertbag.us{' '}
            </Text>
            <Text style={{fontFamily: 'Helvetica', fontWeight: 'normal'}}>
              VIEW PROFILE
            </Text>
          </View>
          <Image
            style={styles.chevron}
            source={require('../assets/images/chevron-icon.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        style={styles.settings}
        data={settingsOptions}
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
              <Image
                style={styles.chevron}
                source={require('../assets/images/chevron-icon.png')}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  optionContainer: {
    paddingVertical: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#111',
    marginBottom: '2.5%',
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    // paddingBottom: 10,
    borderBottomWidth: 1, // Width of the border
    borderBottomColor: '#DCDCDC', // Color of the border
  },
  menuColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileTileContainer: {
    height: 115,
  },
  profileTile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: 'space-between',
    padding: '3%',
    width: '85%',
    height: '80%',
    backgroundColor: '#F5F5F5',
    marginTop: 20,
    marginLeft: 25,
    borderRadius: 5,
  },
  headingText: {
    textAlign: 'center',
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 44,
    fontStyle: 'normal',
    fontFamily: 'Helvetica',
    alignSelf: 'baseline',
    paddingTop: 20,
    paddingLeft: 25,
  },
  icons: {
    marginRight: 15,
    marginBottom: '2.5%',
  },
});

export default Settings;
