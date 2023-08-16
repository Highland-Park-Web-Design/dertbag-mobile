import React from 'react';
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
  console.log(route?.params?.id);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'DERTBAG ATELIER 🎨'} />
      <ScrollView style={styles.contentContainer}>
        <View>
          <View>
            <Image
              style={{
                width: 380,
                height: 335,
              }}
              source={require('../../assets/images/StoreImage.png')}
            />
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
                ARCADE MALL 1001 MAIN ST. #21 BRIDGEPORT, CT 06604
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
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.captionText}>THURSDAY</Text>
                <Text style={[styles.captionText, {textAlign: 'right'}]}>
                  12 - 6PM
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.captionText}>FRIDAY</Text>
                <Text style={[styles.captionText, {textAlign: 'right'}]}>
                  12 - 6PM
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.captionText}>SATURDAY</Text>
                <Text style={[styles.captionText, {textAlign: 'right'}]}>
                  12 - 6PM
                </Text>
              </View>
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
    fontSize: 16,
    fontWeight: '400',
  },
});
