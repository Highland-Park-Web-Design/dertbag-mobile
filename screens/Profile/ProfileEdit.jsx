import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import Header from '../../components/Header';
import CalenderIco from '../../Icons/calenderIco.svg';
import CustomInput from '../../components/input';
import Button from '../../components/Button';
import dropdownStyle from '../../components/dropdown.style';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import AddressEdit from './AddressEdit';
import BillingEdit from './BillingEdit';
import StepperComponent from '../../components/Stepper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import {GetUserDetails, UpdateUserDetails} from '../../api';
import Loader from '../../components/Loader';
import {showMessage} from 'react-native-flash-message';
import {storeData} from '../../store';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_UPLOAD_PRESET,
} from '@env';

function ProfileEdit({navigation}) {
  // const [currentStep, setcurrentStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [userDetail, setUserDetail] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [checkState, setCheckState] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [billing, setBilling] = useState({
    address: null,
    country: null,
    city: null,
    state: null,
  });
  const handleProfileUpdate = async values => {
    try {
      setSubmitting(true);
      await UpdateUserDetails(values);
      const {data} = await GetUserDetails();
      if (data) await storeData('UserData', data.user);
      showMessage({
        message: 'Profile Updated',
        type: 'success',
      });
      setSubmitting(false);
      return navigation.navigate('Profile');
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

  const openImagePicker = async setFieldValue => {
    const options = {
      title: 'Select an Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    try {
      const imagePickerResponse = await launchImageLibrary(options);

      if (imagePickerResponse.didCancel) {
        showMessage({
          message: 'Image picker was canceled',
          type: 'info',
        });
      } else if (imagePickerResponse.error) {
        showMessage({
          message: 'Image picker error',
          type: 'error',
        });
        // console.error('Image picker error:', imagePickerResponse.error);
      } else if (imagePickerResponse.assets) {
        setSelectedFile('uploading...');

        const formData = new FormData();
        const selectedImage = imagePickerResponse.assets[0];

        formData.append('file', {
          uri: selectedImage.uri,
          type: selectedImage.type,
          name: selectedImage.fileName,
        });

        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('api_key', CLOUDINARY_API_KEY);
        formData.append('api_secret', CLOUDINARY_API_SECRET);

        const cloudinaryResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: 'POST',
            body: formData,
          },
        );

        if (cloudinaryResponse.ok) {
          const cloudinaryData = await cloudinaryResponse.json();
          setFieldValue('profileAvatarId', cloudinaryData?.public_id);
          setFieldValue('profileAvatarUrl', cloudinaryData?.secure_url);
          setSelectedImage({
            uri: selectedImage.uri,
            type: selectedImage.type,
            name: selectedImage.fileName,
          });
          setSelectedFile(null);
          showMessage({
            message: 'Image Uploaded Succesfully',
            type: 'success',
          });
        } else {
          showMessage({
            message: 'Image upload failed. Please try again',
            type: 'info',
          });
          setSelectedFile(null);
        }
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };
  useEffect(() => {
    async function getDetails() {
      try {
        const {data} = await GetUserDetails();
        setUserDetail(data?.user);
        setCheckState(data?.user.sameAddress);
        setBilling(prevState => {
          return {
            ...prevState,
            country: data?.user?.billingAddressCountry,
            state: data?.user?.billingAddressState,
            city: data?.user?.billingAddressCity,
            address: data?.user?.billingAddress,
          };
        });

        if (data.user.profileAvatarUrl !== null) {
          setSelectedImage({
            uri: data.user.profileAvatarUrl,
            type: 'image/jpeg',
            name: 'profileImage.jpg',
          });
        }
      } catch (err) {
        // console.log(err?.response);
        showMessage({
          message: 'Error Occured',
          type: 'error',
        });
      }
    }
    getDetails();
  }, []);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().nullable(),
    lastName: Yup.string().nullable(),
    phoneNumber: Yup.string().nullable(),
    profileAvatarId: Yup.string().nullable(),
    profileAvatarUrl: Yup.string().nullable(),
    dateOfBirth: Yup.string().nullable(),
    billingAddress: Yup.string().nullable(),
    billingAddressState: Yup.string().nullable(),
    billingAddressCountry: Yup.string().nullable(),
    address: Yup.string().nullable(),
    city: Yup.string().nullable(),
    country: Yup.string().nullable(),
    gender: Yup.string().nullable(),
    billingAddressCity: Yup.string().nullable(),
    state: Yup.string().nullable(),
    sameAddress: Yup.boolean(),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Profile Edit'} />
      <View style={{paddingHorizontal: 24}}>
        <StepperComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </View>
      {userDetail ? (
        <Formik
          onSubmit={handleProfileUpdate}
          initialValues={{
            dateOfBirth: userDetail?.dateOfBirth,
            billingAddress: userDetail?.billingAddress,
            billingAddressCity: userDetail?.billingAddressCity,
            billingAddressState: userDetail?.billingAddressState,
            billingAddressCountry: userDetail?.billingAddressCountry,
            firstName: userDetail?.firstName,
            lastName: userDetail?.lastName,
            phoneNumber: userDetail?.phoneNumber,
            address: userDetail?.address,
            city: userDetail?.city,
            country: userDetail?.country,
            gender: userDetail?.gender,
            state: userDetail?.state,
            profileAvatarUrl: userDetail?.profileAvatarUrl,
            profileAvatarId: userDetail?.profileAvatarId,
            sameAddress: userDetail?.sameAddress,
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
            setFieldValue,
          }) => {
            return (
              <>
                {currentStep === 1 && (
                  <Step1
                    openImagePicker={openImagePicker}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    touched={touched}
                    errors={errors}
                    handleBlur={handleBlur}
                    values={values}
                    setcurrentStep={setCurrentStep}
                    selectedImage={selectedImage}
                    selectedFile={selectedFile}
                  />
                )}

                {currentStep === 2 && (
                  <AddressEdit
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    touched={touched}
                    errors={errors}
                    handleBlur={handleBlur}
                    values={values}
                    setcurrentStep={setCurrentStep}
                  />
                )}

                {currentStep === 3 && (
                  <BillingEdit
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    touched={touched}
                    errors={errors}
                    handleBlur={handleBlur}
                    values={values}
                    handleSubmit={handleSubmit}
                    checkState={checkState}
                    setbilling={setBilling}
                    billing={billing}
                    setCheckState={setCheckState}
                    setcurrentStep={setCurrentStep}
                    submitting={submitting}
                  />
                )}
              </>
            );
          }}
        </Formik>
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
}

export default ProfileEdit;

function Step1({
  setcurrentStep,
  handleChange,
  setFieldValue,
  touched,
  errors,
  handleBlur,
  values,
  selectedImage,
  openImagePicker,
  selectedFile,
}) {
  const [genderList, setGenderlist] = useState([]);
  const [gender, setGender] = useState(values.gender);

  const [isFocus, setIsFocus] = useState(false);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setGenderlist([
      {name: 'Male', value: 'male'},
      {name: 'Female', value: 'female'},
    ]);
    // if (values?.dateOfBirth === 'null' || values?.dateOfBirth === null) {
    //   setDate(new Date());
    // } else {
    //   setDate(new Date(values?.dateOfBirth));
    // }
  }, []);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <DatePicker
          mode="date"
          modal
          open={open}
          date={date}
          // minimumDate={new Date()}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setFieldValue('dateOfBirth', date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          // onConfirm={(date) => setFieldValue('dateOfBirth', date)}
          // onDateChange={date => {
          //   setFieldValue('dateOfBirth', date);
          // }}
        />
        <View
          style={{
            marginBottom: 24,
          }}>
          <View
            style={{
              padding: 24,
              alignItems: 'center',
              gap: 10,
            }}>
            {selectedFile ? (
              <View
                style={{
                  width: 128,
                  height: 128,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f4f4f4',
                }}
                borderRadius={64}>
                <ActivityIndicator size="large" color="#000" />
              </View>
            ) : (
              <Image
                style={{width: 128, height: 128}}
                borderRadius={64}
                resizeMode="stretch"
                source={
                  selectedImage
                    ? {uri: selectedImage.uri}
                    : require('../../assets/images/db-profile-icon.png')
                }
              />
            )}

            <TouchableOpacity
              onPress={() => openImagePicker(setFieldValue)}
              style={{
                borderRadius: 8,
                backgroundColor: '#F7F7F7',
                padding: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#808080',
                  textAlign: 'center',
                  fontFamily: 'Helvetica',
                  fontSize: 14,
                  lineHeight: 20,
                  textDecorationLine: 'underline',
                }}>
                Change Image
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View>
            <Text style={styles.label}>First Name</Text>
            <CustomInput
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              placeholder={'Enter firstName'}
            />
            {touched.firstName && errors.firstName ? (
              <Text style={{color: 'red'}}>{errors.firstName}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.label}>Last Name</Text>
            <CustomInput
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              placeholder={'Enter lastname'}
            />
            {touched.lastName && errors.lastName ? (
              <Text style={{color: 'red'}}>{errors.lastName}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.label}>Phone </Text>
            <CustomInput
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              placeholder={'Enter Number'}
            />
            {touched.phoneNumber && errors.phoneNumber ? (
              <Text style={{color: 'red'}}>{errors.phoneNumber}</Text>
            ) : null}
          </View>
          <View>
            <View style={dropdownStyle.container}>
              <Text style={styles.label}>Gender</Text>

              <Dropdown
                style={dropdownStyle.dropdown}
                placeholderStyle={dropdownStyle.placeholderStyle}
                selectedTextStyle={dropdownStyle.selectedTextStyle}
                iconStyle={dropdownStyle.iconStyle}
                data={genderList?.map(item => {
                  return {
                    label: item?.name,
                    value: item?.value,
                  };
                })}
                search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Gender' : 'Select Gender'}
                value={gender}
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                  handleBlur('gender');
                  setIsFocus(false);
                }}
                onChange={item => {
                  setFieldValue('gender', item.value);
                  setGender(item.value);
                  setIsFocus(false);
                }}
              />
              {touched.gender && errors.gender ? (
                <Text style={{color: 'red'}}>{errors.gender}</Text>
              ) : null}
            </View>
          </View>
          <View>
            <Text style={styles.label}>Date of Birth</Text>
            <View>
              <CustomInput
                // onChangeText={handleChange('dateOfBirth')}
                // onBlur={handleBlur('dateOfBirth')}
                editable={false}
                value={dayjs(date).format('DD / MMM / YYYY')}
                placeholder={'DD/MM/YYYY'}
              />
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={{
                  position: 'absolute',
                  right: 15,
                  top: 15,
                }}>
                <CalenderIco />
              </TouchableOpacity>
            </View>
            {touched.dateOfBirth && errors.dateOfBirth ? (
              <Text style={{color: 'red'}}>{errors.dateOfBirth}</Text>
            ) : null}
          </View>
        </View>
        <View style={{marginVertical: 24}}>
          <Button onpress={() => setcurrentStep(2)} title={'Next'} />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  inputGroup: {
    gap: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    lineHeight: 24,
    color: '#000',
  },
  iconContainer: {
    width: 32,
    height: 32,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  username: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 24,
    lineHeight: 32,
    textTransform: 'uppercase',
  },
  email: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  date: {
    color: '#999',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 16,
  },
});
