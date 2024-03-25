import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving err or
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const removeData = async key => {
  try {
    const jsonValue = await AsyncStorage.removeItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const removeMultipleData = async key => {
  try {
    const jsonValue = await AsyncStorage.multiRemove(key);
    return jsonValue;
  } catch (e) {
    // error reading value
  }
};

export const clearStorage = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    // error reading value
  }
};
