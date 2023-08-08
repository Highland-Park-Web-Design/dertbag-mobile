import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import ChevronIcon from './ChevronIcon';
const ProfileCard = ({email, onPress}) => {
  return (
    <TouchableOpacity style={styles.ProfileCardContainer} onPress={onPress}>
      <View style={styles.ProfileCard}>
        <Image source={require('../assets/images/db-profile-icon.png')} />
        <View>
          <Text style={styles.boldText}>{email}</Text>
          <Text style={styles.normalText}>VIEW PROFILE</Text>
        </View>
        <ChevronIcon />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  ProfileCardContainer: {
    height: 115,
  },
  ProfileCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3%',
    width: '85%',
    height: '80%',
    backgroundColor: '#F5F5F5',
    marginTop: 20,
    marginLeft: 25,
    borderRadius: 5,
  },
});

// ProfileCard.propTypes = {
//   email: PropTypes.string.isRequired,
//   onPress: PropTypes.func.isRequired,
// };

export default ProfileCard;
