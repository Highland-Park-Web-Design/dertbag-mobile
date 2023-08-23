import React, {useEffect, useState} from 'react';
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
import {Formik} from 'formik';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as Yup from 'yup';
import {showMessage} from 'react-native-flash-message';
import {RegisterUser} from '../api';
import Loader from '../components/Loader';
import {storeData} from '../store';

function SignUp({navigation}) {
  const [submitting, setSubmtting] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
    password: Yup.string().required('Password is Required'),
    phoneNumber: Yup.string().required('Phone is Required'),
    fullName: Yup.string().required('Full Name is Required'),
  });

  const handleSignUp = async (values, formikBag) => {
    try {
      setSubmtting(true);
      let res = await RegisterUser(values);
      await storeData('user', {...res.data.user, token: res.data.token});
      setSubmtting(false);
      return navigation.navigate('Product');
    } catch (err) {
      setSubmtting(false);
      if (err.response) {
        showMessage({
          message: err.response.data.message,
          type: 'danger',
        });
        // console.log('err response', err.response.data, err.response);
      } else {
        // console.log('err', err);
        showMessage({
          message: 'unable to reach server, check internet',
          type: 'danger',
        });
      }
    }
  };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <>
      {submitting ? (
        <Loader />
      ) : (
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Formik
            onSubmit={handleSignUp}
            initialValues={{
              fullName: '',
              phoneNumber: '',
              email: '',
              password: '',
            }}
            validateOnBlur
            validationSchema={validationSchema}>
            {({
              values,
              handleChange,
              handleBlur,
              errors,
              handleSubmit,
              touched,
            }) => {
              return (
                <>
                  <View style={{...backgroundStyle, height: '100%'}}>
                    <View
                      style={{
                        backgroundColor: isDarkMode
                          ? Colors.black
                          : Colors.white,
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
                        <Text style={styles.headingText}>Sign UP</Text>
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
                          <Text style={styles.inputLabel}>FullName</Text>
                          <TextInput
                            placeholder="Enter FullName"
                            style={styles.inputControl}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                          />
                          {touched.fullName && errors.fullName ? (
                            <Text style={styles.error}>{errors.fullName}</Text>
                          ) : null}
                        </View>
                        <View
                          style={{
                            marginBottom: 17,
                          }}>
                          <Text style={styles.inputLabel}>Phone</Text>
                          <TextInput
                            placeholder="Enter Phone"
                            style={styles.inputControl}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                            value={values.phoneNumber}
                          />
                          {touched.phoneNumber && errors.phoneNumber ? (
                            <Text style={styles.error}>
                              {errors.phoneNumber}
                            </Text>
                          ) : null}
                        </View>
                        <View
                          style={{
                            marginBottom: 17,
                          }}>
                          <Text style={styles.inputLabel}>Email</Text>
                          <TextInput
                            placeholder="Enter Email"
                            style={styles.inputControl}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                          />
                          {touched.email && errors.email ? (
                            <Text style={styles.error}>{errors.email}</Text>
                          ) : null}
                        </View>
                        <View
                          style={{
                            marginBottom: 17,
                          }}>
                          <Text style={styles.inputLabel}>Password</Text>
                          <TextInput
                            placeholder="Set Password"
                            style={styles.inputControl}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                          />
                          {touched.password && errors.password ? (
                            <Text style={styles.error}>{errors.password}</Text>
                          ) : null}
                        </View>
                        <TouchableOpacity
                          activeOpacity={0.5}
                          style={styles.buttonStyle}
                          disabled={submitting}
                          onPress={handleSubmit}>
                          <Text style={styles.textStyle}>
                            {submitting ? 'Signing up...' : 'Sign Up'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 3,
                          alignItems: 'center',
                        }}>
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
                        </Text>
                        <TouchableOpacity
                          onPress={() => navigation.push('SignIn')}>
                          <Text style={styles.highlight}>Sign In</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </>
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
    fontFamily: 'Helvetica-Bold',
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
  inputControl: {
    borderRadius: 16,
    padding: 16,
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    backgroundColor: '#FAFAFA',
  },
  highlight: {
    //fontWeight: '700',
    fontFamily: 'Helvetica-Bold',
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
  },
  error: {
    color: 'red',
  },
});

export default SignUp;
