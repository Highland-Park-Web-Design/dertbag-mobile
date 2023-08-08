import React from 'react';
import {Image, StyleSheet} from 'react-native';

const ChevronIcon = () => {
  return (
    <Image
      style={styles.chevron}
      source={require('../assets/images/chevron-icon.png')}
    />
  );
};

const styles = StyleSheet.create({
  chevron: {
    marginBottom: '1.1%',
  },
});

export default ChevronIcon;
