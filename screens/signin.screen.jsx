import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {showMessage} from 'react-native-flash-message';
import {LoginUser} from '../api';
import {storeData} from '../store';
import * as Yup from 'yup';
import Loader from '../components/Loader';

function SignIn({navigation}) {
  10;
  const isDarkMode = useColorScheme() === 'dark';
  const [submitting, setSubmitting] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
    password: Yup.string().required('Password is Required'),
  });

  const handleSignIn = async values => {
    try {
      setSubmitting(true);
      let res = await LoginUser(values);
      await storeData('user', {...res.data.user, token: res.data.token});
      setSubmitting(false);
      return navigation?.navigate('Product');
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
            onSubmit={handleSignIn}
            validationSchema={validationSchema}
            initialValues={{password: '', email: ''}}>
            {({
              values,
              errors,
              handleSubmit,
              handleChange,
              handleBlur,
              touched,
            }) => {
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
                          marginBottom: 12,
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
                          height: 100,
                        }}>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View>
                            <Text style={styles.inputLabel}>Password</Text>
                          </View>
                          <View>
                            <TouchableOpacity
                              onPress={() =>
                                navigation?.navigate('ResetPassword')
                              }>
                              <Text style={styles.forgotPwLabel}>
                                Forgot Password
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <TextInput
                          placeholder="Enter Password"
                          style={styles.inputControl}
                          secureTextEntry={true}
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                        />
                        {touched.password && errors.password ? (
                          <Text style={styles.error}>{errors.password}</Text>
                        ) : null}
                      </View>
                      <TouchableOpacity
                        onPress={handleSubmit}
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
                          //fontStyle: 'normal',
                          //fontWeight: '400',
                          lineHeight: 24,
                        }}>
                        New here?
                        <TouchableOpacity
                          onPress={() => {
                            navigation?.push('SignUp');
                          }}>
                          <Text style={styles.highlight}>Sign Up</Text>
                        </TouchableOpacity>
                      </Text>
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
    //fontWeight: 300,
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
  error: {
    color: 'red',
  },
  highlight: {
    //fontWeight: '700',
  },
});

export default SignIn;
