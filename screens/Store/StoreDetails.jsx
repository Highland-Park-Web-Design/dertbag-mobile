import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Button from '../../components/Button';

function StoreDetails({navigation, route}) {
  const store = route.params.id;
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={store.name} />
      <ScrollView style={styles.contentContainer}>
        <View>
          <View>
            {store.imageUrl ? (
              <Image
                style={{
                  width: '100%',
                  height: 335,
                }}
                borderRadius={16}
                source={{uri: store.imageUrl}}
              />
            ) : (
              <Image
                style={{
                  width: '100%',
                  height: 335,
                }}
                source={require('../../assets/images/StoreImage.png')}
              />
            )}
          </View>
          <View
            style={{
              gap: 4,
              marginTop: 16,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#111',
                width: 16,
                height: 8,
                borderRadius: 4,
              }}></View>
            <View
              style={{
                backgroundColor: '#D9D9D9',
                width: 8,
                height: 8,
                borderRadius: 4,
              }}></View>
          </View>
        </View>
        <View style={{gap: 21, marginTop: 32}}>
          <View style={{gap: 16}}>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '700',
              }}>
              ADDRESS
            </Text>
            <View>
              <Text
                style={{
                  width: '40%',
                  color: '#000',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                {store.location}
              </Text>
            </View>
          </View>
          <View style={{gap: 16}}>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '700',
              }}>
              OPEN HOURS
            </Text>
            <View style={{gap: 6}}>
              {store.openingHours &&
                store.openingHours.map(time => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.captionText}>{time.day}</Text>
                    <Text style={[styles.captionText, {textAlign: 'right'}]}>
                      {time.openingTime} - {time.closingTime}
                    </Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
        <View style={{marginTop: 32, marginBottom: 10}}>
          <Button
            // onpress={() => navigation.navigate('Checkout')}
            title={'GET DIRECTION'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default StoreDetails;

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
  captionText: {
    width: '50%',
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '400',
  },
});
