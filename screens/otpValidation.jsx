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

function OtpValidation({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const [errorsMsg, setErrorsMsg] = useState();
  const [code, setCode] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const handleValidation = (values, formikBag) => {
    // console.log('form values', values, formikBag);
    return navigation.navigate('Product');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Formik
        onSubmit={handleValidation}
        // initialValues={{
        //   code: '',
        //   passwordConfirmation: '',
        // }}
        // validationSchema={validationSchema}
      >
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
                      marginBottom: 17,
                    }}>
                    <OTPTextView
                      handleTextChange={data => {
                        console.log(data);
                      }}
                      containerStyle={styles.textInputContainer}
                      textInputStyle={styles.InputStyle}
                      tintColor="#000"
                      inputCount={6}
                    />
                    <Text style={styles.error}>{errorsMsg}</Text>
                  </View>
                  <TouchableOpacity
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
    //fontWeight: '700',
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
