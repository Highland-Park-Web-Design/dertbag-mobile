import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {shopifyClient} from '../../utils';
import {getData} from '../../store';

function Bag({navigation}) {
  const [bagState, setBagState] = useState(false);
  const [bagItems, setBagItems] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shipping, setShipping] = useState(0);
  const [subtotal, setSubTotal] = useState(0);
  const isFocused = useIsFocused();
  const [checkoutURL, setCheckoutURL] = useState([]);

  // const [total, setTotal] = useState(0);
  async function getCartList() {
    try {
      const value = await AsyncStorage.getItem('CartItems');

      if (value === null) {
        setBagState(false);
      }

      const ParsedList = JSON.parse(value);
      setBagItems(ParsedList);

      const prices = ParsedList?.map(item => item.price * item.quantity);

      const checkoutId = await getData('checkoutId');
      shopifyClient.checkout
        .fetch(checkoutId)
        .then(checkout => {
          setCheckoutURL(checkout);
        })
        .catch(err => console.log(err));

      if (prices) {
        const totalPrice = prices?.reduce(
          (acc, currentPrice) => acc + currentPrice,
          0,
        );
        setSubTotal(totalPrice);
      }
      setBagState(true);
    } catch (err) {
      console.log(err);
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
  }

  async function RemoveItemFromCart(id, variantID) {
    try {
      const value = await AsyncStorage.getItem('CartItems');

      const parsedData = JSON.parse(value);

      const itemIndexToRemove = parsedData.findIndex(item => item.id === id);

      if (itemIndexToRemove !== -1) {
        parsedData.splice(itemIndexToRemove, 1);

        const checkoutId = await getData('checkoutId');

        if (checkoutId) {
          const findLineItem = checkoutURL.lineItems.find(item => {
            return item.variant.id === variantID;
          });

          if (findLineItem) {
            const lineItemIdsToRemove = [findLineItem.id];
            shopifyClient.checkout
              .removeLineItems(checkoutId, lineItemIdsToRemove)
              .then(checkout => {
                return checkout;
              });
          }
        }

        await AsyncStorage.setItem('CartItems', JSON.stringify(parsedData));
      }
      getCartList();
      setBagState(true);
    } catch (err) {
      console.log(err);
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
  }

  useEffect(() => {
    getCartList();
  }, [isFocused]);

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

        {bagItems ? (
          <View style={{gap: 10}}>
            {bagItems &&
              bagItems?.map(item => (
                <CartItem
                  image={item?.image}
                  prodPrice={`$${item.price}`}
                  prodQuantity={item.quantity}
                  prodTitle={item.name}
                  prodVariant={item?.variant}
                  key={item.id}
                  setBagState={setBagState}
                  deleteProd={() => RemoveItemFromCart(item.id, item.variantID)}
                />
              ))}
          </View>
        ) : (
          <EmptyState navigation={navigation} setBagState={setBagState} />
        )}

        {bagItems && bagItems?.length === 0 && (
          <EmptyState navigation={navigation} setBagState={setBagState} />
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
            <Text style={styles.GroupText}>${subtotal}.00</Text>
          </View>
          <View style={styles.summaryGroupItem}>
            <Text style={styles.GroupBoldText}>TOTAL</Text>
            <Text style={styles.GroupBoldText}>${subtotal + shipping}.00</Text>
          </View>
        </View>
        <View style={{paddingVertical: 24, gap: 24}}>
          <Button
            onpress={() => navigation.navigate('Checkout', {data: checkoutURL})}
            disabled={bagState ? false : true}
            title={'proceed to checkout'}
          />
          {bagState && (
            <Button
              onpress={() => navigation.navigate('FOR YOU')}
              variation={'ghost'}
              title={'Get More stuffs'}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Bag;

function EmptyState({setBagState, navigation}) {
  return (
    <View style={styles.EmptyContainer}>
      <Image source={require('../../assets/images/Tags.png')} />
      <Text style={{fontWeight: '400', fontSize: 16, color: '#111'}}>
        CART IS EMPTY
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('FOR YOU')}>
        <Text style={{fontWeight: '300', fontSize: 12, color: '#111'}}>
          ADD ITEM TO BAG
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function CartItem({
  prodTitle,
  prodVariant,
  prodPrice,
  prodQuantity,
  deleteProd,
  image,
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
        source={{uri: image}}
      />
      <View style={{justifyContent: 'space-between', width: '50%'}}>
        <View style={{gap: 4}}>
          <Text style={styles.CartItemTitle}>{prodTitle}</Text>
          {/* <Text style={styles.CartItemCaption}>LONGSLEEVE</Text> */}
          <Text style={styles.CartItemCaption}>{prodVariant}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignSelf: 'flex-end',
          }}>
          <Text>{prodPrice}</Text>
          <Text>QTY: {prodQuantity}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={deleteProd}>
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
