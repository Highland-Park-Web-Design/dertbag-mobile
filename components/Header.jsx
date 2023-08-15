import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function Header({navigation, title}) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => navigation.goBack()}>
        <Image source={require('../assets/images/backIco.png')} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 24,
    backgroundColor: '#FFF',
  },
  headerBtn: {
    height: 32,
    width: 32,
    backgroundColor: '#000',
    padding: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    // fontFamily: 'Helvetica',
    fontSize: 32,
    color: '#000',
    fontWeight: '700',
  },
});
