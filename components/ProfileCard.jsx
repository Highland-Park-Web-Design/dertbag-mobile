import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import ChevronIcon from './ChevronIcon';
const ProfileCard = ({email, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.ProfileCardContainer}
      onPress={onPress}>
      <View style={styles.ProfileCard}>
        <Image
          style={{
            width: 52,
            height: 52,
            borderRadius: 4,
          }}
          source={require('../assets/images/MenuImg.png')}
        />
        <View style={{width: '65%'}}>
          <Text style={styles.boldText}>{email}</Text>
          <Text style={styles.normalText}>VIEW PROFILE</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <ChevronIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  ProfileCardContainer: {
    // height: 115,
  },
  ProfileCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    gap: 16,
    padding: 16,
    backgroundColor: '#F5F5F5',
    marginTop: 20,
    // marginHorizontal: 25,
    borderRadius: 5,
  },
  boldText: {
    color: '#111',
    fontFamily: 'Helvetica',
    fontSize: 16,
    lineHeight: 24,
    textTransform: 'uppercase',
    width: '100%',
    // backgroundColor: 'red',
  },
  normalText: {
    color: '#111',
    fontFamily: 'Helvetica-Light',
    fontSize: 14,
    lineHeight: 24,
    textTransform: 'uppercase',
    width: '100%',
  },
});

// ProfileCard.propTypes = {
//   email: PropTypes.string.isRequired,
//   onPress: PropTypes.func.isRequired,
// };

export default ProfileCard;
