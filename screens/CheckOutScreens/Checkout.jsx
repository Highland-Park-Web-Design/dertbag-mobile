import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/Header';
import CustomInput from '../../components/input';
import ActiveIcon from '../../Icons/ActiveRoundSelect.svg';
import InActiveIcon from '../../Icons/InactiveRoundSelect.svg';
import Button from '../../components/Button';
import {WebView} from 'react-native-webview';

function Checkout({navigation, route}) {
  const [paymentState, setPaymentState] = useState('card');
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Checkout'} />
      {/* <ScrollView style={styles.contentContainer}>
        <View>
          <Text style={styles.label}>Add Note</Text>
          <CustomInput
            placeholder={'Add special instruction for your order'}
            numberOfLines={10}
          />
        </View>
        <View style={styles.paymentContainer}>
          <Text
            style={{
              color: '#000',
              // fontFamily: 'Helvetica',
              fontSize: 16,
              fontWeight: '700',
              marginBottom: 4,
            }}>
            PAYMENT DETAILS
          </Text>
          <TouchableOpacity
            onPress={() => setPaymentState('card')}
            style={
              paymentState === 'card' ? styles.methodContainer : styles.inactive
            }>
            <View style={{flexDirection: 'row', gap: 16, alignItems: 'center'}}>
              {paymentState === 'card' ? <ActiveIcon /> : <InActiveIcon />}
              <Text style={styles.methodText}>Card</Text>
            </View>
            <Image source={require('../../assets/images/AcceptedCard.png')} />
          </TouchableOpacity>
          {paymentState === 'card' && (
            <View style={{gap: 16}}>
              <View>
                <Text style={styles.label}>Card Number</Text>
                <CustomInput placeholder={'Enter Number'} />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{width: '47%'}}>
                  <Text style={styles.label}>Exp. Date</Text>
                  <CustomInput placeholder={'MM / YY'} />
                </View>
                <View style={{width: '47%'}}>
                  <Text style={styles.label}>CVV</Text>
                  <CustomInput placeholder={'XXX'} />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Name on Card</Text>
                <CustomInput placeholder={'Write Name'} />
              </View>
              <View>
                <Button title={'PAY NOW'} />
              </View>
            </View>
          )}

          <TouchableOpacity
            onPress={() => setPaymentState('shoppay')}
            style={
              paymentState === 'shoppay'
                ? styles.methodContainer
                : styles.inactive
            }>
            <View style={{flexDirection: 'row', gap: 16, alignItems: 'center'}}>
              {paymentState === 'shoppay' ? <ActiveIcon /> : <InActiveIcon />}
              <Text style={styles.methodText}>ShopPay</Text>
            </View>
            <Image source={require('../../assets/images/shopPay.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPaymentState('paypal')}
            style={
              paymentState === 'paypal'
                ? styles.methodContainer
                : styles.inactive
            }>
            <View style={{flexDirection: 'row', gap: 16, alignItems: 'center'}}>
              {paymentState === 'paypal' ? <ActiveIcon /> : <InActiveIcon />}

              <Text style={styles.methodText}>PayPal</Text>
            </View>
            <Image source={require('../../assets/images/PayPal.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView> */}
      <WebView
        // originWhitelist={['*']}
        source={{uri: route.params.data.webUrl}}
      />
    </SafeAreaView>
  );
}

export default Checkout;

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
  paymentContainer: {
    paddingVertical: 24,
    gap: 16,
  },
  methodContainer: {
    padding: 16,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.40)',
    borderWidth: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  methodText: {
    color: '#222',
    // fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '400',
  },
  inactive: {
    borderColor: 'rgba(0, 0, 0, 0.10)',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
