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
import {Formik} from 'formik';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as Yup from 'yup';

function SignUp({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
    password: Yup.string().required('Password is Required'),
    phone: Yup.string().required('Phone is Required'),
    fullName: Yup.string().required('Full Name is Required'),
  });

  const handleSignUp = (values, formikBag) => {
    // console.log('form values', values, formikBag);
    return navigation.navigate('Product');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Formik
        onSubmit={handleSignUp}
        initialValues={{
          fullName: '',
          phone: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}>
        {({values, handleChange, handleBlur, errors, handleSubmit}) => {
          return (
            <>
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
                      <Text style={styles.error}>{errors.fullName}</Text>
                    </View>
                    <View
                      style={{
                        marginBottom: 17,
                      }}>
                      <Text style={styles.inputLabel}>Phone</Text>
                      <TextInput
                        placeholder="Enter Phone"
                        style={styles.inputControl}
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                      />
                      <Text style={styles.error}>{errors.phone}</Text>
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
                      <Text style={styles.error}>{errors.email}</Text>
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
                      <Text style={styles.error}>{errors.password}</Text>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      style={styles.buttonStyle}
                      onPress={handleSubmit}>
                      <Text style={styles.textStyle}>Sign Up</Text>
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
                        onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.highlight}>Sign In</Text>
                      </TouchableOpacity>
                    </Text>
                  </View>
                </View>
              </View>
            </>
          );
        }}
      </Formik>
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
  },
  error: {
    color: 'red',
  },
});

export default SignUp;
