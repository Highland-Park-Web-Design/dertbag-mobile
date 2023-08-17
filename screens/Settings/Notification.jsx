import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header';
import RightIco from '../../Icons/RightIco.svg';
import ToggleSwitch from 'toggle-switch-react-native';
import ActiveIcon from '../../Icons/ActiveSquareSelect.svg';

function Notification({navigation}) {
  const [orderUpdate, setOrderUpdate] = useState(false);
  const [newArrival, setNewArrival] = useState(false);
  const [promo, setPromo] = useState(false);
  const [salesAlert, setSalesAlert] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Settings'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentContainer}>
        <View
          style={{
            marginBottom: 24,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              marginBottom: 16,
              alignItems: 'center',
            }}>
            <ActiveIcon />
            <Text style={styles.title}>Push Notification</Text>
          </View>
          <View>
            <SettingsCard
              toggleState={orderUpdate}
              title={'Order Update'}
              setToggleState={setOrderUpdate}
            />
            <SettingsCard
              toggleState={newArrival}
              title={'New Arrival'}
              setToggleState={setNewArrival}
            />
            <SettingsCard
              toggleState={promo}
              title={'Promotions'}
              setToggleState={setPromo}
            />
            <SettingsCard
              toggleState={salesAlert}
              title={'Sales Alert'}
              setToggleState={setSalesAlert}
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 24,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              marginBottom: 16,
              alignItems: 'center',
            }}>
            <ActiveIcon />
            <Text style={styles.title}>Email Notification</Text>
          </View>
          <View>
            <SettingsCard
              toggleState={orderUpdate}
              title={'Order Update'}
              setToggleState={setOrderUpdate}
            />
            <SettingsCard
              toggleState={newArrival}
              title={'New Arrival'}
              setToggleState={setNewArrival}
            />
            <SettingsCard
              toggleState={promo}
              title={'Promotions'}
              setToggleState={setPromo}
            />
            <SettingsCard
              toggleState={salesAlert}
              title={'Sales Alert'}
              setToggleState={setSalesAlert}
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 24,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              marginBottom: 16,
              alignItems: 'center',
            }}>
            <ActiveIcon />
            <Text style={styles.title}>Sms Notification</Text>
          </View>
          <View>
            <SettingsCard
              toggleState={orderUpdate}
              title={'Order Update'}
              setToggleState={setOrderUpdate}
            />
            <SettingsCard
              toggleState={newArrival}
              title={'New Arrival'}
              setToggleState={setNewArrival}
            />
            <SettingsCard
              toggleState={promo}
              title={'Promotions'}
              setToggleState={setPromo}
            />
            <SettingsCard
              toggleState={salesAlert}
              title={'Sales Alert'}
              setToggleState={setSalesAlert}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Notification;

function SettingsCard({title, setToggleState, toggleState}) {
  return (
    <View style={styles.NotificationCard}>
      <Text style={styles.NotificationCardText}>{title}</Text>
      <View
        style={{
          width: '10%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <ToggleSwitch
          isOn={toggleState}
          onColor="#111"
          offColor="#E3E3E3"
          size="medium"
          onToggle={isOn => {
            setToggleState(prev => !prev);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    color: '#111',
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  NotificationCard: {
    paddingVertical: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  NotificationCardText: {
    color: '#111',
    fontFamily: 'Helvetica',
    fontSize: 16,
    width: '90%',
    textTransform: 'uppercase',
  },
});
