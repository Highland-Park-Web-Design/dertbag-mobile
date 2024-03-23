import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
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
import {GetProductList, GetUserDetails} from '../api';
import ProductCard from '../components/ProductCard';
import CustomSkeleton from '../components/Skeleton';
import {showMessage} from 'react-native-flash-message';
import SearchCard from '../components/SearchCard';
import Button from '../components/Button';
import {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import CancelIco from '../Icons/cancelIco.svg';
import RoundCheckbox from '../components/RoundCheckbox';
import SquareCheckbox from '../components/SquareCheckbox';
import styles from './product.style';
import {getData, removeData, removeMultipleData, storeData} from '../store';
import {UserContext} from '../context/AuthContext';
import {shopifyClient} from '../utils';

function Product({navigation}) {
  const {state} = useContext(UserContext);
  const [productText, onChangeProductText] = useState('');
  const [selectedOrientation, onChangeSelectedOrientation] = useState('all');
  const {dispatch} = useContext(ProductContext);
  const [allProduct, setAllProducts] = useState();
  const [allActiveProduct, setAllActiveProducts] = useState();
  const [newArivals, setNewArivals] = useState();
  const [recomendation, setRecomendation] = useState();
  const [loading, setLoading] = useState(false);

  async function getDetails() {
    try {
      const {data} = await GetUserDetails();
      if (data) await storeData('UserData', data.user);

      // const checkoutData = await shopifyClient.checkout
      //   .create()
      //   .then(checkout => {
      //     storeData('checkoutId', checkout.id);
      //     // Do something with the checkout
      //     return checkout;
      //   });

      // const checkoutId = checkoutData.id;

      // const checkoutId = await getData('checkoutId');

      const lineItemsToAdd = [
        {
          variantId: 'gid://shopify/ProductVariant/42283137401015',
          quantity: 5,
          customAttributes: [{key: 'hello', value: 'world'}],
        },
      ];
    } catch (err) {
      console.log(err);
    }
  }

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

          const filterByAvailability = data?.products?.map(product =>
            product.variants.filter(item => item?.inventory_quantity > 0),
          );

          setRecomendation(filterByAvailability);
          // shopifyClient.product.fetchAll().then(products => {
          //   // Do something with the products
          //   // setAllProducts(products);
          //   // console.log({products: products[0].images});
          // });
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
    if (state.isRegisterd === true) getDetails();
  }, []);

  const handleTextSubmit = () => {
    // Handle the action when the user presses "Enter" on the keyboard
    // console.log('Enter key pressed. Text entered:', productText);
  };

  const filterData = () => {
    return allProduct.filter(item =>
      item?.title?.toLowerCase().includes(productText.toLowerCase()),
    );
  };

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
            onChangeText={text => onChangeProductText(text)}
            value={productText}
            onSubmitEditing={handleTextSubmit}
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
        {productText ? (
          <SearchScreen
            navigation={navigation}
            dispatch={dispatch}
            filterData={filterData}
          />
        ) : (
          <>
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
                      <CustomSkeleton
                        loading={!loading}
                        height={384}
                        width={281}
                      />
                      <CustomSkeleton
                        loading={!loading}
                        height={384}
                        width={281}
                      />
                    </View>
                  )}

                  {newArivals && (
                    <>
                      <FlatList
                        style={{width: '100%'}}
                        horizontal
                        data={allActiveProduct}
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
                    <View
                      style={{gap: 5, flexDirection: 'row', marginLeft: 24}}>
                      <CustomSkeleton
                        loading={!loading}
                        height={384}
                        width={281}
                      />
                      <CustomSkeleton
                        loading={!loading}
                        height={384}
                        width={281}
                      />
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
                    <View
                      style={{gap: 5, flexDirection: 'row', marginLeft: 24}}>
                      <CustomSkeleton
                        loading={!loading}
                        height={384}
                        width={281}
                      />
                      <CustomSkeleton
                        loading={!loading}
                        height={384}
                        width={281}
                      />
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
                  {allActiveProduct.map(product => {
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
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

function SearchScreen({filterData, navigation, dispatch}) {
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '85%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {}, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  return (
    <View style={styles.pageWrapper}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingHorizontal: 24,
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Helvetica',
            fontSize: 20,
            lineHeight: 32,
            width: 'auto',
          }}>
          SHOWING RESULTS ({filterData().length})
        </Text>
        <View style={{width: 'auto'}}>
          <Button
            onpress={() => handlePresentModalPress()}
            variation={'ghost'}
            title={'filter'}
          />
        </View>
      </View>

      <View
        style={{
          marginRight: 24,
          marginTop: 24,
          // margin: 24,
          // backgroundColor: 'green',
          flex: 1,
          alignItems: 'center',
          // width: '95%',
          gap: 10,
        }}>
        <FlatList
          ItemSeparatorComponent={<View style={{height: 20}} />}
          style={{}}
          data={filterData()}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <SearchCard
              navigation={navigation}
              index={index}
              dispatch={dispatch}
              product={item}
            />
          )}
        />
      </View>
      <ProductSheet
        enablePanDownToClose
        snapPoints={snapPoints}
        handleSheetChanges={handleSheetChanges}
        bottomSheetRef={bottomSheetRef}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 24,
            paddingVertical: 8,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              width: '80%',
              color: '#000',
              fontSize: 24,
              fontFamily: 'Helvetica-Bold',
            }}>
            FILTER
          </Text>
          <TouchableOpacity
            onPress={() => handleClosePress()}
            style={{
              backgroundColor: '#111',
              width: 44,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              borderRadius: 8,
            }}>
            <CancelIco />
          </TouchableOpacity>
        </View>
        <BottomSheetScrollView>
          <View style={{paddingHorizontal: 24, gap: 24, height: '100%'}}>
            <View style={{gap: 24}}>
              <Text
                style={{fontFamily: 'Helvetica', fontSize: 24, color: '#000'}}>
                GENDER
              </Text>
              <View style={{gap: 16}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <RoundCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    MALE
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <RoundCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    FEMALE
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <RoundCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    UNISEX
                  </Text>
                </View>
              </View>
            </View>
            <View style={{gap: 24}}>
              <Text
                style={{fontFamily: 'Helvetica', fontSize: 24, color: '#000'}}>
                COLLECTIONS
              </Text>
              <View style={{gap: 16}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    AUGUST TEE
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    KEIZO
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    KYLA
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    SCALE BASKETBALL
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    SHANICE
                  </Text>
                </View>
              </View>
            </View>
            <View style={{gap: 24}}>
              <Text
                style={{fontFamily: 'Helvetica', fontSize: 24, color: '#000'}}>
                SIZE
              </Text>
              <View style={{gap: 16}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    XS
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    SMALL
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    LARGE
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <SquareCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    XL
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                  <RoundCheckbox />
                  <Text
                    style={{
                      fontFamily: 'Helvetica',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    XXL
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </BottomSheetScrollView>
        <View
          style={{
            padding: 24,
          }}>
          <Button title={'APPLY FILTER'} />
        </View>
      </ProductSheet>
      <View style={styles.stickyFooter}></View>
    </View>
  );
}

function ProductSheet({
  bottomSheetRef,
  snapPoints,
  handleSheetChanges,
  children,
  renderFooter,
}) {
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        // disappearsOnIndex={1}
        appearsOnIndex={1}
      />
    ),
    [],
  );
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      // footerComponent={renderFooter}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}>
      <>{children}</>
    </BottomSheetModal>
  );
}

export default Product;
