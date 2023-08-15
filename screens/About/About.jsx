import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header';

function About({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'About dertbag'} navigation={navigation} />
      <View style={styles.contentContainer}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../assets/images/aboutLogo.png')} />
        </View>
        <View style={{gap: 24}}>
          <View>
            <Text style={styles.descCaption}>
              DERTBAG is an art project by artist, Philip Post,
            </Text>
            <Text style={styles.descCaption}>established in 2007.</Text>
          </View>
          <View>
            <Text style={styles.descCaption}>
              Based in Connecticut, the DERTBAG atelier opened
            </Text>
            <Text style={styles.descCaption}>
              in 2013. It operates as a store and art studio.
            </Text>
          </View>
        </View>
        <View style={{gap: 32}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Helvetica',
              color: '#000',
              fontSize: 14,
            }}>
            Dertbag for iOS 1.0.0
          </Text>
          <View
            style={{
              paddingVertical: 24,
              paddingHorizontal: 16,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                // textAlign: 'center',
                fontFamily: 'Helvetica',
                color: '#000',
                fontSize: 14,
              }}>
              Version 1.0.0
            </Text>
            <Text
              style={{
                // textAlign: 'center',
                fontFamily: 'Helvetica',
                color: '#006FCF',
                fontSize: 14,
                textDecorationStyle: 'solid',
                textDecorationLine: 'underline',
              }}>
              Release Notes
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Helvetica-Bold',
          color: '#000',
          fontSize: 14,
        }}>
        © 2023 Dertbag. All Right Reserved
      </Text>
    </SafeAreaView>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    // alignItems: 'center',
    gap: 68,
  },
  descCaption: {
    textAlign: 'center',
    fontFamily: 'Helvetica',
    color: '#111',
    fontSize: 16,
  },
});
