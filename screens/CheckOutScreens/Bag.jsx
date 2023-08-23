import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RightIco from '../../Icons/RightIco.svg';
import TrashIco from '../../Icons/TrashIco.svg';
import Button from '../../components/Button';

function Bag({navigation}) {
  const [bagState, setBagState] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingTop: 24, paddingBottom: 16}}>
        <Text style={{fontWeight: '700', fontSize: 32, color: '#000'}}>
          MY BAG
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 24,
            color: '#000',
            marginBottom: 16,
          }}>
          YOUR BAG ITEMS
        </Text>
        {bagState ? (
          <CartItem setBagState={setBagState} />
        ) : (
          <EmptyState setBagState={setBagState} />
        )}

        <View style={styles.detailsContainer}>
          <Text style={{fontWeight: '700', fontSize: 16, color: '#000'}}>
            DELIVERY DETAILS
          </Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  color: '#000',
                }}>
                STORE PICKUP
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('DeliveryDetails')}>
                <RightIco />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontWeight: '400',
                fontSize: 12,
                color: '#000',
              }}>
              FREE
            </Text>
          </View>
        </View>
        <View style={styles.summaryGroup}>
          <View style={styles.summaryGroupItem}>
            <Text style={styles.GroupText}>SHIPPING</Text>
            <Text style={styles.GroupText}>$0.00</Text>
          </View>
          <View style={styles.summaryGroupItem}>
            <Text style={styles.GroupText}>SUBTOTAL</Text>
            <Text style={styles.GroupText}>$0.00</Text>
          </View>
          <View style={styles.summaryGroupItem}>
            <Text style={styles.GroupBoldText}>TOTAL</Text>
            <Text style={styles.GroupBoldText}>$0.00</Text>
          </View>
        </View>
        <View style={{paddingVertical: 24, gap: 24}}>
          <Button
            onpress={() => navigation.navigate('Checkout')}
            disabled={bagState ? false : true}
            title={'proceed to checkout'}
          />
          {bagState && <Button variation={'ghost'} title={'Get More stuffs'} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Bag;

function EmptyState({setBagState}) {
  return (
    <View style={styles.EmptyContainer}>
      <Image source={require('../../assets/images/Tags.png')} />
      <Text style={{fontWeight: '400', fontSize: 16, color: '#111'}}>
        CART IS EMPTY
      </Text>
      <TouchableOpacity onPress={() => setBagState(true)}>
        <Text style={{fontWeight: '300', fontSize: 12, color: '#111'}}>
          ADD ITEM TO BAG
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function CartItem({
  prodTitle,
  prodAmmout,
  prodPrice,
  prodCaption,
  prodQuantity,
  setBagState,
  // prodQuantity,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // gap: 16,
      }}>
      <Image
        style={{width: 129, height: 112, borderRadius: 4}}
        source={require('../../assets/images/cartItemImg.png')}
      />
      <View style={{justifyContent: 'space-between', width: '50%'}}>
        <View style={{gap: 4}}>
          <Text style={styles.CartItemTitle}>BRAILLE TRENCH...</Text>
          <Text style={styles.CartItemCaption}>LONGSLEEVE</Text>
          <Text style={styles.CartItemCaption}>MEDIUM</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignSelf: 'flex-end',
          }}>
          <Text>$360.00</Text>
          <Text>QTY: 1</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => setBagState(false)}>
        <TrashIco />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  EmptyContainer: {
    height: 287,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderRadius: 4,
    backgroundColor: '#FAFAFA',
  },
  detailsContainer: {
    gap: 16,
    paddingVertical: 16,
  },
  summaryGroup: {
    paddingVertical: 12,
    gap: 16,
    // backgroundColor: 'green',
  },
  summaryGroupItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  GroupText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#000',
  },
  GroupBoldText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
  CartItemTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000',
  },
  CartItemCaption: {
    fontWeight: '400',
    fontSize: 14,
    color: '#000',
  },
});
