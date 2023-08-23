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
import * as Yup from 'yup';
import {Formik} from 'formik';
import CustomInput from '../components/input';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function ResetPassword({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
  });

  const handleReset = (values, formikBag) => {
    // console.log('form values', values, formikBag);
    return navigation.navigate('Product');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Formik
        onSubmit={handleReset}
        initialValues={{
          email: '',
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
                    <CustomInput
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      placeholder="Enter Email"
                    />
                    <Text style={styles.error}>{errors.email}</Text>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.buttonStyle}
                    onPress={handleSubmit}>
                    <Text style={styles.textStyle}>Reset</Text>
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
});

export default ResetPassword;
