import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import BuildingIco from '../../Icons/Building.svg';
import MailIco from '../../Icons/Mail.svg';
import GlobeIco from '../../Icons/globe.svg';
import PhoneIco from '../../Icons/phone.svg';

import FacebookIco from '../../Icons/facebook.svg';
import TwitterIco from '../../Icons/twitter.svg';
import InstIco from '../../Icons/Insta.svg';
import LinkedinIco from '../../Icons/Linkedin.svg';

function Help({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'get Help'} />
      <ScrollView style={styles.contentContainer}>
        <View
          style={{
            gap: 16,
            marginBottom: 24,
          }}>
          <HelpCardGroup
            title={'HQ Address'}
            caption={'ARCADE MALL 1001 MAIN ST. BRIDGEPORT, CT 06604'}
            icon={<BuildingIco />}
          />
          <HelpCardGroup
            title={'EMAIL'}
            caption={'PHILIP@DERTBAG.US'}
            icon={<MailIco />}
          />
          <HelpCardGroup
            title={'WEBSITE'}
            caption={'WWW.DERTBAG.US'}
            icon={<GlobeIco />}
          />
          <HelpCardGroup
            title={'PHONE'}
            caption={'+1 (3) 4563 3743'}
            icon={<PhoneIco />}
          />
        </View>
        <View>
          <View
            style={{
              padding: 16,
              borderRadius: 8,
              backgroundColor: '#F7F7F7',
              gap: 8,
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Helvetica',
                fontSize: 14,
                lineHeight: 20,
                // fontWeight: '400',
              }}>
              Open Hours
            </Text>
            <View>
              <View style={styles.openGroup}>
                <Text style={styles.day}>THURSDAY</Text>
                <Text style={styles.day}>12-4</Text>
              </View>
              <View style={styles.openGroup}>
                <Text style={styles.day}>FRIDAY</Text>
                <Text style={styles.day}>12-5</Text>
              </View>
              <View style={styles.openGroup}>
                <Text style={styles.day}>SATURDAY</Text>
                <Text style={styles.day}>12-6</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 15,
          width: '100%',
          //   paddingHorizontal: 24,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            gap: 16,
            flexDirection: 'row',
            backgroundColor: '#fff',
          }}>
          <View style={styles.helpIco}>
            <InstIco />
          </View>
          <View style={styles.helpIco}>
            <FacebookIco />
          </View>
          <View style={styles.helpIco}>
            <LinkedinIco />
          </View>
          <View style={styles.helpIco}>
            <TwitterIco />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function HelpCardGroup({icon, title, caption}) {
  return (
    <View style={styles.helpCard}>
      <View style={styles.helpIco}>{icon}</View>
      <View>
        <Text style={styles.helpTitleCardText}>{title}</Text>
        <Text style={styles.helpCardText}>{caption}</Text>
      </View>
    </View>
  );
}

export default Help;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
  helpCard: {
    borderRadius: 8,
    backgroundColor: '#F7F7F7',
    padding: 16,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  helpIco: {
    borderRadius: 8,
    backgroundColor: '#111',
    padding: 12,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignContent: 'center',
  },
  helpCardText: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 16,
    textTransform: 'uppercase',
    lineHeight: 24,
    // width: '85%',
  },
  helpTitleCardText: {
    color: '#A3A3A3',
    fontFamily: 'Helvetica',
    fontSize: 12,
    textTransform: 'uppercase',
    lineHeight: 24,
  },
  openGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    width: '50%',
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
