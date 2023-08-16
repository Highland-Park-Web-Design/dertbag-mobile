import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Header from '../../components/Header';
import RightIco from '../../Icons/RightIco.svg';

function Legal({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Legal Information'} />
      <View style={styles.contentContainer}>
        <View style={styles.LegalCard}>
          <Text style={styles.LegalCardText}>TERMS & CONDITIONS</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndCondition')}
            style={{
              width: '15%',
              flexDirection: 'row',
              //   paddingTop: 10,
              justifyContent: 'flex-end',
            }}>
            <RightIco />
          </TouchableOpacity>
        </View>
        <View style={styles.LegalCard}>
          <Text style={styles.LegalCardText}>PRIVACY POLICY</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyPolicy')}
            style={{
              width: '15%',
              flexDirection: 'row',
              //   paddingTop: 10,
              justifyContent: 'flex-end',
            }}>
            <RightIco />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Legal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  LegalCard: {
    paddingVertical: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LegalCardText: {
    color: '#111',
    fontFamily: 'Helvetica',
    fontSize: 16,
    width: '85%',
  },
});
