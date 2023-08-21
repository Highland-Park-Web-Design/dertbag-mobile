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
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

function Onboarding({navigation}) {
  return (
    <Swiper
      paginationStyle={{
        // marginBottom: 20,
        position: 'absolute',
        bottom: 50,
      }}
      dot={
        <View
          style={{
            backgroundColor: '#808080',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 5,
            marginRight: 5,
            // marginTop: 3,
            // marginBottom: 3,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: '#FFF',
            width: 16,
            height: 8,
            borderRadius: 4,
            marginLeft: 5,
            marginRight: 5,
          }}
        />
      }
      style={styles.wrapper}
      showsButtons={false}
      loop={false}>
      <View testID="SlideThree" style={styles.slide}>
        <SlideOne navigation={navigation} />
      </View>
      <View testID="SlideThree" style={styles.slide}>
        <SlideTwo navigation={navigation} />
      </View>
      <View testID="SlideThree" style={styles.slide}>
        <SlideThree navigation={navigation} />
      </View>
      <View testID="SlideFour" style={styles.slide}>
        <SlideFour navigation={navigation} />
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  linearGradient: {
    height: 400,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Onboarding;

function SlideOne({navigation}) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        style={{
          flex: 1,
          //   width: '100%',
        }}
        source={require('../../assets/images/onboardimages/image1.png')}>
        <View
          style={{
            position: 'absolute',
            bottom: 18,
            width: '100%',
            zIndex: 10,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica-Bold',
                fontSize: 16,
                // alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                // backgroundColor: 'red',
              }}>
              SKIP
            </Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['rgba(17, 17, 17, 0.00) ', 'rgba(17, 17, 17, 0.70)']}
          style={styles.linearGradient}>
          <View
            style={{
              position: 'absolute',
              bottom: 65,
              // backgroundColor: 'red',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica',
                fontSize: 24,
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
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

function SlideTwo({navigation}) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        style={{
          flex: 1,
          //   width: '100%',
        }}
        source={require('../../assets/images/onboardimages/image2.png')}>
        <View
          style={{
            position: 'absolute',
            bottom: 18,
            width: '100%',
            zIndex: 10,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica-Bold',
                fontSize: 16,
                // alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                // backgroundColor: 'red',
              }}>
              SKIP
            </Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['rgba(17, 17, 17, 0.00) ', 'rgba(17, 17, 17, 0.70)']}
          style={styles.linearGradient}>
          <View
            style={{
              position: 'absolute',
              bottom: 65,
              // backgroundColor: 'red',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica',
                fontSize: 24,
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
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

function SlideThree({navigation}) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        style={{
          flex: 1,
          //   width: '100%',
        }}
        source={require('../../assets/images/onboardimages/image3.png')}>
        <View
          style={{
            position: 'absolute',
            bottom: 18,
            width: '100%',
            zIndex: 10,
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica-Bold',
                fontSize: 16,
                // alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                // backgroundColor: 'red',
              }}>
              SKIP
            </Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['rgba(17, 17, 17, 0.00) ', 'rgba(17, 17, 17, 0.70)']}
          style={styles.linearGradient}>
          <View
            style={{
              position: 'absolute',
              bottom: 65,
              // backgroundColor: 'red',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica',
                fontSize: 24,
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
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

function SlideFour({navigation}) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ImageBackground
        style={{
          flex: 1,
          //   width: '100%',
        }}
        source={require('../../assets/images/onboardimages/image4.png')}>
        <View
          style={{
            position: 'absolute',
            bottom: 18,
            width: '100%',
            zIndex: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica-Bold',
                fontSize: 16,
                // alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                // backgroundColor: 'red',
              }}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={['rgba(17, 17, 17, 0.00) ', 'rgba(17, 17, 17, 0.70)']}
          style={styles.linearGradient}>
          <View
            style={{
              position: 'absolute',
              bottom: 65,
              // backgroundColor: 'red',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Helvetica',
                fontSize: 24,
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
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
