import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

function Splash() {
  const [currentSplash, setCurrentSplash] = useState(1);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ImageBackground
        style={styles.imageBackground}
        source={require(`../assets/images/splash-bg-1.jpeg`)}>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeText}>Welcome To</View>

          <Text style={styles.dertbagBrand}>
            der
            <View style={styles.flipText}>
              <Text
                style={{
                  color: '#ffffff',
                }}>
                t
              </Text>
            </View>
            bag
          </Text>
          <Text style={styles.captionText}>
            divine energy through beauty and genius
          </Text>
          <Text style={styles.skipText}>Skip</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {flex: 1},
  flipText: {
    transform: [{rotate: '180deg'}],
    // backgroundColor: '#FFFF00',
    // textAlignVertical: 'top',
  },
  skipText: {color: '#ffffff'},
  captionText: {color: '#ffffff'},
  dertbagBrand: {
    color: '#ffffff',
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: '#111111',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 0.2,
    backgroundColor: '#ffff00',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcomeText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 32,
    textTransform: 'uppercase',
  },
});

export default Splash;
