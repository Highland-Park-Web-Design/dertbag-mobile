import React, {useContext, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomInput from '../../components/input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RecreationContext} from '../../context/RecreationContext';

function Recreation({navigation}) {
  const [productText, onChangeProductText] = useState('');
  const {state, dispatch} = useContext(RecreationContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../assets/images/search.png')} //Change your icon image here
            style={styles.ImageStyle}
          />
          <CustomInput
            style={{
              flex: 1,
            }}
            placeholder="SEARCH PRODUCTS"
            onChangeText={onChangeProductText}
            value={productText}
          />
          {productText.length ? (
            <TouchableOpacity onPress={() => onChangeProductText('')}>
              <Image
                source={require('../../assets/images/close.png')} //Change your icon image here
                style={styles.ImageStyle}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 32,
            color: '#000',
            marginHorizontal: 24,
            marginBottom: 16,
          }}>
          RECREATION
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('RecreationView');
            dispatch({
              type: 'SET_RECREATION_ID',
              payload: 1,
            });
          }}
          style={{gap: 8, marginBottom: 24}}>
          <Image
            borderRadius={4}
            style={{width: '100%', height: 515}}
            source={require('../../assets/images/blogImg.png')}
          />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 24,
              color: '#000',
            }}>
            KYLA for GERL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('RecreationView');
            dispatch({
              type: 'SET_RECREATION_ID',
              payload: 2,
            });
          }}
          style={{gap: 8, marginBottom: 24}}>
          <Image
            borderRadius={4}
            style={{width: '100%', height: 515}}
            source={require('../../assets/images/blogImg.png')}
          />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 24,
              color: '#000',
            }}>
            KYLA for GERL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('RecreationView');
            dispatch({
              type: 'SET_RECREATION_ID',
              payload: 3,
            });
          }}
          style={{gap: 8, marginBottom: 24}}>
          <Image
            borderRadius={4}
            style={{width: '100%', height: 515}}
            source={require('../../assets/images/blogImg.png')}
          />
          <Text
            style={{
              fontWeight: '400',
              fontSize: 24,
              color: '#000',
            }}>
            KYLA for GERL
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Recreation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    marginBottom: 10,
    margin: 24,
    borderRadius: 16,
    // padding: 16,
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    boxSizing: 'border-box',
  },
  ImageStyle: {
    padding: 5,
    margin: 5,
    height: 24,
    width: 24,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
