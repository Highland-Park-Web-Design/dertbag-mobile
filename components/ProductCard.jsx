import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
function ProductCard({product, navigation, index, dispatch}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetails', {
            data: product.id,
          });
          dispatch({
            type: 'SET_PRODUCT_ID',
            payload: product.id,
          });
        }}
        key={index}
        style={styles.productCard}>
        <Image
          source={{uri: product?.image?.src}}
          // source={{uri: product?.images[0]?.src}}
          style={styles.productImage}
        />
        <View style={styles.productCaption}>
          <Text style={styles.productTitle}>{product?.title}</Text>
          <Text>{product?.product_type}</Text>
          <Text>${product?.variants[0]?.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    height: 384,
    width: 281,
    borderRadius: 8,
    marginLeft: 24,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  productCaption: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    padding: 16,
    height: 150,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  productTitle: {
    overflow: 'hidden',
    color: '#000000',
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  productSubTitle: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 24,
  },
  productPrice: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 14,
    lineHeight: 24,
  },

  productImage: {
    width: 281,
    height: 280,
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
