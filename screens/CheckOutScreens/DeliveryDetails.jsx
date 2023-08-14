import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ActiveIcon from '../../Icons/ActiveSquareSelect.svg';
import InActiveIcon from '../../Icons/InactiveSquareSelect.svg';
import CustomInput from '../../components/input';
import Button from '../../components/Button';
import {Dropdown} from 'react-native-element-dropdown';

function DeliveryDetails({navigation}) {
  const [deliveryMethod, setDeliveryMethod] = useState(true);
  const [states, setStates] = useState([{name: 'NY', id: 1}]);
  const [state, setstate] = useState([]);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);

  const [isFocus, setIsFocus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Delivery Details'} />
      <ScrollView style={styles.contentContainer}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 24,
            color: '#000',
            marginBottom: 24,
          }}>
          SHIPPING METHOD
        </Text>
        <View style={{gap: 24}}>
          <View style={{flexDirection: 'row', gap: 16}}>
            <TouchableOpacity onPress={() => setDeliveryMethod(true)}>
              {deliveryMethod ? <ActiveIcon /> : <InActiveIcon />}
            </TouchableOpacity>

            <View>
              <Text style={{fontWeight: '400', fontSize: 16, color: '#000'}}>
                STORE PICKUP
              </Text>
              <Text style={{fontWeight: '300', fontSize: 14, color: '#000'}}>
                FREE
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', gap: 16}}>
            <TouchableOpacity onPress={() => setDeliveryMethod(false)}>
              {!deliveryMethod ? <ActiveIcon /> : <InActiveIcon />}
            </TouchableOpacity>

            <View>
              <Text style={{fontWeight: '400', fontSize: 16, color: '#000'}}>
                STANDARD SHIPPING
              </Text>
              <Text style={{fontWeight: '300', fontSize: 14, color: '#000'}}>
                $10.00
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingVertical: 24, gap: 16}}>
          <View>
            <Text style={styles.label}>Full Name</Text>
            <CustomInput placeholder={'Your Name'} />
          </View>
          <View>
            <Text style={styles.label}>Phone (Optional)</Text>
            <CustomInput placeholder={'Enter Number'} />
          </View>
          <View>
            <Text style={styles.label}>Email</Text>
            <CustomInput placeholder={'Enter Email'} />
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
          <View>
            <Text style={styles.label}>Address</Text>
            <CustomInput placeholder={'Enter Address'} />
          </View>
          <View>
            <Text style={styles.label}>City</Text>
            <CustomInput placeholder={'Enter city name'} />
          </View>
          <View>
            <View style={dropdownStyle.container}>
              <Text style={styles.label}>State</Text>

              <Dropdown
                style={dropdownStyle.dropdown}
                placeholderStyle={dropdownStyle.placeholderStyle}
                selectedTextStyle={dropdownStyle.selectedTextStyle}
                inputSearchStyle={dropdownStyle.inputSearchStyle}
                iconStyle={dropdownStyle.iconStyle}
                data={states?.map(item => {
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
                searchPlaceholder="Search..."
                value={state}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setstate(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
          <View>
            <Text style={styles.label}>Zip Code</Text>
            <CustomInput placeholder={'Enter Code'} />
          </View>
          <View>
            <Button
              onpress={() => navigation.navigate('StoreDetails')}
              title={'CONTINUE'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DeliveryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  label: {
    color: '#000',
    // fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 4,
  },
});

const dropdownStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // paddingVertical: 16,
    // paddingHorizontal: 10,
    // marginTop: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#0000001a',
    backgroundColor: '#f4f4f4',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    height: 56,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    // fontFamily: 'Poppins',
  },
  selectedTextStyle: {
    fontSize: 16,
    // fontFamily: 'Poppins',
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
