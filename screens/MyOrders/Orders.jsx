import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import RightIco from '../../Icons/RightIco.svg';
import CheckIco from '../../Icons/checkIco.svg';
import XIco from '../../Icons/xIco.svg';

function Orders({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'My Orders'} />
      <ScrollView style={styles.contentContainer}>
        <OrderItem
          navigation={navigation}
          status={''}
          number={'DRTBg-3948362'}
          itemAmount={3}
        />
        <OrderItem
          navigation={navigation}
          status={'canceled'}
          number={'DRTBg-3948362'}
          itemAmount={3}
        />

        <OrderItem
          navigation={navigation}
          status={''}
          number={'DRTBg-3948362'}
          itemAmount={3}
        />
        <OrderItem
          navigation={navigation}
          status={'canceled'}
          number={'DRTBg-3948362'}
          itemAmount={3}
        />
        <OrderItem
          navigation={navigation}
          status={'canceled'}
          number={'DRTBg-3948362'}
          itemAmount={3}
        />
        <OrderItem status={''} number={'DRTBg-3948362'} itemAmount={3} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Orders;

function OrderItem({number, itemAmount, date, id, status, navigation}) {
  return (
    <View style={styles.OrderCard}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.CardTitleText}>Order Number:</Text>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Helvetica',
            fontSize: 16,
            width: '50%',
            textTransform: 'uppercase',
            textAlign: 'right',
          }}>
          {number}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Helvetica',
            fontSize: 16,
            width: '30%',
          }}>
          {itemAmount} Items
        </Text>
        <Text
          style={{
            color: '#999',
            fontFamily: 'Helvetica-Light',
            fontSize: 14,
            width: '70%',
            textAlign: 'right',
          }}>
          14 June, 2023 at 12:00 PM
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {status === 'canceled' ? (
          <View style={styles.canceledGroup}>
            <XIco />
            <Text style={styles.canceledText}>Canceled</Text>
          </View>
        ) : (
          <View style={styles.successGroup}>
            <CheckIco />
            <Text style={styles.successText}>Fulfilled</Text>
          </View>
        )}

        <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')}>
          <RightIco />
        </TouchableOpacity>
      </View>
    </View>
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
  OrderCard: {
    paddingVertical: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    borderBottomWidth: 1,
    gap: 8,
  },
  CardTitleText: {
    color: '#000',
    fontFamily: 'Helvetica-Light',
    fontSize: 16,
    width: '50%',
  },
  successGroup: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
    gap: 8,
    flexDirection: 'row',
    backgroundColor: '#CFC',
  },
  successText: {
    color: '#090',
    fontFamily: 'Helvetica',
    fontSize: 13,
  },
  canceledGroup: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
    gap: 8,
    flexDirection: 'row',
    backgroundColor: '#FCC',
  },
  canceledText: {
    color: '#F00',
    fontFamily: 'Helvetica',
    fontSize: 13,
  },
});
