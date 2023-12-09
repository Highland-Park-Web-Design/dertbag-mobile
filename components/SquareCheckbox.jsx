import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ActiveSelect from '../Icons/ActiveSquareSelect.svg';
import InActiveSelect from '../Icons/InactiveSquareSelect.svg';

function SquareCheckbox() {
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

export default SquareCheckbox;
