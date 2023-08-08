import {useCallback, useContext, useMemo, useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ProductContext} from '../../context/ProductContext';
import Header from '../../components/Header';
import DropdownIco from '../../Icons/Dropdown.svg';
import DropdownReverse from '../../Icons/DropdownReverse.svg';

import PlusIco from '../../Icons/Plus.svg';
import MinusIco from '../../Icons/Minus.svg';
import {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

function ProductDetails({navigation}) {
  const {state} = useContext(ProductContext);
  const bottomSheetRef = useRef(null);

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

  const renderFooter = useCallback(
    props => (
      <BottomSheetFooter {...props} bottomInset={24}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      </BottomSheetFooter>
    ),
    [],
  );
  // console.log(state, 'idpage');
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{flex: 1}}>
        <Header navigation={navigation} title={'Product Details'} />
        <ScrollView style={styles.pageContainer}>
          {/* <Text>{state.id}</Text> */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.ProjectScrollContainer}>
            <View style={{marginRight: 10}}>
              <Image
                style={styles.productImage}
                source={require('../../assets/images/ProdDetails.png')}
              />
            </View>
            <View style={{marginRight: 10}}>
              <Image
                style={styles.productImage}
                source={require('../../assets/images/ProdDetails.png')}
              />
            </View>
          </ScrollView>
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
            <Text style={styles.productName}>BRAILLE TRENCH JACKET</Text>
            <TouchableOpacity onPress={handlePresentModalPress}>
              <DropdownIco width={24} height={24} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.productPrice}>$360.00</Text>
            <Text style={styles.productQuantity}>x1</Text>
          </View>
          <View style={{gap: 16, flexDirection: 'row', paddingVertical: 16}}>
            <TouchableOpacity style={styles.AddCartBtn}>
              <Text style={styles.AddCartBtnText}>ADD TO BAG</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <TouchableOpacity
                // onPress={handlePresentModalPress}
                style={styles.Btn}>
                <PlusIco />
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn}>
                <MinusIco />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ProductSheet
          snapPoints={snapPoints}
          handleSheetChanges={handleSheetChanges}
          bottomSheetRef={bottomSheetRef}>
          <View style={{paddingHorizontal: 24, paddingVertical: 16}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.productName}>BRAILLE TRENCH JACKET</Text>
              <TouchableOpacity onPress={handleClosePress}>
                <DropdownReverse width={24} height={24} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.productPrice}>$360.00</Text>
              <Text style={styles.productQuantity}>x1</Text>
            </View>
            <ScrollView
              style={{
                // backgroundColor: 'green',
                // height: '80%',
                gap: 16,
              }}>
              <View style={{marginBottom: 16}}>
                <Text style={{marginBottom: 16}}>SIZE</Text>
                <ScrollView
                  sty
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  <View style={styles.Activepills}>
                    <Text style={styles.activePillsText}>Small</Text>
                  </View>
                  <View style={styles.pills}>
                    <Text style={styles.pillsText}>medium</Text>
                  </View>
                  <View style={styles.pills}>
                    <Text style={styles.pillsText}>large</Text>
                  </View>
                  <View style={styles.pills}>
                    <Text style={styles.pillsText}>xl</Text>
                  </View>
                </ScrollView>
              </View>
              <View style={{marginBottom: 16}}>
                <Text style={{marginBottom: 16}}>COLOR</Text>
                <View>
                  <View style={styles.colors}></View>
                </View>
              </View>
              <BottomSheetScrollView>
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
                      <Text style={{color: '#111', fontFamily: 'Helvetica'}}>
                        MADE TO ORDER + PLEASE GIVE 2 WEEKS FOR PRODUCTION FROM
                        ORDER DATE Weight = 6.5OZ Black Cotton RipStop two
                        slanted welt pockets on front DERTBAG BRAILLE SNAPS
                        CLOSURE & SINGULAR SNAPS CLOSURE DERTBAG SIDE LABEL SEWN
                        IN SIDE SEAM ROUNDED COLLAR TRUE TO SIZE MADE IN
                        BRIDGEPORT, CONNECTICUT TRENCH JACKET SIZE CHART MEDIUM
                        HPS = 36" P2P = 24" SLEEVE = 26" JACKET SIZE CHART LARGE
                        HPS = 36" P2P = 25" SLEEVE = 26" JACKET SIZE CHART
                        XLARGE HPS = 38" P2P = 26" SLEEVE = 27"
                      </Text>
                    </View>
                  </View>
                </View>
              </BottomSheetScrollView>

              <View style={{gap: 16, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.AddCartBtn}>
                  <Text style={styles.AddCartBtnText}>ADD TO BAG</Text>
                </TouchableOpacity>
                <View
                  style={{
                    // backgroundColor: 'green',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <TouchableOpacity style={styles.Btn}>
                    <PlusIco />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.Btn}>
                    <MinusIco />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </ProductSheet>
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
    // flex: 0.5,
    gap: 50,
  },
  bottomView: {
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    height: '21%',
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
      footerComponent={renderFooter}
      backdropComponent={renderBackdrop}
      onChange={handleSheetChanges}>
      <>
        {/* <Text>Awesome 🎉</Text> */}
        {children}
      </>
    </BottomSheetModal>
  );
}
