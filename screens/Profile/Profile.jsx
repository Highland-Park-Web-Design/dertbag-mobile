import React from 'react';
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

function Profile({navigation}) {
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
                source={require('../../assets/images/profileImg.png')}
              />
              <Text style={styles.username}>Gilbert Umeh</Text>
              <Text style={styles.email}>gilbert@megastack.com</Text>
              <Text style={styles.date}>Member Since: Nov 2021</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileEdit')}
              style={[styles.iconContainer, {backgroundColor: '#111'}]}>
              <EditIco />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileView}>
          <ViewItem caption={'14 June 1953'} title={'DATE OF BIRTH'} />
          <ViewItem caption={'Male'} title={'GENDER'} />
          <ViewItem
            caption={
              '4932 Jacobs Street, Pittsburgh, Pennsylvania, United State of America.'
            }
            title={'ADDRESS'}
          />
          <ViewItem
            caption={
              '2177 Morningview Lane, Ackley, Iowa, United State of America'
            }
            title={'BILLING ADDRESS'}
          />
          <ViewItem caption={'412-363-0148'} title={'PHONE'} />
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
