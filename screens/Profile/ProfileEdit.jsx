import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
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

function ProfileEdit({navigation}) {
  const [currentStep, setcurrentStep] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Profile Edit'} />
      {currentStep === 1 && <Step1 setcurrentStep={setcurrentStep} />}
      {currentStep === 2 && <AddressEdit setcurrentStep={setcurrentStep} />}
      {currentStep === 3 && <BillingEdit setcurrentStep={setcurrentStep} />}
    </SafeAreaView>
  );
}

export default ProfileEdit;

function Step1({setcurrentStep}) {
  const [genderList, setGenderlist] = useState([]);
  const [gender, setGender] = useState([]);

  const [isFocus, setIsFocus] = useState(false);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <>
      <View
        style={{
          paddingHorizontal: 24,
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/images/stepper1.png')} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
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
            <Image
              style={{width: 128, height: 128}}
              borderRadius={64}
              source={require('../../assets/images/profileImg.png')}
            />
            <TouchableOpacity
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
            <CustomInput placeholder={'Enter Name'} />
          </View>
          <View>
            <Text style={styles.label}>Last Name</Text>
            <CustomInput placeholder={'Enter Name'} />
          </View>
          <View>
            <View style={dropdownStyle.container}>
              <Text style={styles.label}>Country</Text>

              <Dropdown
                style={dropdownStyle.dropdown}
                placeholderStyle={dropdownStyle.placeholderStyle}
                selectedTextStyle={dropdownStyle.selectedTextStyle}
                iconStyle={dropdownStyle.iconStyle}
                data={genderList?.map(item => {
                  return {
                    label: item?.name,
                    value: item?.id,
                  };
                })}
                search
                // maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Gender' : 'Select Gender'}
                value={gender}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setGender(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Date of Birth</Text>
            <View
              style={
                {
                  // flexDirection: 'row',
                }
              }>
              <CustomInput placeholder={'DD/MM/YYYY'} />
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
