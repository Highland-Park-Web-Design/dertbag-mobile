import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function SignIn({navigation}) {
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
            <Text style={styles.headingText}>Sign In</Text>
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
              <TextInput
                placeholder="Enter Email"
                style={styles.inputControl}
              />
            </View>
            <View
              style={{
                marginBottom: 17,
                height: 90,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={styles.inputLabel}>Password</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPassword')}>
                    <Text style={styles.forgotPwLabel}>Forgot Password</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TextInput
                placeholder="Enter Password"
                style={styles.inputControl}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
              activeOpacity={0.5}
              style={styles.buttonStyle}>
              <Text style={styles.textStyle}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: '#000000',
                textAlign: 'center',
                fontSize: 16,
                fontFamily: 'Helvetica',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 24,
              }}>
              New here?
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.highlight}>Sign Up</Text>
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
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    textTransform: 'uppercase',
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
  },
  forgotPwLabel: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    color: '#000',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 24,
    color: '#000',
  },
  inputControl: {
    borderRadius: 16,
    padding: 16,
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    backgroundColor: '#FAFAFA',
  },

  highlight: {
    fontWeight: '700',
  },
});

export default SignIn;
