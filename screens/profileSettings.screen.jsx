import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const settingsOptions = [
  {title: 'Settings'},
  {title: 'My Orders'},
  {title: 'Stores'},
  {title: 'Get Help'},
  {title: 'Send Us Feedback'},
  {title: 'Legal Information'},
  {title: 'About Dertbag'},
  {title: 'Sign Out'},
];

const Separator = () => <View style={styles.separator} />;

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={settingsOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.optionContainer}>
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={Separator}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  optionContainer: {
    paddingVertical: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});

export default Settings;
