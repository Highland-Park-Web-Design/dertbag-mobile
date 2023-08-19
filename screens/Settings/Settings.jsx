import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Header from '../../components/Header';
import RightIco from '../../Icons/RightIco.svg';
import ToggleSwitch from 'toggle-switch-react-native';

function MainSettings({navigation}) {
  const [toggleState, setToggleState] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'notification'} />
      <View style={styles.contentContainer}>
        <View style={styles.SettingsCard}>
          <View>
            <Text style={styles.settingsCardText}>FACE ID</Text>
            <Text style={styles.settingscapCardText}>
              Log in using your device biometric security
            </Text>
          </View>

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
        <View style={styles.SettingsCard}>
          <View>
            <Text style={styles.settingsCardText}>Notification</Text>
            <Text style={styles.settingscapCardText}>
              Control your notification preferences from here
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            style={{
              width: '10%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <RightIco />
          </TouchableOpacity>
        </View>
        <View style={styles.SettingsCard}>
          <View>
            <Text style={styles.settingsCardText}>Change Password</Text>
            <Text style={styles.settingscapCardText}>
              Secure your account with a new password
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
            style={{
              width: '10%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <RightIco />
          </TouchableOpacity>
        </View>
        <View style={styles.SettingsCard}>
          <View>
            <Text style={styles.settingsCardText}>Delete Account</Text>
            <Text style={styles.settingscapCardText}>
              Request for your account and personal details be deleted
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('DeleteAccount')}
            style={{
              width: '10%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <RightIco />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MainSettings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  SettingsCard: {
    paddingVertical: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  settingsCardText: {
    color: '#111',
    fontFamily: 'Helvetica',
    fontSize: 16,
    width: '90%',
    textTransform: 'uppercase',
  },
  settingscapCardText: {
    color: '#808080',
    fontFamily: 'Helvetica',
    fontSize: 12,
    width: '90%',
  },
});
