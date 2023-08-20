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
import CalenderIco from '../../Icons/calenderIco.svg';
import CustomInput from '../../components/input';
import Button from '../../components/Button';
import dropdownStyle from '../../components/dropdown.style';
import {Dropdown} from 'react-native-element-dropdown';

function AddressEdit({setcurrentStep}) {
  const [state, setstate] = useState([]);
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);

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
        <Image source={require('../../assets/images/stepper2.png')} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <View style={styles.inputGroup}>
          <View>
            <Text style={styles.label}>Address</Text>
            <CustomInput placeholder={'Enter Address'} />
          </View>
          <View>
            <Text style={styles.label}>City</Text>
            <CustomInput placeholder={'Enter City'} />
          </View>
          <View>
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
          </View>
        </View>

        <View
          style={{
            marginTop: 70,
            marginBottom: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '47%'}}>
            <Button
              onpress={() => setcurrentStep(1)}
              variation={'ghost'}
              title={'Previous'}
            />
          </View>
          <View style={{width: '47%'}}>
            <Button onpress={() => setcurrentStep(3)} title={'Next'} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default AddressEdit;

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
