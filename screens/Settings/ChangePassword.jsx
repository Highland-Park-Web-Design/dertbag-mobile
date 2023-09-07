import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Header from '../../components/Header';
import CustomInput from '../../components/input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ChangeLoggedinPassword} from '../../api';
import {showMessage} from 'react-native-flash-message';
import {storeData} from '../../store';

function ChangePassword({navigation}) {
  const [submitting, setSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Password is required'),
    newPassword: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const handlePasswordChange = async (values, resetForm) => {
    try {
      setSubmitting(true);
      let res = await ChangeLoggedinPassword(values);
      showMessage({
        message: 'Password Changed Succesfully',
        type: 'success',
      });
      // await storeData('user', {...res.data.user, token: res?.data?.token});
      resetForm();
      setSubmitting(false);
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
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'change password'} />
      <Formik
        onSubmit={(values, {resetForm}) =>
          handlePasswordChange(values, resetForm)
        }
        validationSchema={validationSchema}
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }}>
        {({
          values,
          errors,
          handleSubmit,
          handleChange,
          handleBlur,
          touched,
        }) => {
          return (
            <>
              <View style={styles.contentContainer}>
                <View style={{gap: 10}}>
                  <View>
                    <Text style={styles.inputLabel}>Current Password</Text>
                    <CustomInput
                      onChangeText={handleChange('currentPassword')}
                      onBlur={handleBlur('currentPassword')}
                      secureTextEntry
                      value={values.currentPassword}
                      placeholder="Enter Password"
                    />
                    {errors && (
                      <Text style={{color: 'red'}}>
                        {errors.currentPassword}
                      </Text>
                    )}
                  </View>
                  <View>
                    <Text style={styles.inputLabel}>New Password</Text>
                    <CustomInput
                      onChangeText={handleChange('newPassword')}
                      onBlur={handleBlur('newPassword')}
                      secureTextEntry
                      value={values.newPassword}
                      placeholder="Enter Password"
                    />
                    {errors && (
                      <Text style={styles.error}>{errors.newPassword}</Text>
                    )}
                  </View>
                  <View>
                    <Text style={styles.inputLabel}>Confirm Password</Text>
                    <CustomInput
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      secureTextEntry
                      value={values.confirmPassword}
                      placeholder="Enter Password"
                    />
                    {errors && (
                      <Text style={styles.error}>{errors.confirmPassword}</Text>
                    )}
                  </View>
                </View>
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  width: '100%',
                  paddingHorizontal: 24,
                }}>
                <Button
                  onPress={handleSubmit}
                  title={submitting ? 'Updating...' : 'Update'}
                />
              </View>
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
}

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    lineHeight: 24,
    color: '#000',
    marginBottom: 4,
  },
  error: {
    color: 'red',
  },
});
