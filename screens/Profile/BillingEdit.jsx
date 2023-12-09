import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import ActiveSelect from '../../Icons/ActiveSquareSelect.svg';
import InActiveSelect from '../../Icons/InactiveSquareSelect.svg';
import CustomInput from '../../components/input';
import Button from '../../components/Button';
import {useFormikContext} from 'formik';

function BillingEdit({
  navigation,
  setcurrentStep,
  handleChange,
  // setFieldValue,
  touched,
  errors,
  handleBlur,
  handleSubmit,
  setCheckState,
  checkState,
  submitting,
}) {
  const {values, setFieldValue} = useFormikContext();
  useEffect(() => {
    if (checkState) {
      // setbilling(prevState => {
      //   return {
      //     ...prevState,
      //     country: values?.country,
      //     state: values?.state,
      //     city: values?.city,
      //     address: values?.address,
      //   };
      // });
      setFieldValue('billingAddressCountry', values?.country);
      setFieldValue('billingAddressState', values?.state);
      setFieldValue('billingAddressCity', values?.city);
      setFieldValue('billingAddress', values?.address);
    } else {
      setFieldValue('billingAddressCountry', values?.billingAddressCountry);
      setFieldValue('billingAddressState', values?.billingAddressState);
      setFieldValue('billingAddressCity', values?.billingAddressCity);
      setFieldValue('billingAddress', values?.billingAddress);
    }
  }, [checkState]);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <View style={styles.inputGroup}>
          <View
            style={{
              gap: 16,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                setCheckState(prev => {
                  setFieldValue('sameAddress', !prev);
                  return !prev;
                });
              }}>
              {checkState ? <ActiveSelect /> : <InActiveSelect />}
            </TouchableOpacity>

            <Text
              style={{
                color: '#000',
                fontFamily: 'Helvetica',
                fontSize: 14,
                fontWeight: '300',
                lineHeight: 24,
              }}>
              Use same details as personal address
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Address</Text>
            <CustomInput
              onChangeText={handleChange('billingAddress')}
              onBlur={handleBlur('billingAddress')}
              value={checkState ? values.address : values.billingAddress}
              placeholder={'Enter Address'}
              editable={!checkState}
              selectTextOnFocus={!checkState}
            />
            {touched.billingAddress && errors.billingAddress ? (
              <Text style={{color: 'red'}}>{errors.billingAddress}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.label}>City</Text>
            <CustomInput
              onChangeText={handleChange('billingAddressCity')}
              onBlur={handleBlur('billingAddressCity')}
              value={checkState ? values.city : values.billingAddressCity}
              placeholder={'Enter City'}
              editable={!checkState}
              selectTextOnFocus={!checkState}
            />
            {touched.billingAddressCity && errors.billingAddressCity ? (
              <Text style={{color: 'red'}}>{errors.billingAddressCity}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.label}>State</Text>
            <CustomInput
              onChangeText={handleChange('billingAddressState')}
              onBlur={handleBlur('billingAddressState')}
              value={checkState ? values.state : values.billingAddressState}
              placeholder={'Enter State'}
              editable={!checkState}
              selectTextOnFocus={!checkState}
            />
            {touched.billingAddressState && errors.billingAddressState ? (
              <Text style={{color: 'red'}}>{errors.billingAddressState}</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.label}>Country</Text>
            <CustomInput
              onChangeText={handleChange('billingAddressCountry')}
              onBlur={handleBlur('billingAddressCountry')}
              value={checkState ? values.country : values.billingAddressCountry}
              placeholder={'Enter Country'}
              editable={!checkState}
              selectTextOnFocus={!checkState}
            />
            {touched.billingAddressCountry && errors.billingAddressCountry ? (
              <Text style={{color: 'red'}}>{errors.billingAddressCountry}</Text>
            ) : null}
          </View>
          {/* <View>
            <View style={dropdownStyle.container}>
              <Text style={styles.label}>State</Text>

              <Dropdown
                style={dropdownStyle.dropdown}
                placeholderStyle={dropdownStyle.placeholderStyle}
                selectedTextStyle={dropdownStyle.selectedTextStyle}
                iconStyle={dropdownStyle.iconStyle}
                data={state?.map(item => {
                  return {
                    label: item?.name,
                    value: item?.id,
                  };
                })}
                search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select State' : 'Select State'}
                value={states}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setStates(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View>
            <View style={dropdownStyle.container}>
              <Text style={styles.label}>Country</Text>

              <Dropdown
                style={dropdownStyle.dropdown}
                placeholderStyle={dropdownStyle.placeholderStyle}
                selectedTextStyle={dropdownStyle.selectedTextStyle}
                inputSearchStyle={dropdownStyle.inputSearchStyle}
                iconStyle={dropdownStyle.iconStyle}
                data={countries?.map(item => {
                  return {
                    label: item?.name,
                    value: item?.id,
                  };
                })}
                search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select country' : 'Select country'}
                searchPlaceholder="Search..."
                value={country}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setCountry(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View> */}
        </View>
        <View
          style={{
            marginTop: 50,
            marginBottom: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '47%'}}>
            <Button
              onpress={() => setcurrentStep(2)}
              variation={'ghost'}
              title={'Previous'}
            />
          </View>
          <View style={{width: '47%'}}>
            <Button
              disabled={submitting}
              onPress={handleSubmit}
              title={submitting ? 'Updating...' : 'Update'}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default BillingEdit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    padding: 24,
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
