import {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useEffect,
  useState,
} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProductContext} from '../../context/ProductContext';
import Header from '../../components/Header';
import DropdownIco from '../../Icons/Dropdown.svg';
import DropdownReverse from '../../Icons/DropdownReverse.svg';
import HTML from 'react-native-render-html';
import PlusIco from '../../Icons/Plus.svg';
import MinusIco from '../../Icons/Minus.svg';
import {showMessage} from 'react-native-flash-message';
import {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {GetProductByID} from '../../api';
import CustomSkeleton from '../../components/Skeleton';

function ProductDetails({navigation}) {
  const {state} = useContext(ProductContext);
  const bottomSheetRef = useRef(null);
  const [singleProduct, setSingleProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(Number(1));
  const [selectedVariant, setSelectedVariant] = useState(Number(0));
  const [variantTitle, setVariantTitle] = useState('small');

  const getProductByID = useCallback(async () => {
    try {
      const {data} = await GetProductByID(state?.id);

      if (data?.product) {
        setSingleProduct(data?.product);
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
  }, [state?.id]);

  useEffect(() => {
    getProductByID();
  }, [getProductByID]);

  // variables
  const snapPoints = useMemo(() => ['25%', '70%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {}, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  // console.log(singleProduct?.variants[0]?.price, 'idpage');
  const {width} = useWindowDimensions();
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Product Details'} />

        <>
          <ScrollView style={styles.pageContainer}>
            {/* <Text>{state.id}</Text> */}
            {singleProduct && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.ProjectScrollContainer}>
                {!singleProduct?.images && (
                  <CustomSkeleton loading={loading} height={493} width={380} />
                )}
                {singleProduct?.images &&
                  singleProduct?.images.map(image => (
                    <View
                      key={image.id}
                      style={{backgroundColor: '', height: 493}}>
                      <View
                        key={image.id}
                        style={{marginRight: 10, height: 493}}>
                        <Image
                          style={styles.productImage}
                          source={{uri: image?.src}}
                        />
                      </View>
                    </View>
                  ))}
              </ScrollView>
            )}

            <View
              style={{
                gap: 4,
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#111',
                  width: 16,
                  height: 8,
                  borderRadius: 4,
                }}></View>
              <View
                style={{
                  backgroundColor: '#D9D9D9',
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                }}></View>
            </View>
          </ScrollView>
          <View style={styles.bottomView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {!singleProduct?.title && (
                <View style={{gap: 5}}>
                  <CustomSkeleton height={30} width={150} loading={loading} />
                  <CustomSkeleton height={30} width={50} loading={loading} />
                </View>
              )}
              <Text style={styles.productName}>{singleProduct?.title}</Text>
              <TouchableOpacity onPress={handlePresentModalPress}>
                <DropdownIco width={24} height={24} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.productPrice}>
                {singleProduct?.variants &&
                  ` $` +
                    singleProduct?.variants[selectedVariant]?.price * counter}
              </Text>
              <Text style={styles.productQuantity}>x{counter}</Text>
            </View>
            <View style={{gap: 16, flexDirection: 'row', paddingVertical: 16}}>
              <TouchableOpacity disabled={loading} style={styles.AddCartBtn}>
                <Text style={styles.AddCartBtnText}>ADD TO BAG</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <TouchableOpacity
                  onPress={() => setCounter(prev => prev + 1)}
                  style={styles.Btn}>
                  <PlusIco />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    if (counter > 1) {
                      setCounter(prev => prev - 1);
                    }
                  }}
                  style={styles.Btn}>
                  <MinusIco />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <ProductSheet
            snapPoints={snapPoints}
            handleSheetChanges={handleSheetChanges}
            bottomSheetRef={bottomSheetRef}>
            <View
              style={{
                paddingHorizontal: 24,
                paddingVertical: 16,
                // backgroundColor: 'red',
                height: '95%',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.productName}>{singleProduct?.title}</Text>
                <TouchableOpacity onPress={handleClosePress}>
                  <DropdownReverse width={24} height={24} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.productPrice}>
                  $
                  {singleProduct?.variants &&
                    singleProduct?.variants[selectedVariant]?.price * counter}
                </Text>
                <Text style={styles.productQuantity}>x{counter}</Text>
              </View>
              <View
                style={{
                  // backgroundColor: 'green',
                  height: '80%',
                  gap: 16,
                }}>
                <BottomSheetScrollView
                  style={
                    {
                      // backgroundColor: 'red',
                      // height: 'auto',
                    }
                  }>
                  <View>
                    <View style={{marginBottom: 16}}>
                      <Text style={{marginBottom: 16}}>SIZE</Text>
                      <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        {singleProduct?.variants?.map((variant, index) => (
                          <TouchableOpacity
                            onPress={() => {
                              setVariantTitle(variant.title.toLowerCase());
                              setSelectedVariant(Number(index));
                            }}
                            key={variant.id}
                            style={
                              variantTitle.toLowerCase() ===
                              variant.title.toLowerCase()
                                ? styles.Activepills
                                : styles.pills
                            }>
                            <Text
                              style={
                                variantTitle.toLowerCase() ===
                                variant.title.toLowerCase()
                                  ? styles.activePillsText
                                  : styles.pillsText
                              }>
                              {variant.title}
                            </Text>
                          </TouchableOpacity>
                        ))}

                        {/* <View style={styles.pills}>
                      <Text style={styles.pillsText}>medium</Text>
                    </View>
                    <View style={styles.pills}>
                      <Text style={styles.pillsText}>large</Text>
                    </View>
                    <View style={styles.pills}>
                      <Text style={styles.pillsText}>xl</Text>
                    </View> */}
                      </ScrollView>
                    </View>
                    {/* <View style={{marginBottom: 16}}>
                      <Text style={{marginBottom: 16}}>COLOR</Text>
                      <View>
                        <View style={styles.colors}></View>
                      </View>
                    </View> */}

                    <View style={{marginBottom: 16}}>
                      <Text
                        style={{
                          marginBottom: 16,
                          fontWeight: 700,
                          fontFamily: 'Helvetica',
                          color: '#111',
                          fontSize: 16,
                          textTransform: 'uppercase',
                        }}>
                        Description
                      </Text>
                      <View>
                        <View>
                          {/* <Text style={{color: '#111', fontFamily: 'Helvetica'}}> */}
                          <HTML
                            contentWidth={width}
                            ignoredDomTags={['meta']}
                            source={{html: singleProduct?.body_html}}
                          />
                          {/* </Text> */}
                        </View>
                      </View>
                    </View>
                  </View>
                </BottomSheetScrollView>

                <View
                  style={{
                    // backgroundColor: 'red',
                    // position: 'absolute',
                    bottom: 0,
                  }}>
                  <View style={{gap: 16, flexDirection: 'row'}}>
                    <TouchableOpacity
                      disabled={loading}
                      style={styles.AddCartBtn}>
                      <Text style={styles.AddCartBtnText}>ADD TO BAG</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        // backgroundColor: 'green',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => setCounter(prev => prev + 1)}
                        style={styles.Btn}>
                        <PlusIco />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          if (counter > 1) {
                            setCounter(prev => prev - 1);
                          }
                        }}
                        style={styles.Btn}>
                        <MinusIco />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ProductSheet>
        </>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 23,
    height: '50%',
    // backgroundColor: '#0F0F0F',
  },
  productImage: {
    width: 380,
    height: 493,
    borderRadius: 4,
  },
  ProjectScrollContainer: {
    flexDirection: 'row',
    height: 493,
  },
  bottomView: {
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    // height: '21%',
    gap: 5,
    zIndex: 10,
    // marginBottom: 15,
  },
  productName: {
    fontWeight: '700',
    fontSize: 24,
    fontFamily: 'Helvetica',
    color: '#000',
    width: '90%',
  },
  productPrice: {
    width: '50%',
    fontSize: 24,
    fontWeight: '300',
    fontFamily: 'Helvetica',
    color: '#000',
  },
  productQuantity: {
    width: '50%',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Helvetica',
    color: '#000',
  },
  cartActions: {
    backgroundColor: '#000',
    flexDirection: 'column',
  },
  AddCartBtn: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    backgroundColor: '#111',
    borderRadius: 16,
  },
  AddCartBtnText: {
    color: '#FFF',
    fontWeight: '700',
    fontFamily: 'Helvetica',
  },
  cartActions: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  Btn: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  Activepills: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#111',
    marginRight: 8,
  },
  pills: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#F4F4F4',
    marginRight: 8,
  },
  activePillsText: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 14,
    // fontStyle: normal;
    // fontWeight: 400,
    textTransform: 'uppercase',
  },
  pillsText: {
    color: '#111',
    fontFamily: 'Helvetica',
    fontSize: 14,
    // fontStyle: normal;
    // fontWeight: 400,
    textTransform: 'uppercase',
  },
  colors: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#191E1E',
  },
});

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
      <>
        {/* <Text>Awesome 🎉</Text> */}
        {children}
      </>
    </BottomSheetModal>
  );
}
