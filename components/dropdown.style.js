import {StyleSheet} from 'react-native';

const dropdownStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // paddingVertical: 16,
    // paddingHorizontal: 10,
    // marginTop: 16,
  },
  dropdown: {
    height: 50,
    borderColor: '#0000001a',
    backgroundColor: '#f4f4f4',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    height: 56,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    // fontFamily: 'Poppins',
  },
  selectedTextStyle: {
    fontSize: 16,
    // fontFamily: 'Poppins',
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default dropdownStyle;
