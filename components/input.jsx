import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function CustomInput({placeholder, ...props}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.inputControl}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  inputControl: {
    borderRadius: 16,
    padding: 16,
    minHeight: 56,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    backgroundColor: '#FAFAFA',
    fontFamily: 'Helvetica',
  },
});

export default CustomInput;
