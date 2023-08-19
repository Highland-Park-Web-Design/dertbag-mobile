import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Header from '../../components/Header';
import CustomInput from '../../components/input';
import Button from '../../components/Button';

function ChangePassword({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'change password'} />
      <View style={styles.contentContainer}>
        <View style={{gap: 24}}>
          <View>
            <Text style={styles.inputLabel}>Current Password</Text>
            <CustomInput placeholder={'Enter password'} />
          </View>
          <View>
            <Text style={styles.inputLabel}>New Password</Text>
            <CustomInput placeholder={'Enter password'} />
          </View>
          <View>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <CustomInput placeholder={'Enter password'} />
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <Button title={'Update'} />
      </View>
    </SafeAreaView>
  );
}

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    lineHeight: 24,
    color: '#000',
    marginBottom: 4,
  },
});
