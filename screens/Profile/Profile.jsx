import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import EditIco from '../../Icons/EditIco.svg';
import {GetUser} from '../../api';
import dayjs from 'dayjs';
import {getData} from '../../store';
import {useIsFocused} from '@react-navigation/native';
function Profile({navigation}) {
  const [userProfile, setUserProfile] = useState();
  console.log('user profile', userProfile);
  const isFocused = useIsFocused();
  useEffect(() => {
    async function getUserDetails() {
      const data = await getData('UserData');
      setUserProfile(data);
    }
    getUserDetails();
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Profile'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <View
          style={{
            gap: 16,
            marginBottom: 24,
          }}>
          <View style={styles.profileContainer}>
            <View style={styles.iconContainer}></View>
            <View style={styles.profilDetails}>
              <Image
                style={{width: 128, height: 128, marginBottom: 16}}
                borderRadius={64}
                resizeMode="stretch"
                source={
                  userProfile?.profileAvatarUrl
                    ? {uri: userProfile?.profileAvatarUrl}
                    : require('../../assets/images/db-profile-icon.png')
                }
              />
              <Text style={styles.username}>
                {userProfile?.firstName} {userProfile?.lastName}
              </Text>
              <Text style={styles.email}>{userProfile?.email}</Text>
              <Text style={styles.date}>
                Member Since:
                {(userProfile &&
                  dayjs(userProfile?.createdAt).format(' MMM YYYY')) ||
                  'N/A'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileEdit')}
              style={[styles.iconContainer, {backgroundColor: '#111'}]}>
              <EditIco />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileView}>
          <ViewItem
            caption={
              (userProfile?.dateOfBirth !== null &&
                userProfile?.dateOfBirth &&
                dayjs(userProfile?.dateOfBirth).format('DD MMM YYYY')) ||
              'N/A'
            }
            title={'DATE OF BIRTH'}
          />
          <ViewItem
            caption={(userProfile && userProfile?.gender) || 'N/A'}
            title={'GENDER'}
          />
          <ViewItem
            caption={
              userProfile?.address ||
              userProfile?.state ||
              userProfile?.city ||
              userProfile?.country
                ? `${
                    userProfile?.address === null ? '' : userProfile?.address
                  } ${userProfile?.city === null ? '' : userProfile?.city} ${
                    userProfile?.state === null ? '' : userProfile?.state
                  } ${
                    userProfile?.country === null ? '' : userProfile?.country
                  }`
                : 'N/A'
            }
            title={'ADDRESS'}
          />
          <ViewItem
            caption={
              userProfile?.sameAddress
                ? `${userProfile?.address} ${userProfile?.city}  ${userProfile?.state}  ${userProfile?.country} `
                : userProfile?.billingAddress ||
                  userProfile?.billingAddressState ||
                  userProfile?.billingAddressCity ||
                  userProfile?.billingAddressCountry
                ? `${userProfile?.billingAddress} ${userProfile?.billingAddressCity}  ${userProfile?.billingAddressState}  ${userProfile?.billingAddressCountry} `
                : 'N/A'
            }
            title={'BILLING ADDRESS'}
          />
          <ViewItem
            caption={(userProfile && userProfile?.phoneNumber) || 'N/A'}
            title={'PHONE'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ViewItem({title, caption}) {
  return (
    <View
      style={{
        gap: 8,
        alignItems: 'flex-start',
      }}>
      <Text style={styles.date}>{title}</Text>
      <Text
        style={{
          color: '#000',
          textAlign: 'left',
          fontFamily: 'Helvetica',
          fontSize: 16,
          lineHeight: 20,
        }}>
        {caption}
      </Text>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  profileView: {
    gap: 24,
    alignItems: 'flex-start',
  },
  profileContainer: {
    borderRadius: 16,
    backgroundColor: '#F7F7F7',
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  profilDetails: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 32,
    height: 32,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  username: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 24,
    lineHeight: 32,
    textTransform: 'uppercase',
  },
  email: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  date: {
    color: '#999',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 16,
  },
});
