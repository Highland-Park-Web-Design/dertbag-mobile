import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import CustomInput from '../components/input';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function ResetPassword({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <View style={{...backgroundStyle, height: '100%'}}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}>
          <View
            style={{
              width: '100%',
            }}>
            <Text style={styles.headingText}>Reset Password</Text>
          </View>
          <View
            style={{
              width: '100%',
              padding: 24,
              marginBottom: 64,
            }}>
            <View
              style={{
                marginBottom: 17,
              }}>
              <Text style={styles.inputLabel}>Email</Text>
              <CustomInput placeholder="Enter Email" />
            </View>

            <TouchableOpacity activeOpacity={0.5} style={styles.buttonStyle}>
              <Text style={styles.textStyle}>Reset</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: '#000000',
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'Helvetica',
                //fontStyle: 'normal',
                //fontWeight: '400',
                lineHeight: 24,
              }}>
              Already a fan?
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignIn');
                }}>
                <Text style={styles.highlight}>Sign In</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#111111',
    height: 56,
    width: '100%',
    borderRadius: 16,
    padding: 16,
  },
  textStyle: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    //fontStyle: 'normal',
    //fontWeight: '700',
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  headingText: {
    textAlign: 'center',
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 32,
    //fontWeight: '700',
    lineHeight: 44,
    //fontStyle: 'normal',
    fontFamily: 'Helvetica',
  },
  forgotPwLabel: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    //fontStyle: 'normal',
    //fontWeight: '400',
    lineHeight: 16,
    color: '#000',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    //fontStyle: 'normal',
    //fontWeight: '300',
    lineHeight: 24,
    color: '#000',
  },

  highlight: {
    //fontWeight: '700',
  },
});

export default ResetPassword;
