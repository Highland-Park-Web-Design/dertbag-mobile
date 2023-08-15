import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {Text, ScrollView, StyleSheet, View, Image} from 'react-native';
import SwipeLico from '../../Icons/swipeLicon.svg';
import SwipeRico from '../../Icons/swipeRicon.svg';
import Bagico from '../../Icons/BagIcon.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RecreationContext} from '../../context/RecreationContext';
import {ProductContext} from '../../context/ProductContext';

function RecreationView({navigation}) {
  const {state} = useContext(RecreationContext);
  console.log(state.id);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'KYLA for GERL'} navigation={navigation} />
      <ScrollView style={styles.contentContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.ProjectScrollContainer}>
          <View>
            <Image
              style={styles.productImage}
              source={require('../../assets/images/blogImg.png')}
            />
          </View>
          <View>
            <Image
              style={styles.productImage}
              source={require('../../assets/images/blogprod.png')}
            />
          </View>
          <View>
            <Image
              style={styles.productImage}
              source={require('../../assets/images/blogprod-2.png')}
            />
          </View>
          <View>
            <Image
              style={styles.productImage}
              source={require('../../assets/images/blogprod-3.png')}
            />
          </View>
        </ScrollView>
        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            marginBottom: 32,
          }}>
          <SwipeLico />
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              textTransform: 'uppercase',
            }}>
            Swipe Photo
          </Text>
          <SwipeRico />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 16,
            marginBottom: 32,
          }}>
          <View
            style={{
              width: '47%',
            }}>
            <CollectionCard
              navigation={navigation}
              variant={'Black'}
              title={'Product name'}
              priceSlash={'150'}
              price={'100'}
              id={1}
              img={
                <Image
                  borderTopLeftRadius={4}
                  borderTopRightRadius={4}
                  style={{height: 188, width: '100%'}}
                  source={require('../../assets/images/RecImgsmall.png')}
                />
              }
            />
          </View>
          <View
            style={{
              width: '47%',
            }}>
            <CollectionCard
              navigation={navigation}
              variant={'Black'}
              title={'Product name'}
              priceSlash={'150'}
              price={'100'}
              id={2}
              img={
                <Image
                  borderTopLeftRadius={4}
                  borderTopRightRadius={4}
                  style={{height: 188, width: '100%'}}
                  source={require('../../assets/images/RecImgsmall-1.png')}
                />
              }
            />
          </View>
          <View
            style={{
              width: '47%',
            }}>
            <CollectionCard
              navigation={navigation}
              variant={'Black'}
              title={'Product name'}
              priceSlash={'150'}
              price={'100'}
              id={3}
              img={
                <Image
                  borderTopLeftRadius={4}
                  borderTopRightRadius={4}
                  style={{height: 188, width: '100%'}}
                  source={require('../../assets/images/RecImgsmall-1.png')}
                />
              }
            />
          </View>
          <View
            style={{
              width: '47%',
            }}>
            <CollectionCard
              navigation={navigation}
              variant={'Black'}
              title={'Product name'}
              priceSlash={'150'}
              price={'100'}
              id={4}
              img={
                <Image
                  borderTopLeftRadius={4}
                  borderTopRightRadius={4}
                  style={{height: 188, width: '100%'}}
                  source={require('../../assets/images/RecImgsmall.png')}
                />
              }
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RecreationView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  ProjectScrollContainer: {
    flexDirection: 'row',
  },
  productImage: {
    width: 380,
    height: 586,
    borderRadius: 4,
  },
});

function CollectionCard({
  img,
  title,
  variant,
  price,
  priceSlash,
  id,
  navigation,
}) {
  const {dispatch} = useContext(ProductContext);
  return (
    <View
      style={{
        borderRadius: 4,
      }}>
      {/* 
      ***** TO BE USED WHEN IMAGE COMES FROM A REMOTE PATH *****
      <Image
        borderTopLeftRadius={4}
        borderTopRightRadius={4}
        style={{height: 188, width: '100%'}}
        source={{uri: img}}
      /> */}
      <View
        style={{
          backgroundColor: '#F4F4F4',
        }}>
        {img}
      </View>

      <View
        style={{
          backgroundColor: '#F4F4F4',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#000',
            fontWeight: '400',
            textTransform: 'uppercase',
            lineHeight: 24,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#000',
            fontWeight: '300',
            textTransform: 'uppercase',
          }}>
          {variant}
        </Text>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#000',
                fontWeight: '700',
                textTransform: 'uppercase',
              }}>
              ${price}
            </Text>
            <Text
              style={{
                fontSize: 8,
                color: '#000',
                fontWeight: '400',
                textTransform: 'uppercase',
                textDecorationStyle: 'solid',
                textDecorationLine: 'line-through',
                textDecorationColor: '#000',
              }}>
              ${priceSlash}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProductDetails');
              dispatch({
                type: 'SET_PRODUCT_ID',
                payload: id,
              });
            }}
            activeOpacity={0.8}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              backgroundColor: '#222',
            }}>
            <Bagico />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
