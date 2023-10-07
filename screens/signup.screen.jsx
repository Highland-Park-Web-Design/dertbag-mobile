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
  const isDarkMode = useColorScheme() === 'dark';
  const [submitting, setSubmtting] = useState(false);
  const backgroundStyle = {
    backgroundColor: '#FFF',
  };

  const validationSchema = Yup.object().shape({
    lastName: Yup.string().required('Lastname is Required'),
    firstName: Yup.string().required('Firstname is Required'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
    password: Yup.string().required('Password is Required'),
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

  return (
    <>
      {submitting ? (
        <Loader />
      ) : (
        <SafeAreaView style={backgroundStyle}>
          {/* <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          /> */}
          <Formik
            onSubmit={handleSignUp}
            initialValues={{
              firstName: '',
              lastName: '',
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
                          ? Colors.white
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
                          <Text style={styles.inputLabel}>First Name</Text>
                          <TextInput
                            placeholder="Enter Name"
                            style={styles.inputControl}
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                          />
                          {touched.firstName && errors.firstName ? (
                            <Text style={styles.error}>{errors.firstName}</Text>
                          ) : null}
                        </View>
                        <View
                          style={{
                            marginBottom: 17,
                          }}>
                          <Text style={styles.inputLabel}>Last Name</Text>
                          <TextInput
                            placeholder="Enter Name"
                            style={styles.inputControl}
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                          />
                          {touched.lastName && errors.lastName ? (
                            <Text style={styles.error}>{errors.lastName}</Text>
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
