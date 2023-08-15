import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Button({variation, onpress, disabled, title, ...props}) {
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={onpress}
        // activeOpacity={0.5}
        style={[
          disabled && styles.disabledState,
          variation === 'ghost' ? styles.ghostButtonStyle : styles.buttonStyle,
        ]}
        {...props}>
        <Text
          style={
            variation === 'ghost' ? styles.GhosttextStyle : styles.textStyle
          }>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default Button;

const styles = StyleSheet.create({
  textStyle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  GhosttextStyle: {
    color: '#111',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 24,
    textTransform: 'uppercase',
  },
  buttonStyle: {
    backgroundColor: '#111111',
    height: 56,
    width: '100%',
    borderRadius: 16,
    padding: 16,
  },
  ghostButtonStyle: {
    borderWidth: 2,
    borderColor: '#111',
    borderStyle: 'solid',
    backgroundColor: '#FFF',
    height: 56,
    width: '100%',
    borderRadius: 16,
    padding: 16,
  },
  disabledState: {
    opacity: 0.3,
  },
});
