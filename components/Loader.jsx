import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, Text, View, Animated, Easing} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Loader() {
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  useEffect(() => {
    spin();
  }, []);

  const spinAnimation = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
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
          <Animated.Image
            style={{
              transform: [{rotate: spinAnimation}],
            }}
            source={require('../assets/images/loaderUnit.png')}
          />
          <Text
            style={{
              textAlign: 'center',
              marginBottom: 16,
              marginTop: 19,
              fontSize: 24,
              fontFamily: 'Helvetica',
              color: '#111',
            }}>
            Loading
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
    </SafeAreaView>
  );
}

export default Loader;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 167,
    alignItems: 'center',
  },
});
