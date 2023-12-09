import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ActiveSelect from '../Icons/ActiveRoundSelect.svg';
import InActiveSelect from '../Icons/InactiveRoundSelect.svg';

function RoundCheckbox() {
  const [checkState, setCheckState] = useState(false);
  return (
    <View>
      {!checkState ? (
        <TouchableOpacity onPress={() => setCheckState(true)}>
          <InActiveSelect />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setCheckState(false)}>
          <ActiveSelect />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default RoundCheckbox;
