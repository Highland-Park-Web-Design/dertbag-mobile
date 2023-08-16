import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
// import {} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import RightIco from '../../Icons/RightIco.svg';

function Store({navigation}) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Header title={'Stores'} navigation={navigation} />
      <ScrollView style={styles.contentContainer}>
        <View style={{gap: 16, marginBottom: 50}}>
          <StoreCard
            navigation={navigation}
            id={1}
            address={'ARCADE MALL 1001 MAIN ST. #21, BRIDGEPORT, CT 06604'}
            country={'United State'}
            title={' DERTBAG ATELIER 🎨'}
            img={
              <Image
                navigation={navigation}
                style={{
                  width: '100%',
                  height: 244,
                }}
                borderTopRightRadius={6}
                borderTopLeftRadius={6}
                source={require('../../assets/images/Storemono.png')}
              />
            }
          />
          <StoreCard
            navigation={navigation}
            id={2}
            address={'ARCADE MALL 1001 MAIN ST. #21, BRIDGEPORT, CT 06604'}
            country={'United State'}
            title={' DERTBAG ATELIER 🎨'}
            img={
              <Image
                style={{
                  width: '100%',
                  height: 244,
                }}
                borderTopRightRadius={6}
                borderTopLeftRadius={6}
                source={require('../../assets/images/Storemono-1.png')}
              />
            }
          />
          <StoreCard
            navigation={navigation}
            id={3}
            address={'ARCADE MALL 1001 MAIN ST. #21, BRIDGEPORT, CT 06604 '}
            country={'United State'}
            title={' DERTBAG ATELIER 🎨'}
            img={
              <Image
                style={{
                  width: '100%',
                  height: 244,
                }}
                borderTopRightRadius={6}
                borderTopLeftRadius={6}
                source={require('../../assets/images/Storemono.png')}
              />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Store;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    // flex: 1,
    // height: '100%',
    marginBottom: 115,
  },
});

function StoreCard({img, title, address, country, id, navigation}) {
  return (
    <View
      style={{
        gap: 16,
      }}>
      {/* <Image
        style={{
          width: '100%',
          height: 244,
        }}
        borderTopRightRadius={6}
        borderTopLeftRadius={6}
        source={{uri: img}}

        /> */}
      {img}
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '85%',
            gap: 4,
          }}>
          <Text
            style={{
              fontFamily: 'Helvetica-Bold',
              fontSize: 16,
              color: '#000',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: 'Helvetica',
              fontSize: 14,
              color: 'rgba(0, 0, 0, 0.60)',
              lineHeight: 24,
            }}>
            {address}
          </Text>
          <Text
            style={{
              fontFamily: 'Helvetica-Bold',
              fontSize: 14,
              color: '#000',
            }}>
            {country}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('StoreDetails', {id: id})}
          style={{
            width: '15%',
            flexDirection: 'row',
            paddingTop: 10,
            justifyContent: 'flex-end',
          }}>
          <RightIco />
        </TouchableOpacity>
      </View>
    </View>
  );
}
