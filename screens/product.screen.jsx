import React, {useContext, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import CustomInput from '../components/input';
import {ProductContext} from '../context/ProductContext';
import {GetProductList} from '../api';
import ProductCard from '../components/ProductCard';
import CustomSkeleton from '../components/Skeleton';
import {showMessage} from 'react-native-flash-message';
function Product({navigation}) {
  const [productText, onChangeProductText] = useState('');
  const [selectedOrientation, onChangeSelectedOrientation] = useState('all');
  const {dispatch} = useContext(ProductContext);
  const [allProduct, setAllProducts] = useState();
  const [allActiveProduct, setAllActiveProducts] = useState();
  const [newArivals, setNewArivals] = useState();
  const [recomendation, setRecomendation] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProducts() {
      try {
        const {data} = await GetProductList();
        if (data?.products?.length > 0) {
          data?.products?.sort((a, b) => b.created_at - a.created_at);

          const get10MostRecent = data?.products?.slice(0, 10);
          setNewArivals(get10MostRecent);

          const filterByActivestatus = data?.products?.filter(
            product => product.status === 'active',
          );

          setAllProducts(data?.products);
          setAllActiveProducts(filterByActivestatus);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        if (err.response) {
          showMessage({
            message: err.response.data.message,
            type: 'danger',
          });
        } else {
          showMessage({
            message: 'unable to reach server, check internet',
            type: 'danger',
          });
        }
      }
    }
    getProducts();
  }, []);

  // const filterByName() {

  // }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.pageWrapper}>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../assets/images/search.png')} //Change your icon image here
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
                source={require('../assets/images/close.png')} //Change your icon image here
                style={styles.ImageStyle}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.pillsContainer}>
          <View
            style={
              selectedOrientation === 'all'
                ? styles.activePill
                : styles.inActivePill
            }>
            <TouchableOpacity
              onPress={() => onChangeSelectedOrientation('all')}>
              <Text
                style={
                  selectedOrientation === 'all'
                    ? styles.activePillText
                    : styles.inActivePillText
                }>
                ALL
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              selectedOrientation === 'men'
                ? styles.activePill
                : styles.inActivePill
            }>
            <TouchableOpacity
              onPress={() => onChangeSelectedOrientation('men')}>
              <Text
                style={
                  selectedOrientation === 'men'
                    ? styles.activePillText
                    : styles.inActivePillText
                }>
                MEN
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              selectedOrientation === 'gerl'
                ? styles.activePill
                : styles.inActivePill
            }>
            <TouchableOpacity
              onPress={() => onChangeSelectedOrientation('gerl')}>
              <Text
                style={
                  selectedOrientation === 'gerl'
                    ? styles.activePillText
                    : styles.inActivePillText
                }>
                GERL
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={
              selectedOrientation === 'others'
                ? styles.activePill
                : styles.inActivePill
            }>
            <TouchableOpacity
              onPress={() => onChangeSelectedOrientation('others')}>
              <Text
                style={
                  selectedOrientation === 'others'
                    ? styles.activePillText
                    : styles.inActivePillText
                }>
                OTHERS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollableContainer}>
          <View style={styles.scrollableSection}>
            <Text style={styles.screenHeading}>NEW ARRIVALS</Text>
            <View style={styles.newArrivalContainer}>
              {!newArivals && (
                <View style={{marginLeft: 24, flexDirection: 'row'}}>
                  <CustomSkeleton loading={!loading} height={384} width={281} />
                  <CustomSkeleton loading={!loading} height={384} width={281} />
                </View>
              )}

              {newArivals && (
                <>
                  <FlatList
                    style={{width: '100%'}}
                    horizontal
                    data={newArivals}
                    renderItem={({item}) => (
                      <ProductCard
                        index={item?.id}
                        navigation={navigation}
                        product={item}
                        key={item?.id}
                        dispatch={dispatch}
                      />
                    )}
                    keyExtractor={item => item?.id}
                    ListFooterComponent={
                      <View style={styles.seeMoreCard}>
                        <View style={styles.seeMoreCaption}>
                          <Text style={styles.seeMoreLabel}>See More</Text>
                        </View>
                      </View>
                    }
                    ListEmptyComponent={
                      <View style={styles.seeMoreCard}>
                        <View style={styles.seeMoreCaption}>
                          <Text style={styles.seeMoreLabel}>
                            No Product Available
                          </Text>
                        </View>
                      </View>
                    }
                  />
                </>
              )}
            </View>
          </View>

          <View style={styles.scrollableSection}>
            <Text style={styles.screenHeading}>RECOMMENDATIONS</Text>
            <View style={styles.newArrivalContainer}>
              {!allActiveProduct && (
                <View style={{gap: 5, flexDirection: 'row', marginLeft: 24}}>
                  <CustomSkeleton loading={!loading} height={384} width={281} />
                  <CustomSkeleton loading={!loading} height={384} width={281} />
                </View>
              )}

              {allActiveProduct && (
                <>
                  <FlatList
                    style={{width: '100%'}}
                    horizontal
                    data={allActiveProduct}
                    renderItem={({item}) => (
                      <ProductCard
                        index={item.id}
                        navigation={navigation}
                        product={item}
                        key={item.id}
                        dispatch={dispatch}
                      />
                    )}
                    keyExtractor={item => item.id}
                    ListFooterComponent={
                      <View style={styles.seeMoreCard}>
                        <View style={styles.seeMoreCaption}>
                          <Text style={styles.seeMoreLabel}>See More</Text>
                        </View>
                      </View>
                    }
                    ListEmptyComponent={
                      <View style={styles.seeMoreCard}>
                        <Text>No Product Available</Text>
                      </View>
                    }
                    List
                  />
                </>
              )}
            </View>
          </View>
          <View style={styles.scrollableSection}>
            <Text style={styles.screenHeading}>FEATURED COLLECTIONS</Text>
            <View style={styles.newArrivalContainer}>
              {!allProduct && (
                <View style={{gap: 5, flexDirection: 'row', marginLeft: 24}}>
                  <CustomSkeleton loading={!loading} height={384} width={281} />
                  <CustomSkeleton loading={!loading} height={384} width={281} />
                </View>
              )}

              {allProduct && (
                <>
                  <FlatList
                    style={{width: '100%'}}
                    horizontal
                    data={allProduct}
                    renderItem={({item}) => (
                      <ProductCard
                        index={item.id}
                        navigation={navigation}
                        product={item}
                        key={item.id}
                        dispatch={dispatch}
                      />
                    )}
                    keyExtractor={item => item.id}
                    ListFooterComponent={
                      <View style={styles.seeMoreCard}>
                        <View style={styles.seeMoreCaption}>
                          <Text style={styles.seeMoreLabel}>See More</Text>
                        </View>
                      </View>
                    }
                    ListEmptyComponent={
                      <View style={styles.seeMoreCard}>
                        <Text>No Product Available</Text>
                      </View>
                    }
                    List
                  />
                </>
              )}
            </View>
          </View>
          {/* <View style={styles.scrollableSection}>
            <Text style={styles.screenHeading}>BEST SELLERS</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.newArrivalContainer}>
              {productDemoData.map(product => {
                return (
                  <View style={styles.productCard}>
                    <Image
                      source={product.imageUrl}
                      style={styles.productImage}
                    />
                    <View style={styles.productCaption}>
                      <Text style={styles.productTitle}>
                        {product.productTitle}
                      </Text>
                      <Text>{product.productSubtitle}</Text>
                      <Text>${product.price}</Text>
                    </View>
                  </View>
                );
              })}
              <View style={styles.seeMoreCard}>
                <View style={styles.seeMoreCaption}>
                  <Text style={styles.seeMoreLabel}>See More</Text>
                </View>
              </View>
            </ScrollView>
          </View> */}
        </ScrollView>
        <View style={styles.stickyFooter}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  stickyFooter: {
    // height: 80,
    // backgroundColor: 'black',
  },
  scrollableSection: {marginBottom: 26},

  scrollableContainer: {
    flex: 1,
    height: 300,
    // backgroundColor: 'blue',
    // paddingRight: 24,
  },
  newArrivalContainer: {
    flexDirection: 'row',
    flex: 0.5,
    gap: 5,
  },
  productCard: {
    height: 384,
    width: 281,
    borderRadius: 8,
    // marginRight: 15,
    marginLeft: 24,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  seeMoreCard: {
    height: 384,
    width: 281,
    borderRadius: 8,
    marginRight: 24,
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
  seeMoreCaption: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    padding: 16,
    height: 150,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  seeMoreLabel: {
    color: '#111',
    fontFamily: 'Helvetica',
    fontSize: 16,
    //fontStyle: 'normal',
    //fontWeight: '700',
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  productTitle: {
    overflow: 'hidden',
    color: '#000000',
    // textOverflow: 'ellipsis',
    // whitespace: 'nowrap',
    fontFamily: 'Helvetica',
    fontSize: 16,
    //fontStyle: 'normal',
    //fontWeight: '700',
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  productSubTitle: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 16,
    //fontStyle: 'normal',
    //fontWeight: '400',
    lineHeight: 24,
  },
  productPrice: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 14,
    //fontStyle: 'normal',
    //fontWeight: '700',
    lineHeight: 24,
  },

  productImage: {
    width: 281,
    height: 280,
  },
  screenHeading: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 24,
    //fontStyle: 'normal',
    //fontWeight: '400',
    lineHeight: 32,
    marginBottom: 16,
    marginLeft: 24,
    // backgroundColor: 'black',
  },
  pillsContainer: {
    // backgroundColor: '#f4f4f4',
    // flex: 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // height: 10,
    padding: 0,
    gap: 3,
    margin: 24,
    marginBottom: 26,
    boxSizing: 'border-box',
  },
  activePillText: {
    color: '#fff',
    textAlign: 'center',
    // paddingBottom: 14,
  },
  inActivePillText: {
    color: '#222',
    textAlign: 'center',
    // paddingBottom: 14
  },
  activePill: {
    width: '25%',
    backgroundColor: '#222222',
    paddingHorizontal: 4,
    borderRadius: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 35,
  },
  inActivePill: {
    width: '25%',
    paddingHorizontal: 4,
    borderRadius: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 35,
  },
  screenContainer: {
    width: '100%',
    flex: 1,
    height: '100%',
    backgroundColor: '#ffffff',
    paddingBottom: 0,
    marginBottom: 0,
  },
  pageWrapper: {
    // padding: 24,
    height: '100%',
    backgroundColor: '#ffffff',
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

export default Product;
