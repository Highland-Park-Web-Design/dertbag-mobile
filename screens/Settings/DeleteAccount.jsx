import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Header from '../../components/Header';
import Button from '../../components/Button';

function DeleteAccount({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'delete account'} />
      <View style={styles.contentContainer}>
        <View style={{gap: 24}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Helvetica',
              lineHeight: 24,
              color: '#000',
            }}>
            Are you sure you want to delete your account?
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Helvetica',
              lineHeight: 24,
              color: '#000',
            }}>
            Once your account is deleted, all of your data will be permanently
            deleted. This includes your profile, photos and order details. You
            will also be logged out of the app and will not be able to create a
            new account with the same email address.
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{width: '47%'}}>
            <Button onpress={() => navigation.goBack()} title={'Cancel'} />
          </View>
          <View style={{width: '47%'}}>
            <Button variation={'ghost'} title={'Continue'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DeleteAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
});
