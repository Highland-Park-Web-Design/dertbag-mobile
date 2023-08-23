import React, {useState} from 'react';
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
import * as Yup from 'yup';
import {Formik} from 'formik';
import CustomInput from '../components/input';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Loader from '../components/Loader';
import {showMessage} from 'react-native-flash-message';
import {ResetPasswordWithOTP} from '../api';
import {storeData} from '../store';

function NewPassword({navigation, route}) {
  const isDarkMode = useColorScheme() === 'dark';
  const [submitting, setSubmitting] = useState(false);
  const {otpCode, otpToken} = route.params;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const handleReset = async values => {
    try {
      setSubmitting(true);
      const res = await ResetPasswordWithOTP({
        otpCode,
        otpToken,
        password: values.password,
      });
      console.log('verify otp res', res);
      await storeData('user', {token: res.data.token});
      navigation.navigate('Product');
      setSubmitting(false);
      return;
    } catch (err) {
      setSubmitting(false);
      if (err.response) {
        showMessage({
          message: err.response.data.message,
          type: 'danger',
        });
      } else {
        showMessage({
          message: 'unable to reach server, check internet',
          type: 'danger',
        });
      }
    }
  };

  return (
    <>
      {submitting ? (
        <Loader />
      ) : (
        <SafeAreaView style={backgroundStyle}>
          <Formik
            onSubmit={handleReset}
            initialValues={{
              password: '',
              passwordConfirmation: '',
            }}
            validationSchema={validationSchema}>
            {({values, errors, handleSubmit, handleChange, handleBlur}) => {
              return (
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
                      <Text style={styles.headingText}>Set New Password</Text>
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
                        <Text style={styles.inputLabel}>New Password</Text>
                        <CustomInput
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                          placeholder="Enter Password"
                        />
                        <Text style={styles.error}>{errors.password}</Text>
                      </View>
                      <View
                        style={{
                          marginBottom: 17,
                        }}>
                        <Text style={styles.inputLabel}>Confirm Password</Text>
                        <CustomInput
                          onChangeText={handleChange('passwordConfirmation')}
                          onBlur={handleBlur('passwordConfirmation')}
                          value={values.passwordConfirmation}
                          placeholder="Enter Password"
                        />
                        <Text style={styles.error}>
                          {errors.passwordConfirmation}
                        </Text>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={handleSubmit}>
                        <Text style={styles.textStyle}>UPDATE</Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        gap: 3,
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          color: '#000000',
                          textAlign: 'center',
                          fontSize: 16,
                          fontFamily: 'Helvetica',
                          lineHeight: 24,
                        }}>
                        Already a fan?
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.push('SignIn');
                        }}>
                        <Text style={styles.highlight}>Sign In</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            }}
          </Formik>
        </SafeAreaView>
      )}
    </>
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
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  headingText: {
    textAlign: 'center',
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 32,
    lineHeight: 44,
    fontFamily: 'Helvetica-Bold',
  },
  forgotPwLabel: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    lineHeight: 16,
    color: '#000',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    lineHeight: 24,
    color: '#000',
  },

  highlight: {
    //fontWeight: '700',
  },
  error: {
    color: 'red',
  },
});

export default NewPassword;
