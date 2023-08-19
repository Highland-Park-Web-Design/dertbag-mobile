import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from './Button';

function Failed({onpress}) {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image source={require('../assets/images/failedImg.png')} />
          <Text
            style={{
              textAlign: 'center',
              marginBottom: 16,
              marginTop: 19,
              fontSize: 24,
              fontFamily: 'Helvetica',
              color: '#F00',
            }}>
            Failed
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'Helvetica-Light',
              color: '#484848',
            }}>
            Please wait...
          </Text>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <Button onpress={onpress} variation={'ghost'} title={'Retry'} />
      </View>
    </SafeAreaView>
  );
}

export default Failed;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 167,
    alignItems: 'center',
  },
});
