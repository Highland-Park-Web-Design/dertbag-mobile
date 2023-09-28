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
import OTPTextView from 'react-native-otp-textinput';
import {RequestReset, VerifyOTP} from '../api';
import {showMessage} from 'react-native-flash-message';
import Loader from '../components/Loader';
import {storeData} from '../store';

function OtpValidation({navigation, route}) {
  const [submitting, setSubmitting] = useState(false);
  const {email, otpToken} = route.params;
  const [screenParams, setScreenParams] = useState({
    email,
    otpToken,
  });

  const backgroundStyle = {
    backgroundColor: '#FFF',
  };

  const handleOTPValidation = async values => {
    values.otpToken = screenParams.otpToken;
    try {
      setSubmitting(true);
      const res = await VerifyOTP(values);
      // console.log('otp verification res', res.data);
      await storeData('user', {token: res.data.token});
      navigation.navigate('NewPassword', {
        otpToken: screenParams.otpToken,
        otpCode: values.otpCode,
      });
      setSubmitting(false);
      return;
    } catch (err) {
      console.log(err);
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
            onSubmit={handleOTPValidation}
            initialValues={{
              otpCode: '',
            }}>
            {({values, setFieldValue, handleSubmit}) => {
              return (
                <View style={{...backgroundStyle, height: '100%'}}>
                  <View
                    style={{
                      backgroundColor: '#fff',
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
                      <Text style={styles.headingText}>OTP Validation</Text>
                    </View>
                    <View
                      style={{
                        width: '100%',
                        padding: 24,
                        marginBottom: 64,
                      }}>
                      <View
                        style={{
                          marginBottom: 24,
                        }}>
                        <OTPTextView
                          handleTextChange={data => {
                            setFieldValue('otpCode', data);
                          }}
                          containerStyle={styles.textInputContainer}
                          textInputStyle={styles.InputStyle}
                          tintColor="#000"
                          inputCount={6}
                        />
                      </View>
                      <TouchableOpacity
                        disabled={values?.otpCode < 6}
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={handleSubmit}>
                        <Text style={styles.textStyle}>Validate</Text>
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
                        Didn't get the code?
                      </Text>
                      <TouchableOpacity
                        onPress={async () => {
                          try {
                            const res = await RequestReset({
                              email: screenParams.email,
                            });
                            setScreenParams(prev => {
                              return {...prev, otpToken: res.data.otpToken};
                            });
                            showMessage({
                              message: 'new otp sent to your email',
                              type: 'success',
                            });
                          } catch (err) {
                            console.error(err);
                            if (err.response) {
                              showMessage({
                                message: err.response.data.message,
                                type: 'danger',
                              });
                            } else {
                              showMessage({
                                message:
                                  'unable to reach server, check internet',
                                type: 'danger',
                              });
                            }
                          }
                        }}>
                        <Text style={styles.highlight}>Resend</Text>
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
    fontFamily: 'Helvetica-Bold',
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
  },
  error: {
    color: 'red',
  },
  InputStyle: {
    width: 45,
    height: 50,
    // padding: 16,
    backgroundColor: '#FAFAFA',
    borderColor: '#03DAC6',
    borderBottomWidth: 1,
    borderWidth: 1,
    borderBottomColor: '#FAFAFA',
    borderRadius: 16,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default OtpValidation;
