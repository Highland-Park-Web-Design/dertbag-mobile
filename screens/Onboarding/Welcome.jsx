import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Welcome({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/onboardimages/Welcome.png')}
        style={{
          flex: 1,
        }}>
        <LinearGradient
          colors={['rgba(17, 17, 17, 0.00) ', 'rgba(17, 17, 17, 0.70)']}
          style={styles.linearGradient}>
          <View style={styles.contentContainer}>
            <View style={styles.contentTop}>
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Helvetica',
                  fontSize: 24,
                  textAlign: 'center',
                }}>
                WELCOME TO
              </Text>
              <Image
                source={require('../../assets/images/onboardimages/Logo.png')}
              />
              <Text
                style={{
                  color: '#FFF',
                  fontFamily: 'Helvetica',
                  fontSize: 16,
                  letterSpacing: 1,
                }}>
                divine energy through beauty and genius
              </Text>
            </View>
            <View style={styles.actionGroup}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                activeOpacity={0.8}
                style={styles.action}>
                <Text style={styles.actionText}>SIGN IN</Text>
                <Text style={styles.actionCaption}>
                  I already have an account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                activeOpacity={0.8}
                style={styles.action}>
                <Text style={styles.actionText}>SIGN UP</Text>
                <Text style={styles.actionCaption}>Create an account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Product')}
                activeOpacity={0.8}>
                <Text style={styles.bottomtext}>GUEST ACCESS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    height: 'auto',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 24,
    gap: 48,
  },
  contentTop: {
    alignItems: 'center',
  },
  actionGroup: {
    // backgroundColor: 'red',
    alignSelf: 'stretch',
    gap: 24,
  },
  action: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
  },
  actionText: {
    color: '#111',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
  },
  actionCaption: {
    color: 'rgba(17, 17, 17, 0.60)',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 24,
  },
  bottomtext: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32,
  },
});
